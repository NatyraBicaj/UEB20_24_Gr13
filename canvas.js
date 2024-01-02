var canvas = document.querySelector('#myCanvas');

    
    if (!canvas) {
      console.error("Canvas element not found");
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      var c = canvas.getContext('2d');

      
      console.log(canvas);

      
      c.strokeStyle = "#800080";
      c.stroke();

      
      for (var i = 0; i < 10; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        c.beginPath();
        c.arc(x, y, 100, 0, Math.PI * 2, false);
        c.strokeStyle = "#800080";
        c.stroke();
      }
    }