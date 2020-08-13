var Counter = 0;
var CounterDiplay = document.getElementById("counter");
document.getElementById("Image-Section").onclick = function() {myFunction()};

function myFunction() {
  Counter += 1
  document.getElementById("counter").innerHTML = Counter;
}
