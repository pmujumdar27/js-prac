/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const vovels = new Set(['a', 'e', 'i', 'o', 'u']);
	let cnt = 0;

	const loweredStr = str.toLowerCase();

	for (i of loweredStr) {
		if (vovels.has(i)) {
			cnt++;
		}
	}

	return cnt;
}

module.exports = countVowels;