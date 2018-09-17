const cards = document.querySelectorAll('.memory-card');

const frontfaces = document.querySelectorAll('.ff-image');

const images = [
  'Apr2.png', 'Apr3.png', 'Apr4.png', 'Aug3.png', 'Aug4.png', 'Dec2.png', 'Dec4.png', 'Feb2.png', 'Feb4.png', 'Jan4.png', 'Apr2.png', 'Apr3.png', 'Apr4.png', 'Aug3.png', 'Aug4.png', 'Dec2.png', 'Dec4.png', 'Feb2.png', 'Feb4.png', 'Jan4.png'
]
images.sort(() => Math.random() - 0.5);


cards.forEach(card => card.addEventListener('click', flipCard));

for (let i = 0; i < frontfaces.length; i++) {
  frontfaces[i].src = 'img/' + images[i];
  cards[i].id = images[i];
}

let hasFlippedCard = false;
let firstCard, secondCar;


function flipCard() {
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    firstCard.removeEventListener('click', flipCard);
    return;
  }

  secondCard = this;
  hasFlippedCard = false;
  secondCard.removeEventListener('click', flipCard);

  checkForMatch();
}

function checkForMatch() {
  if (firstCard.id === secondCard.id) {
    console.log('Match!!');
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 600);
  firstCard.addEventListener('click', flipCard);
  secondCard.addEventListener('click', flipCard);
}
