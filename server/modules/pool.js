const pg = require('pg');
const Pool= pg.Pool;

const config = {
    database: 'react_gallery',  // database name (this will change)
    host: 'localhost',          // where to find the database
    port: 5432,                 // port for finding the database
    max: 10,                    // max number of connections for the pool
    idleTimeoutMillis: 30000    // 30 seconds before timeout/cancel query
}

const pool = new Pool(config);



pool.on('connect', () => {
    console.log('connected to react_gallery data'); 
});

pool.on('error', (error) => {
    console.log('ERROR connecting to react_gallery data', error);
    
})



module.exports = pool;