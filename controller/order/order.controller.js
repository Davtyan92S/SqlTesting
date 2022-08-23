const pool = require('../../db/db')



const insterOdrer = async (req, res) => {
    const { name, type, price } = req.body
    await pool.query('INSERT INTO Orders (name,type,price) VALUES ($1, $2, $3)', [name, type, price]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: { name, type, price }
        }
    })
};

const uinionSelect = async (req, res) => {
    const result = await pool.query(`SELECT 'name' FROM persons
    UNION 
    SELECT name FROM orders;`)
    res.status(200).json(result.rows);
    res.send(result)
}

const rawNumber = async (req, res) => {
    const result = await pool.query(`SELECT 
    ROW_NUMBER() OVER(ORDER BY price )  Row,
    name, weight
     FROM orders `)
    res.status(200).json(result.rows);
    res.send(result)
}

const subQueris = async (req, res) => {
    const result = await pool.query(`SELECT name, weight
     FROM orders WHERE price =(SELECT MAX(price) FROM orders)`)
    res.status(200).json(result.rows);
    res.send(result)
}
 

module.exports = {
    rawNumber,
    insterOdrer,
    uinionSelect,
    subQueris
};