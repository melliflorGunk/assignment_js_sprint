// Basic Function that can take one particular guess
function Roulette(num){
	this.earnings = num;
	this.spin = function(bet, guess) {
		this.earnings -= bet;
		//returns a random number between 0 (inclusive) and 36 (inclusive)
		let result = Math.floor(Math.random() * (36 - 1 + 1));
		var winLoseMessage = result + ".\n Your bankroll is now $";
		if (parseInt(guess) == result) {
			return "You won! The spin was " + winLoseMessage + (this.earnings += bet * 35);
		} else {
			return "I'm sorry, you didn't win. The spin was " + winLoseMessage + this.earnings;
		}
	};
	this.bankroll = function() {
		return "You now have $" + this.earnings;
	};
	this.buyIn = function buyIn(num) {
		this.earnings += num;
		return "You bought in $" + num + ".\n You now have $" + this.earnings;
	};
}
