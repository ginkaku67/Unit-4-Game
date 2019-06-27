//TOP PRIORITY

$(document).ready(function () {

   
    var goalBox = function getRndInteger(min, max) {
        return Math.floor(Math.random() * 100 + 20)
    };
    var crystalValue = function crystalVal(min, max) {
        return Math.floor(Math.random() * 20 + 1)
    }
    console.log(crystalValue)
    var win = 0;
    var lose = 0;
    var score = 0;
  //  var counter = crystalValue;
    console.log(goalBox)

    $("#goalBox").text(goalBox);

    // crystals 
    for (var i = 0; i < goalBox.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass(".crystal-image");

        $(".crystal-image").on("click", function () {

            // Determining the crystal's value requires us to extract the value from the data attribute.
            // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
            // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
            // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter


            // We then add the crystalValue to the user's "counter" which is a global variable.
            // Every click, from every crystal adds to the global counter.
            counter += crystalValue;

            // All of the same game win-lose logic applies. So the rest remains unchanged.
            alert("New score: " + counter);

            if (counter === targetNumber) {
                alert("You win!");
                wins++;
                $("wins").html("<h2>Winner</h2>")
            }

            else if (counter >= targetNumber) {
                alert("You lose!!");
                $("loses").html("<h2>Winner</h2>")
            }

        }
        );
        console.log(crystalValue);

        //USE ONCLICK FUNCTION TO MAKE CRYSTAL VALUE ADD TOWARDS TOTAL

        //USE ADDITION FUNCTION TO MAKE IT ADD UP
        //ATTRIBUTE ADDED NUMEBERS TO BLANK SPACE
        //WRITE IF ELSE STATEMENT FOR SCoRE. IF = WIN, ELSE IF GN < SN = LOSS, OR IF GN > SN, KEEP PLAYING
        //IF SCORES=== WIN, +1 TO WIN VAR
        //ELSE +1 TO LOSE VAR
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
    };
});
