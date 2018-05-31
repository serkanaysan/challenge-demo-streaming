var express = require('express');
var router = express.Router();
var underscore = require("underscore");
var fs = require('fs');

router.get('/series', function(req, res){
	fs.readFile('./routes/sample.json', 'utf8', function(err, data){
        if(err){
            res.status(400).json({code: "400", value: "Opps, something went wrong..."})
        }
        else {
            var json = JSON.parse(data);
            
            var filterJson = underscore.where(json.entries, {programType: "series"});
            filterJson = underscore.filter(filterJson, function(it) { return it.releaseYear >= 2010 });
            filterJson = underscore.sortBy(filterJson, "title");
            filterJson = underscore.first(filterJson, 21);

            res.status(200).json(filterJson)
        }
    });
});

router.get('/movies', function(req, res){
    fs.readFile('./routes/sample.json', 'utf8', function(err, data){
        if(err){
            res.status(400).json({code: "400", value: "Opps, something went wrong..."})
        }
        else {
            var json = JSON.parse(data);
            
            var filterJson = underscore.where(json.entries, {programType: "movie"});
            filterJson = underscore.filter(filterJson, function(it) { return it.releaseYear >= 2010 });
            filterJson = underscore.sortBy(filterJson, "title");
            filterJson = underscore.first(filterJson, 21);

            res.status(200).json(filterJson)
        }
    });
});

module.exports = router;