$(document).ready(function(){
  $("#productInfoTab").find(".active").parent("li").css("border-bottom-color", "#182861");
  $("#productInfoTab").find(".active").parent("li").css("background-color", "#e5f0fb");
  $("#productInfoTab").find("a").click(function(){
    setTimeout(
	  function() 
	  {
	  	$("#productInfoTab").find("li").css("border-bottom-color", "#bfb8b8");
	  	$("#productInfoTab").find("li").css("background-color", "#eee");
	    $("#productInfoTab").find(".active").parent("li").css("border-bottom-color", "#182861");
	    $("#productInfoTab").find(".active").parent("li").css("background-color", "#e5f0fb");
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
  $("#serviceTermsTab").find(".active").css("font-weight", "700");
  $("#serviceTermsTab").find("a").click(function(){
    setTimeout(
	  function() 
	  {
	  	$("#serviceTermsTab").find("li").css("border-bottom-color", "white");
	  	$("#serviceTermsTab").find("a").css("font-weight", "400");
	    $("#serviceTermsTab").find(".active").parent("li").css("border-bottom-color", "black");
	    $("#serviceTermsTab").find(".active").css("font-weight", "700");
	  }, 100);
    
  });
});