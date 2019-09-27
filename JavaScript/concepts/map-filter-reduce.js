// ===============================
// array.map examples
// ===============================
const dragons = [ 
  { 'type': 'wyvern', 'isFancy': false },
  { 'type': 'flemish', 'isFancy': true },
  { 'type': 'serpent', 'isFancy': false },
  { 'type': 'ridgeback', 'isFancy': true },
  { 'type': 'smol boy', 'isFancy': false },
  { 'type': 'babby dragon', 'isFancy': false },
  { 'type': 'big boy', 'isFancy': false },
  { 'type': 'mr. lyle', 'isFancy': true }
]

// use .map when you want to return a new manipulated array
// var kvArray = [{key: 1, value: 10}, 
//                {key: 2, value: 20}, 
//                {key: 3, value: 30}];
// var reformattedArray = kvArray.map(obj =>{ 
//    var rObj = {};
//    rObj[obj.key] = obj.value;
//    return rObj;
// });
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

let reformedDragons = dragons.map(dragon => {
  const reformDragon = {};
  dragon.isFancy //?
  reformDragon[dragon.type] = dragon.isFancy;
  return reformDragon
});
// New array
console.log('reformed Dragons', reformedDragons);
// original array
console.log('dragons:', dragons);


// ===============================
// array.filter examples
// ===============================
// use .filter to grab only relevent data. 
// It expects a conditional or some sort of test for each iterable obj 
const isFancyTrue = (monster) => monster.isFancy === true;

const fancyDragons = dragons.filter( 
  dragon => isFancyTrue(dragon)
);
console.log(fancyDragons);


// ===============================
// array.reduce examples
// ===============================

