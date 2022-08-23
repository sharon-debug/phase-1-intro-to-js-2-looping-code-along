// Code your solutions in this file
function writeCards(array, string) {
    const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
  }

  return newArray;
}

console.log (writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

function countDown (number) {
    let i = number;
    while (i > -1) {
        console.log(i--);
        
    }
}
countDown(10);