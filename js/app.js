
(function($){

var turnedOn = false;
var start = null;
var progress=0;
    var c = 70;
    var inc = true;
    var min = 40;
    var max = 120;

  var animateScreen = function(timestamp){
    if (turnedOn) {
    if(!start) start=timestamp;
    progress = timestamp -start;

   if(progress % 50 < 50 && progress % 50 > 40)
     console.log(progress%50);

    $("body").css("background-color", " rgba("+c % (max + 1) +","+c%(max+1)+","+c%(max+1)+",1) ");

      if(c>=max) inc=false;
      else if(c<=min) inc=true;
      if(inc){
      c++;
    }else if(!inc){
     c--;
    }
       


  }else{

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