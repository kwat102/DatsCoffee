var mongoose = require("mongoose");

//Schema Setup

var homeSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
        comments:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }]
});

module.exports = mongoose.model("Home", homeSchema);