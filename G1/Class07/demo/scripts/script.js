let main = document.getElementById('main');

let text = main.textContent;
console.log(text);
let text1 = main.innerText;
console.log(text1);

let h1 = main.firstElementChild;
// h1.innerText = 'New text';
// h1.innerText = h1.innerText + ' Ultra new content';
h1.innerText += ' Ultra new content';

// Changing and adding code

// main.innerText = '<p>Hello world!<p/>';
console.log(main.innerHTML);
main.innerHTML += '<p>Hello world!</p>';
// main.innerHTML = '';