const Park = function () {
  this.enclosure = [];
}

Park.prototype.enclosureSize = function() {
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaur = function(type) {
  for (dinosaur of this.enclosure) {
    if (dinosaur.type === type) {
      index = this.enclosure.indexOf(dinosaur);
        this.enclosure.splice(index, 1);
      }
    }
  }

  Park.prototype.overTwoOffspring = function() {
    count = 0;
    for (dinosaur of this.enclosure) {
      if (dinosaur.offspring > 2) {
        count++;
      }
    }
    return count;
  }

  Park.prototype.numberOfDinosaursAfterTwoYears = function(year) {
    count = 0;
    for (dinosaur of this.enclosure) {
      if (dinosaur.offspring > 0){
        count += (dinosaur.offspring * year);
        count += 1;
      }
    }
    return count;
  }


module.exports = Park;
