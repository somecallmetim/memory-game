const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard(){
    this.classList.toggle('flip');

    if(!hasFlippedCard){
        // first click
        hasFlippedCard = true;
        firstCard = this;
    }else {
        // second click
        hasFlippedCard = false;
        secondCard = this;

        // do cards match?
        if(firstCard.dataset.cardname === secondCard.dataset.cardname){
            // it's a match
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        }else {
            // not a match
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1500);
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));