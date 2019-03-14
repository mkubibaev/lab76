const express = require('express');
const nanoid = require('nanoid');
const fileDb = require('../fileDb');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(fileDb.getItems());
});

router.post('/', (req, res) => {
    if (!req.body.message) {
        return res.status(400).send({"error": "message text is required!"});
    } else if (!req.body.author) {
        return res.status(400).send({"error": "author is required!"});
    } else {
        req.body.id = nanoid();
        req.body.datetime = new Date().toISOString();
        fileDb.addItem(req.body);
        res.send({message: 'OK'});
    }
    
});

module.exports = router;