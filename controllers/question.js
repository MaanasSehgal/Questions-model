const Question = require("../models/question");
const data = require("../init/data");

module.exports.reinitDatabase = async (req, res) => {
    try {
        await Question.deleteMany();
        await Question.insertMany(data);
        console.log("Database was reinitialized!");
        res.redirect("/questions");
    } catch (err) {
        console.error("Error reinitializing database:", err.message);
    }
};

module.exports.showquestions = async (req, res) => {
    try {
        const allQuestions = await Question.find({});
        if (!allQuestions) {
            res.send("No questions found");
        }
        res.render("show.ejs", {allQuestions});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

module.exports.renderNewForm = (req, res) => {
    res.render("new.ejs");
};

module.exports.postNewQuestion = async (req, res) => {
    try {
        console.log(req.body);
        const newQuestion = await Question.create(req.body);
        console.log(newQuestion);
        console.log("Question saved!");
        res.redirect("/questions");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

module.exports.renderEditForm = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        console.log(question);
        res.render("edit.ejs", {question});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports.editQuestion = async (req, res) => {
    try {
        const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedQuestion);
        console.log("Question updated successfully");
        res.redirect("/questions");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

module.exports.destroyQuestion = async (req, res) => {
    try {
        // req.headers.authorization = process.env.ACCESS_TOKEN;
        const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
        console.log(deletedQuestion);
        console.log("Question Deleted Successfully");
        res.redirect("/questions");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
