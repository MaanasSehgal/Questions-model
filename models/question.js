const mongoose = require("mongoose");
const {Schema} = mongoose;

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["main", "side"],
    },
});

module.exports = mongoose.model("Question", QuestionSchema);
