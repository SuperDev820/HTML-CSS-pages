
$(document).ready(function(){
    $(".top-image").click(function(){
        var src = $(this).attr("src");
        $("#modal-image").attr("src", src);
    });
    $(".product-img").click(function(){
        var src1 = $(this).find(".default-img").attr("src");
        $("#modal-image").attr("src", src1);
    });
});