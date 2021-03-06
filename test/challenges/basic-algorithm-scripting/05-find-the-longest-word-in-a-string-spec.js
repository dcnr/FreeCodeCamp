module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const findLongestWord = require('./basic-algo-collection')
    .findLongestWord;


  describe('Find the Longest Word', function () {
    describe('findLongestWord()', function () {
      it('should return a number', function () {
        const args = 'The quick brown fox jumped over the lazy dog';
        const result = findLongestWord(args);

        expect(result)
          .to.be.a('number');
      });

      it('should return the lenght of the longest word in input',
        function () {
          const test_values = {
            'The quick brown fox jumped over the lazy dog': 6,
            'May the force be with you': 5,
            'Google do a barrel roll': 6,
            'What is the average airspeed velocity of an unladen swallow': 8,
            'What if we try a super-long word such as otorhinolaryngology': 19
          };

          Object.keys(test_values)
            .forEach(key => {
              const result = findLongestWord(key);

              expect(result)
                .to.equal(test_values[key]);
            });
        });
    });
  });
};
