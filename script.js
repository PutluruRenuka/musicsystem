function showSignupForm() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

// Function to show the login form and hide the signup form
function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}
// function showMusicForm(){
//     document.getElementById('login-form').style.display='none';
//     document.getElementById('music-form').style.display='block';

// }

// Basic client-side form validation
document.getElementById('signup').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password) {
        alert(`Signup successful!\nName: ${name}\nEmail: ${email}`);
        // Here you would typically send the data to the server using AJAX or fetch API
        showLoginForm();
        
    } else {``
        alert('Please fill out all fields.');
    }
});
document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert(`Login successful!\nEmail: ${email}`);
        // Here you would typically send the data to the server using AJAX or fetch API
    } else {
        alert('Please fill out all fields.');
    }
});

document.getElementById('music-form').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirects to another page
});

