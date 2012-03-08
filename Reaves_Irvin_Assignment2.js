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
