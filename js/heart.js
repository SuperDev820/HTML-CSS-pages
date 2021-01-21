$(document).ready(function(){
    $(".header-heart").click(function(){
        var heart_class = $(this).find("i").attr("class");
        var n = heart_class.includes("far");
        if (n === true) {
            $(this).find("i").removeClass("far");
            $(this).find("i").addClass("fa");
        } else {
            $(this).find("i").removeClass("fa");
            $(this).find("i").addClass("far");
        }
    });
    $(".sticky-heart").click(function(){
        var heart_class = $(this).find("i").attr("class");
        var n = heart_class.includes("far");
        if (n === true) {
            $(this).find("i").removeClass("far");
            $(this).find("i").addClass("fa");
        } else {
            $(this).find("i").removeClass("fa");
            $(this).find("i").addClass("far");
        }
    });
});