const express = require('express');
const nanoid = require('nanoid');
const fileDb = require('../fileDb');

const router = express.Router();

router.get('/', (req, res) => {
    

    if (req.query.datetime) {
        const date = new Date(req.query.datetime);
        
        if (isNaN(date.getDate())) {
            return res.status(400).send({"error": "Incorrect datetime"});
        } else {
            const allMessages = fileDb.getAllMessages();
            const newMessages = allMessages.filter(message => message.datetime > req.query.datetime);

            res.send(newMessages);
        }
    } else {
        res.send(fileDb.getLastMessages());
    }
    
});

router.post('/', (req, res) => {
    if (!req.body.message) {
        return res.status(400).send({"error": "Message text is required!"});
    } else if (!req.body.author) {
        return res.status(400).send({"error": "Author is required!"});
    } else {
        req.body.id = nanoid();
        req.body.datetime = new Date().toISOString();
        fileDb.addMessage(req.body);
        res.send({message: 'OK'});
    }
    
});

module.exports = router;