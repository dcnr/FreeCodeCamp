/*
 * Bonfire: Check for Palindromes
 * http://www.freecodecamp.com/challenges/bonfire-check-for-palindromes
 *
 * Return true if the given string is a palindrome. Otherwise, return false.
 *
 * A palindrome is a word or sentence that's spelled the same way both
 * forward and backward, ignoring punctuation, case, and spacing.
 *
 * You'll need to remove all non-alphanumeric characters
 * (punctuation, spaces and symbols) and turn everything lower case
 * in order to check for palindromes.
 *
 * We'll pass strings with varying formats,
 * (such as "racecar", "RaceCar", and "race CAR" among others.
 *
 */


function palindrome(str) {
  'use strict';

  str = str
    .replace(/[_\W]/g, '')
    .toLowerCase();

  const reversed = str
    .split('')
    .reverse()
    .join('');


  return str === reversed;
}


/* exports */
module.exports = palindrome;
