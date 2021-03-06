/* Bonfire: Everything Be True
 * http://www.freecodecamp.com/challenges/bonfire-everything-be-true
 *
 * Check if the predicate (second argument) is truthy on all elements
 * of a collection (first argument).
 *
 */


function every(collection, pre) {
  'use strict';

  return collection.every(v => v[pre]);
}


/* exports */
module.exports = every;
