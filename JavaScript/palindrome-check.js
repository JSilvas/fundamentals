console.log(`testing 1, 2, 3!`);

let string1 = 'notapalindrone';
let string2 = 'tacocat';

function checkPal(string) {
  console.log('test')
  if(string === string.split('').reverse('').join('')) {
    console.log(`${string} is a palindrone!`);
  } else { 
    console.log(`${string} is not a palindrone.`);
  };
}

checkPal(string1);