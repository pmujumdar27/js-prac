/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  	let processedStr = str.toLowerCase();
	processedStr = processedStr.replace(/[^a-z0-9]/g, '');
	
	const ln = processedStr.length;

	if (ln == 0) return true;

	for (let i = 0; i < ln / 2; i++) {
		if (processedStr[i] != processedStr[ln - i - 1]) {
			return false;
		}
	}

	return true;
}

module.exports = isPalindrome;
