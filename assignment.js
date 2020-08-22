//I am using console.log instead of return so that output can be seen easily when calling the function without writing extra code.

function feetToMile(feetUnit) {
    if (feetUnit <= 0){
        var errorMessage = "Your input distance can't be negative or zero.";
        console.log(errorMessage);
    }
    else{
        mileUnit = feetUnit / 5280;
        console.log(feetUnit, "feet is equal to", mileUnit, "miles"); 
        // return feetUnit, "feet is equal to", mileUnit, "miles"; 
    }
}
feetToMile(2);

function woodCalculator(chairNumber, tableNumber, bedNumber) {
    woodForChair = chairNumber * 1;
    woodForTable = tableNumber * 3;
    woodForBed = bedNumber * 5;
    totalWood = woodForChair + woodForTable + woodForBed;
    console.log("Total wood needed for", chairNumber, "chair", tableNumber, "table", bedNumber, "bed:", totalWood);
}
woodCalculator(2, 1, 7);

function brickCalculator(floor) {
    if(floor <= 0){
        console.log("Error: Floor value can't be zero or negative.")
    }
    else{
        if(floor <= 10){
            var totalBricks = floor * 15 * 1000;
            console.log("Total bricks needed for", floor, "floors:", totalBricks);
        }
        else if(floor > 10){
            var floorUpTo10 = 10 * 15 * 1000;
            var floorLeft = floor - 10;
            if(floorLeft <= 10){
                var floorUpTo20 = floorLeft * 12 * 1000;
                var totalBricks = floorUpTo10 + floorUpTo20;
                console.log("Total bricks needed for", floor, "floors:", totalBricks);
            }
            else if(floorLeft > 10){
                floorUpTo20 = 10 * 12 * 1000;
                floorAfter20 = (floorLeft - 10) * 10 * 1000;
                totalBricks = floorUpTo10 + floorUpTo20 + floorAfter20;
                console.log("Total bricks needed for", floor, "floors:", totalBricks);
            }
        }
    }
}
brickCalculator(37);

function tinyFriend(name) {
    var shortestName = name[0];
    var shortestNameLength = name[0].length;
    for(var i=1; i<name.length; i++){
        if( name[i].length < shortestNameLength ){
            shortestName = name[i];
            shortestNameLength = name[i].length;
        }
    }
    console.log("The shortest name is:", shortestName);
}
var name = ["Alexandra", "Sasha", "Alamin", "Robert Pias", "Jasim Uddin", "MARY", "Gabrielle", "Tatijana"];
tinyFriend(name);
