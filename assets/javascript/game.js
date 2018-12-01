// 1.There is a random number dispayed at the begginging of the game
var randomNumber = Math.floor(Math.random()* 120) + 19;
var totalScore = 0;
var wins = 0;
var losses = 0;
var crystalValue =  Math.floor(Math.random()* 12) + 1;
totalScore += crystalValue;

//var getTotal =[];
//     The random number shown at the start of the game should be between 19 - 120.
    //create a variable that chooses a random number from between 19-120.


// 2. When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
//           Each crystal should have a random hidden value between 1 - 12.
//           Your game will hide this amount until the player clicks a crystal.
          //create a variable for each crystal that will chosse a random number between 1 and 12.
    
    
   function reload(){
        totalScore = 0;
        randomNumber = Math.floor(Math.random()* 120) + 19;
        crystalValue =  Math.floor(Math.random()* 12) + 1;
       gameStart();
    };
    function gameStart(){
        $("#random-number").text(function(event){
            randomNumber = Math.floor(Math.random()* 120) + 19;
            $("#random-number").text("Random Number: " + randomNumber);
        
        })
     $(".crystal-image").on("click", function(){
            crystalValue = Math.floor(Math.random()* 12) + 1;
            totalScore += crystalValue;
             console.log(crystalValue);
            $("#total-score").html("<h3>Total Score: " + totalScore + "</h3>");
        
            if( randomNumber === totalScore){
                wins++;
                $("#wins").html("wins:" + wins);
                reload();
                    
               }else if( totalScore > randomNumber ){
                   losses++;
                   $("#losses").html("losses:" + losses);
                   reload();
                       
               }; 
             
       });
      
       
    
      
};
gameStart();


//function crystalScore(gameStart){
    
    
//};
//crystalScore();
 

//3. When they do click one, update the player's score counter.
        //when the crystal is clicked on, create an if statement that allows the quantity of the crystal variable to added together.
        //create wins variable
        //create loss variable 
        // create a conditional that will add a win if the counter equals random number.
        //create a conditional that will add a lose if counter is more than the random number. 
// 4. The player wins if their total score matches the random number from the beginning of the game.
// 5. The player loses if their score goes above the random number.
// 6. The game restarts whenever the player wins or loses.
   //create reload condtion when there is a win or loss. Only reload the random number, crystal's values, and set player's score counter to 0.
// 7. When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// 8. The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.