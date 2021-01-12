$(document).ready(function(){
    $(".view").click(function(){
        $(".view").toggleClass("expanded");
        $(".view").toggleClass("collapsed");
        $(".expanded").html("View Less");
        $(".collapsed").html("View More");

        $(".features").toggleClass("show");
        
    });
});