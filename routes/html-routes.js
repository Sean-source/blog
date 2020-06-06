
var path = require("path");
var db = require("../models")

module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    db.Post.findAll({}).then(posts => {
      console.log("Posts: ", posts)
      res.render("index", { blogs: posts })
    })
  });

  app.get("/create", function (req, res) {
    res.render("create")
  });




};
