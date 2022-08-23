const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '123456',
    database: 'sql',
    port: '5432'
});

module.exports = pool