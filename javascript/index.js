var x = 0;
var z = 0;
var a = -1;
var b = -1;
var c = -1;
var d = -1;
var e = -1;
var f = -1;
var g = -1;
var h = -1;
var i = -1;
$(".container").click(function() {
  $(".header").text("Click here to restart.");
  $(".header").addClass("refresh");
  z++;
})
$(".box").click(function() {
  if (x % 2 === 0) {
    $(this).html('<h1 style="font-size:6.5rem;">x</h1>')
    var y = $(this).attr("id");
    if (y === "a") {
      a = 1;
    } else if (y === "b") {
      b = 1;
    } else if (y === "c") {
      c = 1;
    } else if (y === "d") {
      d = 1;
    } else if (y === "e") {
      e = 1;
    } else if (y === "f") {
      f = 1;
    } else if (y === "g") {
      g = 1;
    } else if (y === "h") {
      h = 1;
    } else if (y === "i") {
      i = 1;
    }

  } else {
    $(this).html('<h1 style="font-size:6.5rem;">o</h1>')
    var y = $(this).attr("id");
    if (y === "a") {
      a = 0;
    } else if (y === "b") {
      b = 0;
    } else if (y === "c") {
      c = 0;
    } else if (y === "d") {
      d = 0;
    } else if (y === "e") {
      e = 0;
    } else if (y === "f") {
      f = 0;
    } else if (y === "g") {
      g = 0;
    } else if (y === "h") {
      h = 0;
    } else if (y === "i") {
      i = 0;
    }
  }
  x++;
  $(this).css("pointer-events", "none");
  if ((a == 1 && b == 1 && c == 1) || (d == 1 && e == 1 && f == 1) || (g == 1 && h == 1 && i == 1) || (a == 1 && d == 1 && g == 1) || (b == 1 && e == 1 && h == 1) || (c == 1 && f == 1 && i == 1) || (a == 1 && e == 1 && i == 1) || (c == 1 && e == 1 && g == 1)) {
    alert("X won the match");
    location.reload();
  } else if ((a == 0 && b == 0 && c == 0) || (d == 0 && e == 0 && f == 0) || (g == 0 && h == 0 && i == 0) || (a == 0 && d == 0 && g == 0) || (b == 0 && e == 0 && h == 0) || (c == 0 && f == 0 && i == 0) || (a == 0 && e == 0 && i == 0) || (c == 0 && e == 0 && g == 0)) {
    alert("O won the match");
    location.reload();
  }
})

$("h1").click(function() {
  if (z !== 0) {
    location.reload();
  }

})
