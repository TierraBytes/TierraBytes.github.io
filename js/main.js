
(function() {

  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var field = document.getElementById("field");
  var ball = document.getElementById("ball");

  var maxX = screen.width;
  var maxY = field.clientHeight - ball.offsetHeight;

  var duration = 4.5; // seconds
  var gridSize = 80; // pixels

  var start = null;
  var stretchFactor;

  function step(timestamp)
  {
    var progress, x, y;
    if(start === null) {
      start = timestamp;
      stretchFactor = 1 + (Math.random() * 3 * Math.random());
    }
    //stretchFactor=2;
    progress = (timestamp - start) / duration / 1000; // percent

    x = stretchFactor * Math.sin(progress * 2 * Math.PI) - (screen.width/90); // x = ƒ(t)
    y = Math.cos(progress * 2 * Math.PI) - 1 ; // y = lƒ(t)

    ball.style.left = maxX/1.1 + (gridSize * x) + "px";
    ball.style.bottom = maxY/2 + (gridSize * y) + "px";

    if(progress >= 1) start = null; // reset to start position
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);

})();

(function(){

   
/*
document.getElementById("jason").width=300;
document.getElementById("jason").height=500;

document.getElementById("angel").width=300;
document.getElementById("angel").height=500;

document.getElementById("abb").width=300;
document.getElementById("abb").height=500;
   */ 




})();
















var current = document.getElementById("home");
$("#aboutPage, #programsPage, #atomPage, #contactPage").hide();

  function toAbout(){
    $(current).fadeOut(1000);
    $(current).hide();
    current = document.getElementById("aboutPage");
    $(current).fadeIn(500);

  }
  function toPrograms(){
    $(current).fadeOut(1000);
     $(current).hide();
    current = document.getElementById("programsPage");
    $(current).fadeIn(500);
  }
  function toHome(){
    $(current).fadeOut(1000);
     $(current).hide();
    current = document.getElementById("home");
    $(current).fadeIn(500);
  }
  function toAtom(){
    $(current).fadeOut(1000);
     $(current).hide();
    current = document.getElementById("atomPage");
    $(current).fadeIn(500);
  }
  function toContact(){
    $(current).fadeOut(1000);
     $(current).hide();
    current = document.getElementById("contactPage");
    $(current).fadeIn(500);
  }





$("#jasonA").click(function(){
  
});
$("#angelA").click(function(){
  
});
$("#abbA").click(function(){
  
});
$("angeloA").click(function(){
	
});
$("mikeA").click(function(){
	
});
$("nickA").click(function(){
	
});





