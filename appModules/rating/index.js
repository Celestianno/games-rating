const makeRatingFile = require("./rating-file.js");
const { createRating, updateRating } = require("./calculations.js");
const config = require("./config.js");

module.exports = {
    makeRatingFile,
    createRating,
    updateRating,
    config
}