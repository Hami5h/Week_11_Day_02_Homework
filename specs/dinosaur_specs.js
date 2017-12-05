const Dinosaur = require('../dinosaur.js');
const assert = require('assert');

describe('Dinosaur', function() {
  it('Type of Dinosaur', function() {
    const dinosaur = new Dinosaur("Tyrannosaurus", 2, 1);
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  });

  it('Produce offspring', function() {
    const dinosaur = new Dinosaur("Tyrannosaurus", 2, 1);
    assert.strictEqual(dinosaur.increaseOffspring(2, 0), 0);
  });

  it('Increase offspring every year', function() {
    const dinosaur = new Dinosaur("Tyrannosaurus", 2, 1);
    assert.strictEqual(dinosaur.increaseOffspring(2, 4), 8);
  });

});
