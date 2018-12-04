'use strict';

var User = require('../models/user');


/*module.exports.index  = function(req, res){
    User.findOneAndDelete({id: req.params.id}, function(err, user){
        if(err){
            return err; 
        }else {
            //res.render('admin/userlist', {userInfo: `user of id: ${req.params.id} was successfully deleted`  })
            req.flash('msg',`user of id: ${req.params.id} was successfully deleted`);
            res.redirect('/admin/userlist');
        }
    })

   
}
*/
module.exports.index  = function(req, res){
    var userId = req.params.id;
    User.findOneAndDelete({id: userId}, function(err, user){
        if(err){
            return err; 
        }else {
            res.render('admin/userlist', {userInfo: `user of id: ${req.params.id} was successfully deleted`  })
        }
    })
}

module.exports.destroy  = function(req, res){
    User.findOneAndDelete({id: req.params.id}, function(err, user){
        if(err){
            return err; 
        }else {
            req.flash('msg',`user of id: ${req.params.id} was successfully deleted`);
            res.redirect('/admin/userlist');
        }
    })

   
}