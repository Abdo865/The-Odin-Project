const palindromes = function (str) {
	for (let i = 0, j = str.length - 1; i < str.length / 2;) {
		if (!isChar(str[i])){
            i++;
            continue;
        }
		if (!isChar(str[j])) {
            j--;
            continue;
        }
		if (str[i++].toUpperCase() != str[j--].toUpperCase()) return false;
	}
	return true;
};

function isChar(char) {
	return char.toUpperCase() != char.toLowerCase();
}
palindromes("Animal loots foliated detail of stool lamina.");
// Do not edit below this line
module.exports = palindromes;
