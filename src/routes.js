const {
  grabBookHandler,
  findAllBook,
  findBookIdHandler,
  modifyBookIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: grabBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: findAllBook,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: findBookIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: modifyBookIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
