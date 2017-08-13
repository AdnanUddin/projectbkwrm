module.exports = function(app){
    var userController = require('../controllers/userController');

    // get all users
    app.route('/users')
        .get(userController.list_all_users);
        // .post(userController.create_user);

    app.route('/users/:_id')
        .get(userController.get_user)
    //     .put(userController.update_user)
    //     .delete(userController.delete_user);
};