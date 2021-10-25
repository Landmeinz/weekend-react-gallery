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
            console.log('response from gallery db:', response);
            res.send(response.rows);
        }).catch(error => {
            console.log('ERROR from gallery db:', error);
            res.sendStatus(500);
        }); 
    
}); // END GET Route




// trying to write a script to pass out gallery.data into SQL;
router.post('/', (req, res) => {
    console.log('POST req.body:', req.body);

    let queryText = ``;
    let values = []

    for(let item of galleryItems) {
        queryText = `
        INSERT INTO "gallery"
            ("id", "path", "description", "tagline", "likes")
        VALUES
            ($1, $2, $3, $4, $5); ` ;

        values = [item.id, item.path, item.description, item.tagline, item.likes];

        pool.query(queryText, values)
        .then(response => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('POST to /gallery ERROR', error);
            res.sendStatus(500);
        });
    }

});



module.exports = router;