const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')



// /messages database PUT Route; 
router.post('/', (req, res) => {
    console.log(req.body);
    const newMessage = req.body;

    let queryText = `
        INSERT INTO "messages"
	        ("message")
        VALUES
	        ($1);` ;

    let values = [newMessage.message];

    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('router.put /messages ERROR', error);
            res.sendStatus(500);
        });
    
}); // END PUT Route;



// /messages GET Route
router.get('/', (req, res) => {
    console.log();
    
    const queryText = `
        SELECT      *
        FROM        "messages"
        ORDER BY    "id" DESC;`;

    pool.query(queryText)
        .then(response => {
            console.log('response from messages db:', response);
            res.send(response.rows);
        }).catch(error => {
            console.log('ERROR from messages db:', error);
            res.sendStatus(500);
        }); 
    
}); // END GET Route


module.exports = router;