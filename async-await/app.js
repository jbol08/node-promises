let baseURL = "http://numbersapi.com";
let favNumber = 3;

async function numberFacts() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
}
numberFacts();

let favNumbers = [1, 4, 30]
async function numberFacts2() {
    let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
    console.log(data);
}
numberFacts2();

async function numberFacts3(){
    let data = await Promise.all([
        $.getJSON(`${baseURL}/${favNumber}?json`),
        $.getJSON(`${baseURL}/${favNumber}?json`),
        $.getJSON(`${baseURL}/${favNumber}?json`),
        $.getJSON(`${baseURL}/${favNumber}?json`)
    ]);
    console.log(data);
    console.log(data);
    console.log(data);
    console.log(data);
    data.forEach(function (data) {
        $('body').append(`<ol>${data.text}</ol>`);
    });
}
numberFacts3();

