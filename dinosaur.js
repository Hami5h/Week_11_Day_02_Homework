const Dinosaur = function (type, offspring) {
  this.type = type;
  this.offspring = offspring;
}

Dinosaur.prototype.hasType = function() {
  return this.type;
}

Dinosaur.prototype.increaseOffspring = function(offspring) {
  this.offspring += offspring;
  return this.offspring;
}

module.exports = Dinosaur;
