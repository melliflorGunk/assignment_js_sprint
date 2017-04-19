// Basic Console-based Roulette game that creates new games via constructor function calling
function Roulette(num){
	this.earnings = num;
	this.guess;
	this.spin = function(bet, guess) {
		//begin error-checking
		if (this.earnings < 0) {
			return "I'm sorry, you have no more funds. Please buy in";
		}
		if (bet > this.earnings) {
			return "I'm sorry, you cannot afford that bet. Please buy in";
		}
		if (!Boolean(guess) || typeof guess === "undefined") {
			var errorMess = "I'm sorry, please enter a valid guess. Your options are (include quotation marks):";
			errorMess += " \n  Any Number from 0 to 36";
			errorMess += " \n '00'";
			errorMess += " \n 'Even' or 'Odd'";
			errorMess += " \n '1 to 18' or '19 to 36'";
			errorMess += " \n '1st 12', '2nd 12' or '3rd 12'";
			return errorMess;
		}
		//define variables
		var result = Math.floor(Math.random() * 38); //returns a random number between 0 (inclusive) and 37 (inclusive)
		var winLoseMessage = result + ".\n Your bankroll is now $";
		//begin spin
		this.earnings -= bet;
		if (isNaN(guess)) { //if input is a string value run following
			var stdGuess = guess.toUpperCase().replace(/\s/g, ""); //standardise guess by capitalising and removing whitespace
			switch (true) {
				case (stdGuess == result):
					return "You won! The spin was " + winLoseMessage + (this.earnings += bet * 35);
				case ((stdGuess == "00") && (result == 37)):
					return "You won! The spin was 0" + winLoseMessage + (this.earnings += bet * 35);
				case ((stdGuess == "EVEN") && (result % 2 == 0) && (result != 0)):
				case ((stdGuess == "ODD") && (result % 2 != 0)):
				case ((stdGuess == "1TO18") && (result <= 18)):
				case ((stdGuess == "19TO36") && (result >= 19)):
					return "You won! The spin was " + winLoseMessage + (this.earnings += bet * 2);
				case ((stdGuess == "1ST12") && (result <= 12 && result > 0)):
				case ((stdGuess == "2ND12") && (result <= 24 && result > 12)):
				case ((stdGuess == "3RD12") && (result <= 36 && result > 24)):
					return "You won! The spin was " + winLoseMessage + (this.earnings += bet * 3);
				default:
					return "I'm sorry, you didn't win. The spin was " + winLoseMessage + this.earnings;
			}
		} else { //if input is an integer
			if (guess == result) {
				return "You won! The spin was " + winLoseMessage + (this.earnings += bet * 35);
			} else {
				return "I'm sorry, you didn't win. The spin was " + winLoseMessage + this.earnings;
			}
		}
	};
	this.bankroll = function() {
		return "You now have $" + this.earnings;
	};
	this.buyIn = function(num) {
		this.earnings += num;
		return "You bought in $" + num + ".\n You now have $" + this.earnings;
	};
}
