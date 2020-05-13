$(document).ready(function() {

function getPosts() {
    $.get("/api/posts", function (data) {
        console.log("Posts: " + data);
        setPosts();
    })
}

function setPosts() {
    
}
    
    $('button').on("submit", function(event) {
    
    }).

});