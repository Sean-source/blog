
var db = require("../model");

// Routes

module.exports = function (app) {

    // GET route for getting all of the posts
    app.get("/api/posts", function (req, res) {
        db.Post.findAll({}).then(posts => {
            console.log("All users:", JSON.stringify(posts));
            res.JSON(posts);
        })
    });

    // Get route for returning posts of a specific category
    app.get("/api/posts/category/:category", function (req, res) {
        db.Post.findAll({
            where: category = req.params.category
        }).then(posts => {
            res.JSON(posts);
        })
    });

    // Post route to post to the blog
    app.post("/api/posts", function (req, res) {
        db.Post.create({
            title: req.body.title,
            body: req.body.body,
            category: req.body.category
        }).then(post => {
            res.JSON(post);
        })
    })

    app.delete("/api/posts/:id", function (req, res) {
        db.Post.destroy({
            where: id = req.params.id
        }).then(post => {
            console.log(post);
            res.JSON(post);
        })
    })

    app.put("/api/posts/:id", function (req, res) {
        db.Post.update({
            where: id = req.params.id
        }).then(post => {
            res.JSON(post);
        })
    })
}