'use strict';

module.exports = function(initItem){
    this.items = initItem.items || {};
    this.totalPrice = initItem.totalPrice || 0;
    this.totalQty = initItem.totalQty || 0;
  
    this.addItem = function(item){
        var addedItem = this.items[item._id];
        if(!addedItem){
            addedItem = this.items[item._id] = {item: item, price: 0, qty: 0}
        }
        addedItem.qty++;
        addedItem.price = addedItem.item.price * addedItem.qty
        this.totalQty++;
       this.totalPrice += Number(addedItem.item.price);
       }
    
    this.reduceByOne = function(id){
        this.items[id].qty--;
        this.items[id].price -= this.items[id].item.price;
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price
        if(this.items[id].qty <= 0){
            delete this.items[id]; 
        }
    }
    
    this.removeAll = function(id){
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= Number(this.items[id].price);
        delete this.items[id];
    }


       this.generateArray = function(){
        var arr = [];
        for(var id in this.items){
            arr.push(this.items[id]);
        }
        return arr;
    }
    }

   


