let baseURL = "http://numbersapi.com";
let favNumber = 1;


$.getJSON(`${baseURL}/${favNumber}?json`).then(function (data) {
    console.log(data);  
});
  
let favNumbers = [1, 4, 30]
$.getJSON(`${baseURL}/${favNumbers}?json`).then(function (data) {
console.log(data);    
});

Promise.all([
    $.getJSON(`${baseURL}/${favNumber}?json`),
    $.getJSON(`${baseURL}/${favNumber}?json`),
    $.getJSON(`${baseURL}/${favNumber}?json`),
    $.getJSON(`${baseURL}/${favNumber}?json`)
]).then(function (numFacts) {
    numFacts.forEach(function (data) {
        $('body').append(`<ol>${data.text}</ol>`);
    });
});