const express = require ("express");
const { getAllPosts, createPosts, updateRegistros, deleteRegistros } = require("../controllers/postsController");
const routes = express.Router();


routes.get("/", getAllPosts);
routes.post("/", createPosts);
routes.put("/:id", updateRegistros);
routes.delete("/:id", deleteRegistros);

module.exports =routes;