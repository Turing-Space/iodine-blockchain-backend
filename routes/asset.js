var express = require('express');
var router = express.Router();

router.get('/info', function(req, res, next) {
    res.send('API entry to get asset info');
});

router.get('/update', function(req, res, next) {
    res.send('API entry to update asset info (e.g. status)');
});

router.get('/transfer', function(req, res, next) {
    res.send('API entry to transfer asset ownership');
});

router.get('/publish', function(req, res, next) {
    res.send('API entry to add new asset');
});

module.exports = router;