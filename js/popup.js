
$(document).ready(function(){
  var prev_popuptext = $("z");
  var prev_text = "";
  $(".popup-header").on("click", function() {
  	var popuptext = $(this).parent(".popup").find(".popuptext");
  	popuptext.toggleClass("show");
    var text = $(this).find("span:first").text();
    // console.log(prev_text)
    // console.log(text)
    if (prev_text === text) {
    } else {
  	  prev_popuptext.removeClass("show");
    }
  	prev_popuptext = popuptext;
    prev_text = text;
  });
  $(".close").on("click", function() {
  	var popuptext = $(this).parent(".popuptext");
  	popuptext.toggleClass("show");
  });
  $(".apply").on("click", function() {
  	var popuptext = $(this).parents(".popuptext");
  	popuptext.toggleClass("show");
  });
});