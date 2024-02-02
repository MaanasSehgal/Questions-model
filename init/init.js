const mongoose = require("mongoose");
const Question = require("../models/question");
const data = require("./data");

main()
    .then(() => {
        console.log("Successfully connected to DB");
    })
    .catch((err) => {
        res.send(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/questionmodel");
}

const reinitDatabase = async () => {
  
};

reinitDatabase();
