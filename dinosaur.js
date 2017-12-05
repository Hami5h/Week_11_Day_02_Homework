const Dinosaur = function (type, offspring, year) {
  this.type = type;
  this.offspring = offspring;
  this.year = year;
}

Dinosaur.prototype.hasType = function() {
  return this.type;
}

Dinosaur.prototype.increaseOffspring = function(offspring, year) {
  yearCount = year - this.year;
  if(yearCount != 0) {
    this.offspring += (offspring * yearCount);
    return this.offspring;
  }

}

module.exports = Dinosaur;
