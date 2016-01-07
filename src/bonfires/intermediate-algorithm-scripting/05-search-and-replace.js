/* Bonfire: Search and Replace
 * http://www.freecodecamp.com/challenges/bonfire-search-and-replace
 *
 * Perform a search and replace on the sentence using the arguments
 * provided and return the new sentence.
 *
 * First argument is the sentence to perform the search and replace on.
 *
 * Second argument is the word that you will be replacing (before).
 *
 * Third argument is what you will be replacing the second argument
 * with (after).
 *
 * NOTE: Preserve the case of the original word when you are replacing it.
 * For example if you mean to replace the word 'Book' with the word 'dog',
 * it should be replaced as 'Dog'
 *
 */


function myReplace(str, before, after) {
  'use strict';

  function replacement(matched) {
    const first_char = matched.charAt(0);

    if (/[A-Z]/.test(first_char)) {
      const first_letter = after
        .charAt(0)
        .toUpperCase();

      const rest_of_word = after.substr(1);

      return first_letter + rest_of_word;
    }


    return after;
  }


  const result = str.replace(before, replacement);


  return result;
}


/* exports */
module.exports = myReplace;
