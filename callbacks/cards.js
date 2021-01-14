$(function(){
    let baseURL = 'https://deckofcardsapi.com/api/deck/';

    $.getJSON(`${baseURL}/new/draw`, function (data) {
        let suit = data.cards[0];
        let value = data.cards[0];
        console.log(`${value.toUpperCase()} of ${suit.toUpperCase()}`);
    });

    $.getJSON(`${baseURL}/new/draw`, function (data) {
        let firstCard = data.cards[0];
        let deckId = data.deck_id;
        $.getJSON(`${baseURL}/${deckId}/draw`, function (data) {
            let secondCard = data.cards[0];
            [firstCard, secondCard].forEach(function (card) {
                console.log(`${card.value.toUpperCase()} of ${card.suit.toUpperCase()}`);
            });
        });
    });
 

    let deckId = null;
    $.getJSON(`${baseURL}/new/shuffle/`, function(data) {
        deckId = data.deck_id;
        $('button').show();
      });
    $('button').on('click', function () {
        $.getJSON(`${baseURL}/${deckId}/draw`, function (data) {
            let cardSrc = data.cards[0].image;
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
    });
});
