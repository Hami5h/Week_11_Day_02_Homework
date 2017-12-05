const Dinosaur = require('../dinosaur.js');
const assert = require('assert');

describe('Dinosaur', function() {
  it('Type of Dinosaur', function() {
    const dinosaur = new Dinosaur("Tyrannosaurus");
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  });

});
