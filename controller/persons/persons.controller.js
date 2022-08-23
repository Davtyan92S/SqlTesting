const format = require('pg-format');
const pool = require('../../db/db')


const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM persons ORDER BY id ASC');
    res.status(200).json(response.rows);
    res.send(response)
};

const getAllUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM persons');
    res.status(200).json(response.rows);
    res.send(response)
}

const showElders = async (req, res) => {
    const response = await pool.query('SELECT * FROM elders');
    res.status(200).json(response.rows);
    res.send(response)
}

const getUsersDistinctAge = async (req, res) => {
    const response = await pool.query('SELECT DISTINCT age FROM persons');
    res.status(200).json(response.rows);
    res.send(response)
};

const getUsersByAge = async (req, res) => {
    const { age } = req.body
    const response = await pool.query(`SELECT * FROM persons where age < $1`, [age])
    res.status(200).json(response.rows);
    res.send(response)
}

const searchUserByNameLike = async (req, res) => {
    const { name } = req.body
    const response = await pool.query(`SELECT * FROM persons WHERE name LIKE $1`, ['%' + name + '%'],)
    res.status(200).json(response.rows);
    res.send(response)
}

const searchUserByNameILike = async (req, res) => {
    const { name } = req.body
    const response = await pool.query(`SELECT * FROM persons WHERE name ILIKE $1`, ['%' + name + '%'],)
    res.status(200).json(response.rows);
    res.send(response)
}

const getUsersGroupByAge = async (req, res) => {
    const response = await pool.query('SELECT COUNT(id), age FROM persons GROUP BY age ORDER BY COUNT(id) ASC');
    res.status(200).json(response.rows);
    res.send(response)
};



const insertUser = async (req, res) => {
    const { name, firstName, age, country, city } = req.body
    await pool.query('INSERT INTO persons (name,firstName,age,country,city) VALUES ($1, $2, $3, $4, $5)', [name, firstName, age]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: { name, firstName, age, country, city }
        }
    })
};

const insertManyUsersPgFormat = async (req, res) => {
    const todo = req.body.map((i) => [i.name, i.firstName, i.age, i.country, i.city])
    await pool.query(format('INSERT INTO persons (name,firstName,age,country,city) VALUES %L', todo));
    res.json({
        message: 'Users Added successfully',
    })
}

const insertManyUsers = async (req, res) => {
    let todo = req.body.map(i =>
        `('${i.name}','${i.firstName}','${i.age}','${i.country}','${i.city}') `
    )
    await pool.query(`INSERT INTO persons (name,firstName,age,country,city) VALUES ${todo} `);
    res.json({
        message: 'Users Added successfully',
    })
}


const updateUser = async (req, res) => {
    const id = (req.params.id);
    const { name, firstName, age, country, city } = req.body;
    await pool.query('UPDATE persons SET name = $1, firstName = $2,age = $3,country = $3,city = $4 WHERE id = $5', [
        name,
        firstName,
        age,
        country,
        city,
        id
    ]);
    res.json({
        message: 'User Updated Successfully',
        body: {
            user: { name, firstName, age ,country, city}
        }
    });
}

const updateManyUsers = async (req, res) => {
    let todo = req.body.map(i =>
        `('${i.name}','${i.firstName}','${i.age}','${i.country}','${i.city}','${i.id}') `
    )
    console.log(todo)
    await pool.query('UPDATE persons SET name = $1, firstName = $2,age = $2,country = $4,city = $5 WHERE id = $6', [todo]);
    res.json({
        message: 'User Updated Successfully',
        body: {
            user: { name, firstName, age ,country, city}
        }
    });
}


const deleteUser = async (req, res) => {
    const id = req.params.id
    console.log(id)
    await pool.query('DELETE FROM persons where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
}

const virtualTable = async (req, res) => {
    const response = await pool.query('CREATE VIEW elders AS SELECT name, firstName FROM persons where age > 30;');
    console.log(response)
    res.status(200).json(response.rows);
    res.send(response)
}





module.exports = {
    showElders,
    virtualTable,
    getAllUsers,
    getUsers,
    insertUser,
    updateUser,
    deleteUser,
    getUsersDistinctAge,
    getUsersGroupByAge,
    getUsersByAge,
    insertManyUsers,
    insertManyUsersPgFormat,
    searchUserByNameLike,
    searchUserByNameILike,
    updateManyUsers
};