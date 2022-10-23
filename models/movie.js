const mongoose = require("mongoose")
const schema = mongoose.Schema

const db = new schema({
    title: {
        type: String,
    },
    country: {
        type: String,
    },
    year: {
        type: Number,
    },
    id: {
        type: Number,
    },
    imdb_score: {
        type: Number,
    },
    category: {
        type: String,
    }

})

module.exports = mongoose.model("Movie", db)