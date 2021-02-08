// Node Module that will connect to postgesql
const pg = require('pg');

// Setup PG to connect to the database
const Pool = pg.Pool;

const pool = new Pool({
    database: 'famous_people', // database name 
    host: 'localhost', // where to find the database
    port: 5432,        // port for finding the database
    max: 10,           // max number of connections for the pool
    idleTimeoutMillis: 30000, // 30 seconds before timeout/cancel query
    user: process.env.PG_USER,
    password: process.env.PG_SECRET
});

// Listener setup on the pool isn't required, 
// but can be super handy for troubleshooting.
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;