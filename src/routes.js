const {
  getAllBookHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
  addBookHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/book",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/book",
    handler: getAllBookHandler,
  },
  {
    method: "GET",
    path: "/book/{id}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/book/{id}",
    handler: editBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/book/{id}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
