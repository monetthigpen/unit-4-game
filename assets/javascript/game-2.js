var totalScore = 0;
var randomNumber = Math.floor(Math.random()* 120) + 19;
var crystalNumber = Math.floor(Math.random()* 12) + 1;


for(var i = 0; i < crystalNumber.length; i++){
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
  $(".crystal-image").attr(crystalNumber);
}
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;
    console.log(totalScore);
})

