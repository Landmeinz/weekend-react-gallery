const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route


// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    const queryText = `
        SELECT *
        FROM "gallery"; `;

    pool.query(queryText)
        .then(response => {
            console.log('response from gallery db:', response);
            res.send(response.rows);
        }).catch(error => {
            console.log('ERROR from gallery db:', error);
            res.sendStatus(500);
        }); 
    
}); // END GET Route

// script to feed current galleryItems data into the SQL gallery database??; 

// router.post('/', (req, res) => {
//     console.log('POST req.body:', req.body);
//     let newPost = req.body
//     console.log(newPost);
    
//     let queryText = '';

//     for(let i of galleryItems) {
//         queryText = `
//             INSERT INTO "gallery"
//                 ("id", "path", "description", "tagline", "likes")
//             VALUES
//                 (${i.id}, ${i.path}, ${i.description}, ${i.tagline}, ${i.likes}); ` ;
//     }

//     // let values = [newPost.id, newPost.path, newPost.description, newPost.tagline, newPost.likes]

//     pool.query(queryText)
//         .then(response => {
//             res.sendStatus(201);
//         }).catch(error => {
//             console.log('POST to /gallery ERROR', error);
//             res.sendStatus(500);
//         });
// })


module.exports = router;