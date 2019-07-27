//TOP PRIORITY
$(document).ready(function () {
    var wins = 0;
    var lost = 0;
    var counter = 0;

var goalNum = parseInt(Math.floor(Math.random() * 120) + 19);
$("#goalBox").html(goalNum);

var Rock = parseInt(Math.floor(Math.random() * 12) + 1);
var Rocky = parseInt(Math.floor(Math.random() * 12) + 1);
var Rockier = parseInt(Math.floor(Math.random() * 12) + 1);
var Rocket = parseInt(Math.floor(Math.random() * 12) + 1);

function reset () {
    counter = 0;
    $("#crytalDumpster").html(counter);
    goalNum = parseInt(Math.floor(Math.random() * 120) + 19);
    $("#goalBox").html(goalNum);

    Rock = parseInt(Math.floor(Math.random() * 12) + 1);
    Rocky = parseInt(Math.floor(Math.random() * 12) + 1);
    Rockier = parseInt(Math.floor(Math.random() * 12) + 1);
    Rocket = parseInt(Math.floor(Math.random() * 12) + 1);
}
$("#Rock").on("click", function() {
    
            counter = counter + Rock;
            $("#crytalDumpster").html(counter);
            if (counter == goalNum) {
                pleasework();
            }else if (counter > goalNum) {
                pleasework();
            }
});
$("#Rocky").on("click", function() {
    
            counter = counter + Rocky;
            $("#crytalDumpster").html(counter);
            if (counter == goalNum) {
                pleasework();
            }else if (counter > goalNum) {
                pleasework();
            }
});
$("#Rockier").on("click", function() {
    
            counter = counter + Rockier;
            $("#crytalDumpster").html(counter);
            if (counter == goalNum) {
                pleasework();
            }else if (counter > goalNum) {
                pleasework();
            }
});
$("#Rocket").on("click", function() {
    
            counter = counter + Rocket;
            $("#crytalDumpster").html(counter);
            if (counter == goalNum) {
                pleasework();
            }else if (counter > goalNum) {
                pleasework();
            }
});
function pleasework() {
    if(counter === goalNum) {
    wins++;
    $("#results").html("Winner");
    $("#results").html("win: " +wins);
    reset();
} else if (counter > goalNum) {
    lost++;
    $("#results").html("Loser");
    $("#results").html("Lost: " + lost);
    reset();
}
}
});