$(document).ready(function () {
    let posts;
    function getPosts() {
        $.get("/api/posts", function (data) {
            console.log("Posts: " + data);
            posts = data;
            setPosts();
        })
    }

    function setPosts() {


    }


    function postnewBlog() {
        $('button').on("submit", function (event) {

        })

    }

    function deleteBlog() {
        $('button').on("click", function (event) {

        })
    }


});