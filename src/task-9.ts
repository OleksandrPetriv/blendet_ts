interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T | undefined;
}

const numberContainer: Container<number> = {
  items: [1, 2, 3],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

const stringContainer: Container<string> = {
  items: ["Kyiv", "Lviv"],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

function getLastElement<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

console.log(numberContainer);
console.log(stringContainer);
console.log(getLastElement);
