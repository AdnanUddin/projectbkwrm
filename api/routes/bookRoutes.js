module.exports = function(app){
    var bookController = require('../controllers/bookController');

    // get all books
    app.route('/books')
        .get(bookController.list_all_books);

    app.route('/books/:_id')
        .get(bookController.get_book)
};