/*
  ! important notes
  * use of .slice and .splice
*/

//***
// ArrayList implementation
//***
class ArrayList {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  remove(index) {
    if (index < 0 || index >= this.items.length) {
      throw new Error("Index out of bounds");
    }
    return this.items.splice(index, 1)[0];
  }

  get(index) {
    if (index < 0 || index >= this.items.length) {
      throw new Error("Index out of bounds");
    }
    return this.items[index];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items = [];
  }
  indexOf(item) {
    return this.items.indexOf(item);
  }
}