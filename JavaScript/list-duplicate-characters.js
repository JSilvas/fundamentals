'use strict';
// KATA: How do you print duplicate characters from a string?

// Input
const useless = 'A';
const empty = null;
const string1 = 'acidification';
const string2 = 'dOnT repEaT yOursElf'

const returnStringDups = (str) => {
  // Check if string has values
  if (typeof str !== 'string' ) { 
    return 'error: Not a string';
  } else if (str.length <= 1) {
    return 'No duplicates found';
  } else {
    // create empty arrays for uniques & dups
    // sets only allow unique values to be stored
    const splitString = str.split('');
    const index = new Set([]);
    const dups = [];
    
    // Iterate with traditional for loop through string array
    // for ( let i = 0; i < index; i++ ) {
    //   str.split('')
    // }
    
    // Iterator using Array.prototype.forEach method
    splitString.forEach(function(char) {
      if (index.has(char)) {
        dups.push(char);
      } else {
        index.add(char);
      }
    });
    console.log(index)
    console.log(dups);
    
    return dups
  }
}
returnStringDups(useless);
returnStringDups(empty);
returnStringDups(string1);
returnStringDups(string2);