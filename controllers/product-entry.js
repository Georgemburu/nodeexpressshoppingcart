'use strict';

var Product = require('../models/product');

module.exports.index  = function(req, res){
    Product.find(function(err,docs){
       var productChunks = [];
       var chunkSize = 3;
       for(var i =0; i < docs.length; i += chunkSize){
           productChunks.push(docs.slice(i, i+ chunkSize))
       }
       
            res.render('index', {products: docs})
        
    })

   
}