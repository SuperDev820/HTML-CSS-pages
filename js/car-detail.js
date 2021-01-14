$(document).ready(function(){
    $(".view").click(function(){
        $(".view").toggleClass("expanded");
        $(".view").toggleClass("collapsed");
        $(".expanded").html("VIEW LESS");
        $(".collapsed").html("VIEW MORE");

        $(".features").toggleClass("show");
        
    });
});