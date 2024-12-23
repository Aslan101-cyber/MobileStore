// Functions to set, get, and erase cookies
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Handling form submission for sign-up
document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Set cookies for username and email
    setCookie("username", username, 7); // Expires in 7 days
    setCookie("email", email, 7); // Expires in 7 days

    // Display success alert and redirect to login
    alert('Sign-up successful! Redirecting to login page...');
    window.location.href = '/login'; // Redirect to login page
});

// Pre-fill login fields if cookies exist (used for login functionality)
function prefillLoginFields() {
    const username = getCookie("username");
    const email = getCookie("email");

    if (username) {
        const usernameField = document.getElementById('username');
        if (usernameField) {
            usernameField.value = username;
        }
    }

    // Uncomment if login uses email instead of username
    // if (email) {
    //     const emailField = document.getElementById('username');
    //     if (emailField) {
    //         emailField.value = email;
    //     }
    // }
}

// Run prefill logic if on login page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/login') {
        prefillLoginFields();
    }
});
