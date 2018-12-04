var User = require('../models/user');


module.exports.index  = function(req, res){
    User.find(function(err,docs){
      /* var productChunks = [];
       var chunkSize = 1;
       for(var i =0; i < docs.length; i += chunkSize){
           productChunks.push(docs.slice(i, i+ chunkSize))
       }
       res.render('admin/userlist', {userList : productChunks})
    */

   res.render('admin/userlist', {userList : docs})
    })

   
}



module.exports.find  = function(req, res){
    User.findById({id: req.params.id}, function(err, user){
        if(err){
            return err; 
        }else {
            res.render('user/profile')
        }
    })

   
}
