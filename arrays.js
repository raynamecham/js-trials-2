"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`)
  }
}

printIndices(['apple', 'berry', 'cherry'])


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for(const i in items){
    if (i %2 === 0){
      result.push(items[i]);
    }
  }
  console.log(result)
}

everyOtherItem(['apple', 'berry', 'cherry'])

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => {
    return a - b;
  });
  let x = sortedItems.slice(0, n);
  let y = x.reverse();

  console.log(y);
}

smallestNItems([6, 7, 8, 10, 13, 49], 2)
