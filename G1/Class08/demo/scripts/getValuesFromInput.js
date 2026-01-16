let inputs = document.getElementsByTagName('input');


document.querySelector('button')
    .addEventListener('click', function() {
        let loginForm = {};
        for(let input of inputs) {
            loginForm[input.name] = input.value;
        }
        console.log(loginForm);
    });

// document.querySelector('button')
//     .addEventListener('click', function() {
//         let username = inputs[0].value;
//         let password = inputs[1].value;
//         console.log(username);
//         console.log(password);
//     });