const cardArray = [
  {name: 'plant1',
  img: 'images/one.png',
},
{
  name: 'plant2',
  img: 'images/two.png'
},
{
  name: 'plant3',
  img: 'images/three.png',
},
{
  name: 'plant4',
  img: 'images/four.png'
},
{
  name: 'plant5',
  img: 'images/five.png'
},
{
  name: 'plant6',
  img: 'images/six.png'
}
];
cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const gridDisplay = document.querySelector('.grid');

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    gridDisplay.append(card);

  }
};

function flipCard() {
  let cardId = this.getAttribute('data-id');
  console.log(cardId);
  this.setAttribute('src', cardArray[cardId].img);
}


createBoard();
flipCard();