
let h3 = document.getElementById('firstTitle');

let h3jq = $('#firstTitle');

console.log(h3);
console.log(h3jq);

let getByClassname = $('.innerWrapper');

let getByTagName = $('p');

h3.style.backgroundColor = 'blue';
h3jq.css('background-color', 'red');

h3.innerText = 'SOmething';
h3jq.text('Jquery text');

let allElements = $('*');
console.log(allElements);
let p = allElements.find('.wrapper').find('p').last();
console.log(p);

let atributeSelector = $('p[name="demo"]');
console.log(atributeSelector);
atributeSelector.css('color', 'blue');


let btn = $('#btn');
let input = $('#username');

btn.on('click', function(e) {
    console.log(e);
})

input.on('keypress',function(e) {
    console.log(input.val());
});