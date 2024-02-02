const express = require("express");
const router = express.Router();
const Question = require("../models/question");
const mongoose = require("mongoose");
const questionController = require("../controllers/question");

// REINITIALIZE DATABASE
router.get("/reinitializedb", questionController.reinitDatabase);

//SHOW ROUTE: Show all questions
router.get("/", questionController.showquestions);

//GET ROUTE: Render New Form
router.get("/new", questionController.renderNewForm);

// POST ROUTE: New question
router.post("/new", questionController.postNewQuestion);

//GET ROUTE FOR EDIT
router.get("/edit/:id", questionController.renderEditForm);

//UPDATE ROUTE: Update a particular question
router.patch("/edit/:id", questionController.editQuestion);

//DESTROY ROUTE
router.delete("/delete/:id", questionController.destroyQuestion);

module.exports = router;
