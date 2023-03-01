const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja.js');

router.get('/ninjas', (req, res, next) => {
    res.send({type: 'GET'});
});

router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    });
});

router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndDelete({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});

module.exports = router;