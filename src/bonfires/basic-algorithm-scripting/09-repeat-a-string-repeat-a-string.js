/*
 * Bonfire: Repeat a string repeat a string
 * http://www.freecodecamp.com/challenges/bonfire-repeat-a-string-repeat-a-string
 *
 * Repeat a given string (first argument) n times (second argument).
 * Return an empty string if n is a negative number.
 *
 */


function repeat(str, num) {
	if (num < 0)
		return "";

	var result = '';

	while (num--) {
		result += str;
	}

	return result;
}


/* exports */
module.exports = repeat;
