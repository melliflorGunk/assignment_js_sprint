// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function largestEl(arr){
	  const arr = [];
    let tracker = 0;
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] > tracker) {
		      tracker = arr[i];
		  }
    }
    return tracker;
  },

  reversed: function reversed(str) {
    var str = str.toString();
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function loudSnakeCase(str) {
  	var strArr = str.split(" ");
  	var strArr2 = [];
  	for (var i = 0, j = strArr.length; i < j; i++) {
  		strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1, str.length);
  		strArr2.push(strArr[i]);
  	}
  	return strArr2.join(" ").replace(/\s/g, "_").replace(/\W+/gi, "");
  },
  // I'm highly aware that compareArrays is broken but need further learning to fix it. Will return! -C.
  compareArrays: function compareArrays(arr1, arr2) {
  	if (arr1.length != arr2.length) {
  		return false;
  	} else {
  		for (let i = 0, j = arr1.length; i < j; i++) {
  			if (arr1[i] != arr2[i]) {
  				return false;
  			}
  		}
  		return true;
  	}
  },

  fizzBuzz: function fizzBuzz(num) {
  	parseInt(num);
  	var numArr = [];
  	for (let i = 1, j = num; i <= j; i++) {
  		if (i % 3 == 0 && i % 5 == 0) {
  			numArr.push("Fizzbuzz");
  		} else if (i % 3 == 0) {
  			numArr.push("Fizz");
  		} else if (i % 5 == 0) {
  			numArr.push("Buzz");
  		} else {
  			numArr.push(i);
  		}
  	}
  	return numArr;
  },

  myMap: function myMap(arr) {
    return arr.map(function(x) {
      return x;
    });
  },

  primes: function(){
    // your code here
  },
}
