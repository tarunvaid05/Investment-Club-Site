const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    loginBtn.style.animation = 'buttonClick 0.2s ease';
    setTimeout(() => {
        loginBtn.style.animation = '';
    }, 200);

    // Add actual login handling logic here
    alert('Logging in...');
});
