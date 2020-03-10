const removeFromArray = function(originalArray, ...removables) {
	for (i = 0; i < removables.length; i++){
		if (originalArray.indexOf(removables[i]) < 0){
			continue;
		} else {
			originalArray.splice(originalArray.indexOf(
				removables[i]), 1);
		}
	}
	return originalArray;
}



module.exports = removeFromArray
