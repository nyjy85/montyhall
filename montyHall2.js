var doors = ['o', 'o', 'x'];
var num = 0;
var win = 0;
var lose = 0;
var obj = {};


function montyHall(){
	while(num < 1000){
		var guess = Math.floor(Math.random()*3); // guesses from 0~2
		var hostPick = doors.indexOf('o'); 
		play(guess, hostPick);
		shuffle();
		num++;
	}	
	console.log("Percentage win: " + (win/1000) * 100 + "\n" + "Percentage lose: " + (lose/1000)*100);
	resetVal();
}

function resetVal(){
	num = 0;
	win = 0;
	lose = 0;
	obj  = {};
}

function play(guess, hostPick){
	var tmpDoors = doors.slice(); // assign doors to temp var so that it doesn't get changed

	if (guess === hostPick) hostPick = doors.lastIndexOf('o');
	tmpDoors.splice(hostPick,1); // gets rid of one of hosts' choice

	guess === 2 || guess === 1 ? guess = 0 : guess = 1;
	tmpDoors[guess] === 'x' ? win++ : lose++;
}

function shuffle(){
	doors.forEach(function(x){
		var idx = Math.floor(Math.random()*3);
		!obj.hasOwnProperty(idx) ? obj[idx] = x : arguments.callee(x); // recursive call to anonymous function
	});
	return objToArr(obj);
}

function objToArr(object){
	for (var prop in object){
		doors[parseInt(prop,10)] = object[prop];
	}
	obj = {};
}

montyHall();

