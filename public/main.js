const cards = [
  'ClAce',
  'Cl2',
  'Cl3',
  'Cl4',
  'Cl5',
  'Cl6',
  'Cl7',
  'Cl8',
  'Cl9',
  'Cl10',
  'Cljack',
  'ClQueen',
  'Clking',
  'DiAce',
  'Di2',
  'Di3',
  'Di4',
  'Di5',
  'Di6',
  'Di7',
  'Di8',
  'Di9',
  'Di10',
  'Dijack',
  'DiQueen',
  'Diking',
  'HeAce',
  'He2',
  'He3',
  'He4',
  'He5',
  'He6',
  'He7',
  'He8',
  'He9',
  'He10',
  'Hejack',
  'HeQueen',
  'Heking',
  'SpAce',
  'Sp2',
  'Sp3',
  'Sp4',
  'Sp5',
  'Sp6',
  'Sp7',
  'Sp8',
  'Sp9',
  'Sp10',
  'Spjack',
  'SpQueen',
  'Spking' 
]

let i = cards.length - 1

const main = () => {
  for (i; i > 0; i--) {
    console.log(i)
    let j = Math.floor(Math.random() * (i + 1))
    holder = cards[j]
    cards[j] = cards[i]
    cards[i] = holder
  }
  console.log(cards)
}

 let c = 0 
const deck = () => {

   

  carddrawn = cards[c]
  
  c++

  document.querySelector('.face-up-hand').textContent = cards[c]
}

document.querySelector('button').addEventListener('click', deck)
document.addEventListener('DOMContentLoaded', main)
