let baseUrl = 'https://jsonplaceholder.typicode.com/';

let btn = document.getElementById('btn');

btn.addEventListener('click', function() {

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function(response) {
            console.log(response);
            let json = response.json();
            return json;
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log(error);
        })

});