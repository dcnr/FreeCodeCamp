/* Bonfire: Where art thou
 * http://www.freecodecamp.com/challenges/bonfire-where-art-thou
 *
 * Make a function that looks through an array of objects (first argument)
 * and returns an array of all objects that have matching property and value
 * pairs (second argument). Each property and value pair of the source object
 * has to be present in the object from the collection if it is to be
 * included in the returned array.
 *
 * For example, if the first argument is
 *
 * [{
 *    first: 'Romeo',
 *    last: 'Montague'
 *  },
 *  {
 *    first: 'Mercutio',
 *    last: null
 *  },
 *  {
 *    first: 'Tybalt',
 *    last: 'Capulet'
 *  }],
 *
 * and the second argument is
 *
 * {
 * last: 'Capulet'
 * }
 *
 * then you must return the third object from the array(the first argument),
 * because it contains the property and it 's value, that was passed on as
 * the second argument.
 *
 */


function where(collection, source) {
  'use strict';

  const keys = Object.keys(source);

  return collection.filter(curr_obj =>
    keys.every(key =>
      curr_obj.hasOwnProperty(key) && curr_obj[key] === source[key]
    )
  );
}


/* exports */
module.exports = where;
