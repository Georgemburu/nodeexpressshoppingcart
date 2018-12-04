'use strict';

module.exports = function(app){
        /****************************
         * user
        *******************************/
    var userRoute = require('./user_entry');
    var productIndexRoute = require('./product_entry');
    var userSignupRoute = require('./user_signup');
    var userLoginRoute = require('./user_login');
    var userProfileRoute = require('./user_profile');

        

    productIndexRoute(app)
    userRoute(app)
    userSignupRoute(app)
    userLoginRoute(app)
    userProfileRoute(app)

        /****************************
         * cart
        *******************************/
    var addCartRoute = require('./add_cart');
    var indexCartRoute = require('./index_cart');
    var checkoutCartRoute = require('./checkout_cart');
    var removeOneCartRoute = require('./remove_one');
    var removeAllCartRoute = require('./remove_all');
    addCartRoute(app)
    indexCartRoute(app)
    checkoutCartRoute(app)
    removeOneCartRoute(app)
    removeAllCartRoute(app)

        /****************************
         * admin
        *******************************/
    var userListRoute = require('./user_list');
    var postProductRoute = require('./post_product');


    userListRoute(app)
    postProductRoute(app)
   
}