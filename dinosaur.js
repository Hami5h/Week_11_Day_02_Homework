const Dinosaur = function (type, offspring) {
  this.type = type;
  this.offspring = offspring;
}

Dinosaur.prototype.hasType = function() {
  return this.type;
}

module.exports = Dinosaur;
