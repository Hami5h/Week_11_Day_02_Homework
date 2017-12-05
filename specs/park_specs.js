const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')
const assert = require('assert');

describe('Park', function() {

  it("Enclosure starts empty", function() {
    const park = new Park();
    assert.strictEqual(park.enclosureSize(), 0);
  });

});
