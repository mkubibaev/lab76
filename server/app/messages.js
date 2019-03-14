const express = require('express');
const nanoid = require('nanoid');
const fileDb = require('../fileDb');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(fileDb.getItems());
});

// router.post('/', (req, res) => {
//     req.body.id = nanoid();
//     fileDb.addItem(req.body);
//     res.send({message: 'OK'});
// });

module.exports = router;