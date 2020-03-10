const sumAll = function(firstInt, secondInt) {
	let sumFinal = 0;
	if (firstInt < 0 || secondInt < 0){
		return "ERROR";
	} else if (typeof secondInt === 'string' || typeof firstInt ===
		'string' ){
		return "ERROR";
	} else if (secondInt < firstInt) {
		for (i = secondInt; i <= firstInt; i++){
			sumFinal += i;
		}
	} else if (firstInt < secondInt) {
		for (i = firstInt; i <= secondInt; i++){
			sumFinal += i;
		}
	} else {
		return "ERROR";
	}

	return sumFinal;
}

module.exports = sumAll
