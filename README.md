# montyhall
Montyhall script you can run on the console

##How to use

###holdMH.js
This script runs a 1000 times to prove that if you hold onto your inital guess, the probability of winning is around 33% or 1/3.  Just copy and paste the code onto console.

###switchMH.js
This script runs a 1000 times to prove that if you employ the switch strategy, the probability of winning the prize is around 66% or 2/3.  Just copy and paste the code onto console.

###montyOO.js
I wrote this Monty Hall game to practice Object Oriented programming.  You can play this on the command line by putting in the following commands:

1. `var game = new Game()`
2. `game.initalGuess(#)` -> # should be between 1 ~ 3
3. `game.finalGuess(#)` -> you will see the current status of the doors so pick any closed door
4. `game.getStats()` -> shows the current %win 

Keep playing and see how the win percentage changes.