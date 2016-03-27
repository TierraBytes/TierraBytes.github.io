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
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
