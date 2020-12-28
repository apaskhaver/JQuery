//adding classes to change styling
$("h1").addClass("margin-50 big-text")

//adding event listeners
$("h1").click(function() {
  $("h1").removeClass("margin-50 big-text")
});

//no need for for loop
$("button").click(function() {
  // $("h1").addClass("margin-50 big-text")
  $("h1").toggle();
})

//changes color of input box
$("input").keydown(function() {
  $("input").addClass("makePurple");
})

//change color inside h1 when keys pressed on whole document
$(document).keydown(function(event) {
  $("h1").text(event.key);
})

$("h1").on("mouseover", function() {
  $("h1").addClass("makeAqua");
})
