/* Bonfire: Make a Person
 * http://www.freecodecamp.com/challenges/bonfire-make-a-person
 *
 * Fill in the object constructor with the methods specified in the tests.
 *
 * Those methods are
 *    getFirstName(),
 *    getLastName(),
 *    getFullName(),
 *    setFirstName(first),
 *    setLastName(last), and
 *    setFullName(firstAndLast).
 *
 *
 * All functions that take an argument have an arity of 1, and the
 * argument will be a string.
 *
 * These methods must be the only available means for interacting
 * with the object.
 *
 */


var Person = function (firstAndLast) {
	return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
