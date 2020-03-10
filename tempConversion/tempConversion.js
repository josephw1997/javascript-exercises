const ftoc = function(ftemp) {
	let convertedtoC = ((ftemp - 32) * (5/9));
	let humanC = Math.round(convertedtoC * 10) / 10; 
	return humanC;
}

const ctof = function(ctemp) {
	let convertedtoF = (ctemp * (9/5) + 32);
	let humanF = Math.round(convertedtoF * 10) / 10; 
	return humanF;
}

module.exports = {
  ftoc,
  ctof
}
