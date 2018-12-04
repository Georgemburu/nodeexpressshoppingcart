'use strict';

module.exports = function(app){
    var cors = require('cors');
    var corsOptions = {
    origin: function (origin,callback){
        if(process.env.CORS_WHITELIST.split('').indexOf(origin)!=-1){
            callback(null, true)
        }else{
            callback( new Error('Not authorized by cors configuration'))
        }
    
    },
    Method: 'GET, PUT, PATCH, DELETE, POST, UPDATE'
}

    var publicOptions = {
        origin: function (origin,callback){
           
                callback(null, true)
        
        },
        Method: 'GET, PUT, PATCH, DELETE, POST, UPDATE'
    }

app.use('/public',cors(publicOptions))
app.options('*',cors(corsOptions));
app.use(cors(corsOptions))
}

