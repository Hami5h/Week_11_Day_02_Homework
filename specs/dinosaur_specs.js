const Dinosaur = require('../dinosaur.js');
const assert = require('assert');

describe('Dinosaur', function() {
  it('Type of Dinosaur', function() {
    const dinosaur = new Dinosaur("Tyrannosaurus", 2, 1);
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  });


  it('Amount of Offspring', function() {
    const dinosaur = new Dinosaur("Tyrannosaurus", 2);
    assert.strictEqual(dinosaur.offspring, 2);
  });

});
