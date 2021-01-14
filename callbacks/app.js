let baseURL = "http://numbersapi.com";
let favNumber = 3;

$.getJSON(`${baseURL}/${favNumber}?json`, function (data) {
console.log(data);  
});
    


let favNumbers = [1, 4, 30]
$.getJSON(`${baseURL}/${favNumbers}?json`, function (data) {
console.log(data);
    
});

let numFacts = [];
$.getJSON(`${baseURL}/${favNumber}?json`, function (data) {
    numFacts.push(data.text);
    
    $.getJSON(`${baseURL}/${favNumber}?json`, function (data) {
        numFacts.push(data.text);
        
        $.getJSON(`${baseURL}/${favNumber}?json`, function (data) {
            numFacts.push(data.text);
            
            $.getJSON(`${baseURL}/${favNumber}?json`, function (data) {
                numFacts.push(data.text);
                numFacts.forEach(function (fact) {
                    $('body').append(`<ol>${fact}</ol>`);
                });
            });
        });
    });
})
