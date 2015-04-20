var win   = 0;
var games = 0;
function rand(n) {
    return Math.floor(Math.random() * n);
}

function Door(number){
	var num = number;
	this.getNumber = function(){return num;};
	this.isWinner = false;
	this.show = "[--]"; // all doors start out closed
}

Door.prototype.toString = function(action){
	if (action && this.isWinner) this.show = "[Car!]";
	else this.show = "[Goat]";
};

function Game(){
	var car = rand(3);
	this.doors = [new Door(1), new Door(2), new Door(3)];
	this.doors[car].isWinner = true;
	games++;
}

Game.prototype.initialGuess = function(num){
	for (var i = 0; i < 3; i ++){
		if (this.doors[i].getNumber()!==num && !this.doors[i].isWinner){
			this.doors[i].toString("open");
			return "Pick again:" + "\n" + this.toString();
		}
	}
};

Game.prototype.finalGuess = function(num){
	this.doors[num-1].toString("open");
	//return (this.doors[num-1].isWinner ? "You won a car!" : "You lose") + "\n" + this.toString();
	if(this.doors[num-1].isWinner) {
		win++;
		console.log("You won a car!");
	} else {
		console.log("You lose");
	}
	return this.toString();
};

Game.prototype.toString = function(){
	var doors = this.doors.map(function(x){return x.show;});
	return doors.join(" ");
};

Game.prototype.getStats = function(){
	return (win/games) * 100 + "%";
}

// for (var i = 0; i < 1000; i++){
// 	var game = new Game()
// 	game.initialGuess(1)
// 	game.finalGuess(1);
// }