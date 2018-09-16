class Sorter {
  constructor() {
    this.array = [];

  }

  add(element) {
    return this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var cut = [];
    indices.sort();
    for (var i = 0; i < indices.length; i++){
      cut.push(this.array[indices[i]]);
    }
    var sorted = cut.sort();
    for (var i = 0; i < indices.length; i++){
      this.array.splice(indices[i], 1, sorted[i]);
    }


  }

  setComparator(compareFunction) {

  }
}


module.exports = Sorter;
