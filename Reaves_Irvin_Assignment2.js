// SDI Project Assignment 2!
// Author: Irvin Reaves
// Created for: SDI Online


// String Function

var golfShoes = function  (Black, Red){
	var shoes = "Size 12" + "Soft Bottoms";
console.log("I have on my " + Black + " black and red "  + Red +  " golf shoes!");

};
golfShoes("size 12", "Soft Bottoms");

// Boolen Function

var totalTeeShotDistance = function  (TeeShot1, TeeShot2, TeeShot3){
	var teeShots = TeeShot1 + TeeShot2 + TeeShot3,
		combindTeeShotDistance, totalDistance;
						
if(teeShots == 764){
		console.log(true);
}
else{
		console.log(false);
	}
	
	totalDistance = "You had a total driving distance of " + teeShots + " Yards!";
	
	return totalDistance;	
			
};

var totalDrivingDistance = totalTeeShotDistance(250, 275, 239);
console.log(totalDrivingDistance);

// Procedure

var weather = function  (Wet, Dry){
	toDaysWeather = Wet, Dry;
	//var toDaysWeather = wet, Dry;
console.log(weather);

if(toDaysWeather == Wet){
		console.log("It's wet out today, wear your rain gear.");
}
else{
		console.log("It's dry today, hit it long and strong.");	
}
};
weather();

// Number Function

var stroke = function (stroke1, stroke2, stroke3){
	var strokes = stroke1 + stroke2 + stroke3,
		totalShots, totalYradage;
	
	

var strokes = 0;
 	
while (strokes <= 226) {
	  strokes+=175, 50, 1;
	  console.log(strokes);
	
	};
	
	totalYradage = "Par 3 this is a " + strokes + " yard hole!";
	
	return totalYradage;
};

var  totalYradage = stroke(175, 50, 1); 
console.log(totalYradage)
//stroke(175, 50, 1);
//console.log("3 strokes = Par!");

// Array Function

var golfHoles = function (hole1, hole2, hole3, hole4, hole5){
var golfHole = hole1, hole2, hole3, hole4, hole5, holes;
var gHoles = ["hole 1",  "hole 2", "hole 3", "hole 4", "hole 5"]; 
var hole = [428, 195, 537, 405, 492];
var adjectives = ["Dog Leg Right", "Straight shot", "Dog Leg Right", "Dog Leg Left", "Dog Leg Right"];	


		
	
		
	for (var i=0, checkLength=gHoles.length; i < checkLength; i++) {
	console.log(  gHoles[i]  + " " +  hole[i] + " yards " + adjectives[i] );
	
	
	
};
	holes = "golfHoles";
	
	return holes


};
var holes = golfHoles();
//golfHoles() 
//console.log(golfHoles);
