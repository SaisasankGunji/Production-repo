const express = require("express");
const isAuthenticated = require("../middlewares/isAuth");
const categoryController = require("../controllers/categoryCtrl");
const categoryRouter = express.Router();

// Add Category
categoryRouter.post("/create", isAuthenticated, categoryController.create);

// List Categories
categoryRouter.get("/lists", isAuthenticated, categoryController.lists);

// Update Category
categoryRouter.put("/update/:categoryId", isAuthenticated, categoryController.update);

// Delete Category
categoryRouter.delete("/delete/:id", isAuthenticated, categoryController.delete);

module.exports = categoryRouter;
