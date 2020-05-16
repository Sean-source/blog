$(document).ready(function () {
    let posts;
    // function getPosts() {
    //     $.get("/api/posts", function (data) {
    //         console.log("Posts: " + data);
    //         posts = data;
    //         setPosts();
    //     })
    // }

    



    function completeBlog() {

        $('.update-item').on("click", function (event) {
            const id = $(this).attr("data-id")
            $.ajax({
                url: "/api/posts/" + id,
                method: "PUT"
            }).then(function (post) {
                location.reload();
            })
        })
    }
    function deleteBlog() {
        $('.delete-item').on("click", function (event) {
            const id = $(this).attr("data-id")
            $.ajax({
                url: "/api/posts/" + id,
                method: "DELETE",
            }).then(function (post) {
                location.reload();
            })
        })
    }

    function postnewBlog() {
        $('#add-item').on("click", function (event) {
            alert("Post working")
            const newBlog = {
                title: $("#items").val(),
                body: $("#description").val()
            }

            $.post("/api/posts", newBlog, function (posts) {
                console.log(posts);
                location.reload();
            })
        })

    }



    postnewBlog();
    completeBlog();
    deleteBlog();
});