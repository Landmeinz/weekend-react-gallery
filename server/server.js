const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const galleryRouter = require('./routes/gallery.router.js');
const messagesRouter = require('./routes/messages.router.js');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', galleryRouter);
app.use('/messages', messagesRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});