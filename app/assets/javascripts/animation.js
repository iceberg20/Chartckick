function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  document.getElementById("btn").disabled = true;
  function frame() {
    if (pos == 350) {
      clearInterval(id);
      document.getElementById("btn").disabled = false;
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}