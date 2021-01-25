
$(document).ready(function(){
    $(".top-image").click(function(){
        var src = $(this).attr("src");
        $("#imageModalCarousel").find(".active").removeClass("active");
        var imgEl = $("#imageModalCarousel").find("[src='" + src + "']");
        imgEl.parent("div").addClass("active");
    });
    $(".default-img").click(function(){
        var src = $(this).attr("src");
        $("#imageModalCarousel1").find(".active").removeClass("active");
        var imgEl = $("#imageModalCarousel1").find("[src='" + src + "']");
        imgEl.parent("div").addClass("active");
    });
});