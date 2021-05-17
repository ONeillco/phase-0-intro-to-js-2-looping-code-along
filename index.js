/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts); */

const guests = ['Lisa', 'Kaitlin', 'Jan']
const event = 'surprise';

function writeCards(guests, event) {
    let newArr = [];
    for (let i = 0; i < guests.length; i++) {
        newArr.push(`Thank you, ${guests[i]}, for the wonderful ${event} gift!`);
        debugger;
       
    }
    return newArr;
}

    writeCards;

    function countDown() {
        let countDown = 10;
        while (countDown > -1) { 
            console.log(countDown--);
        }
      return countDown
    }
countDown;
  