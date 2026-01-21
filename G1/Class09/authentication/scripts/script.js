document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showLoginButton = document.getElementById('show-login');
    const showRegisterButton = document.getElementById('show-register');

    const displayMessage = (element, message, isValid) => {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.style.color = isValid ? 'green' : 'red';
        element.parentElement.appendChild(messageElement);
        element.style.borderColor = isValid ? 'green' : 'red';
    };

    const clearMessages = (form) => {
        const messages = form.querySelectorAll('p');
        messages.forEach(msg => msg.remove());
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => input.style.borderColor = '');
    };

    const validateInput = (input, type) => {
        if (type === 'username') {
            if (input.value.trim() === '') {
                displayMessage(input, 'Username is required.', false);
                return false;
            }
            if (input.value.length > 25) {
                displayMessage(input, 'Username must not exceed 25 characters.', false);
                return false;
            }
        } else if (type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                displayMessage(input, 'Please enter a valid email address.', false);
                return false;
            }
        } else if (type === 'password') {
            if (input.value.length < 8) {
                displayMessage(input, 'Password must be at least 8 characters.', false);
                return false;
            }
        }
        displayMessage(input, 'Valid input.', true);
        return true;
    };

    // Ensure buttons exist before adding event listeners
    if (showLoginButton && showRegisterButton) {
        showLoginButton.addEventListener('click', () => {
            if (loginForm && registerForm) {
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
            }
        });

        showRegisterButton.addEventListener('click', () => {
            if (loginForm && registerForm) {
                registerForm.classList.remove('hidden');
                loginForm.classList.add('hidden');
            }
        });
    }

    // Ensure forms exist before adding submit event listeners
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            clearMessages(loginForm);
            const username = document.getElementById('login-username');
            const password = document.getElementById('login-password');

            validateInput(username, 'username');
            validateInput(password, 'password');
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            clearMessages(registerForm);
            const username = document.getElementById('register-username');
            const email = document.getElementById('register-email');
            const password = document.getElementById('register-password');

            validateInput(username, 'username');
            validateInput(email, 'email');
            validateInput(password, 'password');
        });
    }
});