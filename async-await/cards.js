$(function () {
    let baseURL = 'https://deckofcardsapi.com/api/deck/';

    async function cards1() {
        let data = await $.getJSON(`${baseURL}/new/draw`);
        let suit = data.cards[0];
        let value = data.cards[0];
        console.log(`${value.toUpperCase()} of ${suit.toUpperCase}`);
    }
    cards1();

    
    async function cards2() {
        let firstCard = await $.getJSON(`${baseURL}/new/draw`);
        let deckId = firstCard.deck_id;
        let secondCard = await $.getJSON(`${baseURL}/${deckId}/draw`)
        [firstCard, secondCard].forEach(function (card) {
            let suit = card.cards[0];
            let value = card.cards[0];
            console.log(`${value.toUpperCase()} of ${suit.toUpperCase()}`);
        })
    }
    cards2();
 

    async function pile() {
        let deck = await $.getJSON(`${baseURL}/new/shuffle`);
        $('button').show().on('click', async function () {
            let cardData = await $.getJSON(`${baseURL}/${deck.deck_id}/draw`);
            let cardSrc = cardData.cards[0].image;
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            $('#cards').append(
                $('<img>', {
                    src: cardSrc, css: {
                        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                    }
                })
            );
            if (data.remaining === 0) $('button').remove();
        });
    }
    pile();
});
   