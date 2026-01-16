function validateUsername(username) {
    if(username.length <= 2) {
        return false;
    }

    if(username.length >= 20) {
        return false;
    }

    if(username.includes('@')) {
        return false;
    }

    return true;
}

let input = document.getElementById('username');
document
    .getElementById('btn-username')
    .addEventListener('click', function() {
        let username = input.value;
        console.log(username);
        if(validateUsername(username)) {
            input.style.backgroundColor = 'yellow';
            console.log('Valid username');
        }else {
            input.style.backgroundColor = 'red';
            console.log('Not valid username');
        }
    });