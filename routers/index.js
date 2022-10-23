const express = require("express")
const router = express.Router()
const movieDb = require("../models/movie")
router.get("/api/movies", (req, res)=>{
    movieDb.find({}, (err, data)=>[
        res.send(data)
    ])
})
router.post("/api/movies", (req, res)=>{
    const {title, year, country, id, imdb_score, category} = req.body
    const db = new movieDb({
        title: title,
        year: year,
        country: country,
        id: id,
        imdb_score: imdb_score,
        category: category
    })
    db.save()
})
//update---------------------------------------


router.get("/api/movies/:id", (req, res)=>{
    movieDb.findById(req.params.id, (err, data)=>{
        res.send(data)
    })
})

router.put("/api/movies/:id", (req, res)=>{
    const {title, year, country, id, imdb_score, category} = req.body
    const db = {
        title: title,
        year: year,
        country: country,
        id: id,
        imdb_score: imdb_score,
        category: category
    }
    movieDb.findByIdAndUpdate(req.params.id, db, (err, data)=>{
        res.send(data)
    })
})

router.delete("/api/movies/:id", (req, res)=>{
    movieDb.findByIdAndDelete(req.params.id, (err, data)=>{
        res.send(data)
    })
})

router.get("/api/movies/top10", (req, res)=>{
    const score = movieDb.find({}).sort({imdb_score: -1}).limit(10)
    res.send(score)
})


module.exports = router