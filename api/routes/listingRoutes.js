module.exports = function(app){
    var listingController = require('../controllers/listingController');

    // get all users
    app.route('/listings')
        .get(listingController.list_all_listings);
        // .post(userController.create_user);

    app.route('/listings/:_id')
        .get(listingController.get_listing)
    //     .put(userController.update_user)
    //     .delete(userController.delete_user);
};