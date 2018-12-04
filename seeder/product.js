var product = [{
    imagePath: 'uploads/pic1',
    title: 'Mbilo wfdk',
    discription: 'lorem10safns fdsngds gsgds gdsg',
    price: '100'
},
{
    imagePath: 'uploads/pic2',
    title: 'f;dvgdds',
    discription: 'lorem10safns fdsngds gsgds gdsg',
    price: '53'
},
{
    imagePath: 'uploads/pic3',
    title: 'Mbilo wfdk',
    discription: 'lorem10safns fdsngds gsgds gdsg',
    price: '72'
},
{
    imagePath: 'uploads/pic4',
    title: 'dflsnf sdfdsfg k',
    discription: 'lorem10safns fdsngds gsgds gdsg',
    price: '300'
},
{
    imagePath: 'uploads/pic5',
    title: 'kldjf sdfdsf',
    discription: 'lorem10safns fdsngds gsgds gdsg',
    price: '623'
},
]


var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/nodeShop', {useNewUrlParser: true})
mongoose.set('useFindAndModify', false)

var Product = require('../models/product');

product.forEach(one => {
    var newProduct = new Product(one)
    
    newProduct.save(function(err,result){
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