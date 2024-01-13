/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    const cnts1 = new Map();
    const cnts2 = new Map();

    const a = str1.toLowerCase();
    const b = str2.toLowerCase();

    for (i in a) {
        cnts1.set(a[i], (cnts1.get(a[i]) || 0) + 1);
    }

    for (i in b) {
        cnts2.set(b[i], (cnts2.get(b[i]) || 0) + 1);
    }

    if (cnts1.size !== cnts2.size) {
        return false;
    }

    for (const [key, value] of cnts1) {
        if (cnts2.get(key) !== value) {
            return false;
        }
    }
    return true;
}

module.exports = isAnagram;
