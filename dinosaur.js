const Dinosaur = function (type) {
  this.type = type;
}

Dinosaur.prototype.hasType = function() {
  return this.type;
}

module.exports = Dinosaur;
