const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')
const assert = require('assert');

describe('Park', function() {

  it("Enclosure starts empty", function() {
    const park = new Park();
    assert.strictEqual(park.enclosureSize(), 0);
  });

  it("Should be able to add Dinosaur to enclosure", function() {
    const park = new Park();
    const dinosaur = new Dinosaur('Velociraptor', 1, 1);
    park.addDinosaur(dinosaur)
    assert.strictEqual(park.enclosureSize(), 1);
  });

  it("Should be able to remove Dinosaur from enclosure", function() {
    const park = new Park();
    const dinosaur1 = new Dinosaur('Velociraptor', 1, 1);
    const dinosaur2 = new Dinosaur('Tyrannosaurus', 2, 1);
    const dinosaur3 = new Dinosaur('Triceratops', 3, 1);
    const dinosaur4 = new Dinosaur('Tyrannosaurus', 2, 1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.enclosureSize(), 4);
    park.removeDinosaur('Tyrannosaurus');
    assert.strictEqual(park.enclosureSize(), 2);
    assert.deepStrictEqual(park.enclosure, [dinosaur1, dinosaur3])
  });

  it ("Should show all Dinosaurs with more than two offspring", function() {
    const park = new Park();
    const dinosaur1 = new Dinosaur('Velociraptor', 1, 1);
    const dinosaur2 = new Dinosaur('Tyrannosaurus', 2, 1);
    const dinosaur3 = new Dinosaur('Triceratops', 3, 1);
    const dinosaur4 = new Dinosaur('Tyrannosaurus', 4, 1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.overTwoOffspring(), 2)
  });

  it ("Should calculate total Dinosaurs given the year", function() {
    const park = new Park();
    const dinosaur1 = new Dinosaur('Velociraptor', 1, 1);
    const dinosaur2 = new Dinosaur('Tyrannosaurus', 2, 1);
    const dinosaur3 = new Dinosaur('Triceratops', 3, 1);
    const dinosaur4 = new Dinosaur('Tyrannosaurus', 4, 1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.numberOfDinosaursAfterTwoYears(2), 24)
  });

});
