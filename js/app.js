
(function($){

var turnedOn = false;
var start = null;
var progress=0;
	
	var r = 0;
	var g = 19;
	var b = 127;
	
	var incR = true;
	var incG = true;
	var incB = true;
	
	var minR = 0;
	var minG = 0;
	var minB = 50;
	
	var maxR = 10;
	var maxG = 40;
	var maxB = 170;

  var animateScreen = function(timestamp){
    if (turnedOn)
		{
			if(!start) start=timestamp;
			progress = timestamp -start;

			if(progress % 50 < 50 && progress % 50 > 40)
			console.log(progress%50);

			$("body").css("background-color", " rgba("+r % (maxR + 1) +","+g%(maxG+1)+","+b%(maxB+1)+",1) ");

			if(r>=maxR) incR=false;
			else if(r<=minR) incR=true;
	  
			if(g>=maxG) incG=false;
			else if(g<=minG) incG=true;
	  
			if(b>=maxB) incB=false;
			else if(b<=minB) incB=true;
	  
			if(incR)
			{
				r++;
			}
			else if(!incR)
			{
				r--;
			}
	
			if(incG)
			{
				g++;
			}
			else if(!incG)
			{
				g--;
			}
	
			if(incB)
			{
				b++;
			}
			else if(!incB)
			{
				b--;
			}
       
	   }
  else{

  }
    window.requestAnimationFrame(animateScreen);
    }
  



    $("#pageContentHolder").hide();
    
    $(document).ready(function(){
	   $(".loading").hide("slow");
	   $("#pageContentHolder").show("slow");
    });



var $select = $("<select></select>");
$("#menu").append($select);

$("#menu a").each(function(){
  var $anchor = $(this);
  var $option = $("<option></option>");
  

  /*if($anchor.parent().hasClass("selected")){
  	$anchor.prop("slected",true); //coincidence that class = selected and prop(property) = selected
  }*/
  if($anchor.hasClass("selected") ){
  	$option.prop("selected",true);
  }


  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append($option);
  
});


//Bind listener to select
$select.change(function(){
  window.location = $select.val();

});

//Above the is menu code


$("#menu li").click(function(){
	$location = $(this).children().attr("href");
	window.location = $location;
});



 window.requestAnimationFrame(animateScreen);
})(jQuery);