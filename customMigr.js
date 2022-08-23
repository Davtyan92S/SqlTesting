
const pool = require('./db/db')

// create persons table
pool.connect((err, client,) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query(`CREATE TABLE persons (
        Id  int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name varchar(255) NOT NULL,
        firstName varchar(255),
        age int
    );`)
})

pool.connect((err, client,) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query(`ALTER TABLE "persons" ADD "country" VARCHAR(255);`)
})

pool.connect((err, client,) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query(`ALTER TABLE "persons" ADD "city" VARCHAR(255);`)
})

// /**Orders */
// //Create orders table

pool.connect((err, client,) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query(`CREATE TABLE errors (
        Id  int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name varchar(255) NOT NULL,
        type varchar(255),
        price int NULL
    )`)
})

pool.connect((err, client,) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query(`ALTER TABLE "orders" ADD "weight" VARCHAR(255);`)
})

pool.connect((err, client,) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query(`ALTER TABLE "orders" ADD "size" VARCHAR(255);`)
})



pool.connect((err, client,) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query(`CREATE TABLE errors (
        Id  int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        message varchar(255) NOT NULL,
    );`)
})