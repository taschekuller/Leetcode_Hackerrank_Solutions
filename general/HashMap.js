/*
  ! important notes
*/

// ! Hashmap
// ***
// Hashmap implementation using a simple object
// ***
class HashMap {
  constructor() {
    this.map = {};
  }

  set(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }

  delete(key) {
    delete this.map[key];
  }

  has(key) {
    return key in this.map;
  }

  keys() {
    return Object.keys(this.map);
  }

  values() {
    return Object.values(this.map);
  }
}
