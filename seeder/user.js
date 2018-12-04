var user = [{
    firstName: 'john',
    lastName: 'Mbilo',
    email: 'jb@gmail.com',
    username: 'jbmbilo',
    password: '121364'
},
{
    firstName: 'james',
    lastName: 'njenag',
    email: 'jamo@gmail.com',
    username: 'jyamo',
    password: '23784'
},
{
    firstName: 'mike',
    lastName: 'Doe',
    email: 'doe@gmail.com',
    username: 'mdoejb',
    password: '1ls7363b'
},
]


var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/nodeShop')
mongoose.set('useFindAndModify', false)

var User = require('../models/user');

user.forEach(user => {
    var newUser = new User(user)
    
    newUser.save(function(err,result){
        var count = 0
        if(err){
            
            console.log(err)
        }
        count ++;
        setTimeout(function(){
            if(count >= result.length){
                mongoose.disconnect
            }
            return
        },0)
        
    })
    
});