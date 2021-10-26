const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')
const galleryItems = require('../modules/gallery.data');


// database PUT Route; 
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;

    let queryText = `
        UPDATE 	"gallery"
        SET 	"likes" = "likes" + 1
        WHERE 	"id" = $1; ` ;

    let values = [galleryId];

    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('router.put /gallery/like ERROR', error);
            res.sendStatus(500);
        });
    
}); // END PUT Route;



// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    const queryText = `
        SELECT *
        FROM     "gallery"
        ORDER BY "likes" DESC; `;

    pool.query(queryText)
        .then(response => {
            // console.log('response from gallery db:', response);
            res.send(response.rows);
        }).catch(error => {
            console.log('ERROR from gallery db:', error);
            res.sendStatus(500);
        }); 
    
}); // END GET Route




// script to push galleryItems array and INSERT INTO our SQL database; call the post with POSTMAN;
// leave off res.sendStatus(201) and the .then && .catch so it doesn't trip after the fist index in the loop;
// this is only to push data into SQL and not meant to do anything than that; the response and the GET will clash as they aren't connected; 
// after you POST then comment out the router.post and restart the server and client; 

router.post('/', (req, res) => {

    for(let item of galleryItems){
    
        let queryText = `
            INSERT INTO "gallery"
                ("id", "path", "description", "tagline", "likes")
            VALUES
                ($1, $2, $3, $4, $5)` ;

        let values = [item.id, item.path, item.description, item.tagline, item.likes];
        
        pool.query(queryText, values)
    }
})


module.exports = router;