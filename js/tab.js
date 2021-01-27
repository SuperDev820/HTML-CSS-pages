$(document).ready(function(){
  $("#productInfoTab").find(".active").parent("li").css("border-bottom-color", "#182861");
  $("#productInfoTab").find(".active").parent("li").css("background-color", "#F5F9FF");
  $("#productInfoTab").find("a").click(function(){
    setTimeout(
	  function() 
	  {
	  	$("#productInfoTab").find("li").css("border-bottom-color", "#979797");
	  	$("#productInfoTab").find("li").css("background-color", "#ECECEC");
	    $("#productInfoTab").find(".active").parent("li").css("border-bottom-color", "#182861");
	    $("#productInfoTab").find(".active").parent("li").css("background-color", "#F5F9FF");
	  }, 100);
    
  });

  $("#priceTab").find(".active").parent("li").css("border-bottom-color", "#182861");
  $("#priceTab").find("a").click(function(){
    setTimeout(
	  function() 
	  {
	  	$("#priceTab").find("li").css("border-bottom-color", "#eee");
	    $("#priceTab").find(".active").parent("li").css("border-bottom-color", "#182861");
	  }, 100);
    
  });

  $("#payPriceTab").find(".active").parent("li").css("border-bottom-color", "#182861");
  $("#payPriceTab").find(".active").parent("li").css("border-bottom-width", "4px");
  $("#payPriceTab").find("a").click(function(){
    setTimeout(
	  function() 
	  {
	  	$("#payPriceTab").find("li").css("border-bottom-color", "#ddd");
		$("#payPriceTab").find("li").css("border-bottom-width", "1px");

	    $("#payPriceTab").find(".active").parent("li").css("border-bottom-color", "#182861");
	    $("#payPriceTab").find(".active").parent("li").css("border-bottom-width", "4px");

	    if ($("#payPriceTab").find(".active").attr("href") === "#payPriceTab2") {
	    	$("#payPriceTab").parents(".popuptext").addClass("changed");
	    } else {
	    	$("#payPriceTab").parents(".popuptext").removeClass("changed");
	    }
	  }, 100);
    
  });

  $("#accountTab").find(".active").parent("li").css("border-left-color", "#f9693b");
  $("#accountTab").find(".active").parent("li").css("background-color", "#eee");
  $("#accountTab").find("a").click(function(){
    setTimeout(
	  function() 
	  {
	  	$("#accountTab").find("li").css("border-left-color", "white");
	  	$("#accountTab").find("li").css("background-color", "white");
	    $("#accountTab").find(".active").parent("li").css("border-left-color", "#f9693b");
	    $("#accountTab").find(".active").parent("li").css("background-color", "#eee");
	  }, 100);
    
  });

  $("#serviceTermsTab").find(".active").parent("li").css("border-bottom-color", "black");
  $("#serviceTermsTab").find(".active").css("color", "black");
  $("#serviceTermsTab").find("a").click(function(){
    setTimeout(
	  function() 
	  {
	  	$("#serviceTermsTab").find("li").css("border-bottom-color", "white");
	  	$("#serviceTermsTab").find("a").css("color", "#454F5B");
	    $("#serviceTermsTab").find(".active").parent("li").css("border-bottom-color", "black");
	    $("#serviceTermsTab").find(".active").css("color", "black");
	  }, 100);
    
  });

  $("#aboutusTab").find(".active").css("color", "white");
  $("#aboutusTab").find(".active").css("background-color", "#f9693b");
  $("#aboutusTab").find("a").click(function(){
    setTimeout(
	  function() 
	  {
	  	$("#aboutusTab").find("a").css("color", "#454F5B");
	  	$("#aboutusTab").find("a").css("background-color", "white");
		$("#aboutusTab").find(".active").css("color", "white");
		$("#aboutusTab").find(".active").css("background-color", "#f9693b");
	  }, 100);
    
  });

  $(".date-div").click(function(){
	$(".date-div").css("border-color", "white");
	$(".date-div").css("color", "black");
	$(".date-div").css("font-weight", "400");
	$(this).css("border-color", "#454F5B");
	$(this).css("color", "#182861");
	$(this).css("font-weight", "600");
  });
  $(".time-div").click(function(){
	$(".time-div").css("border-color", "white");
	$(".time-div").css("color", "black");
	$(".time-div").css("font-weight", "400");
	$(this).css("border-color", "#454F5B");
	$(this).css("color", "#182861");
	$(this).css("font-weight", "600");
  });
});