document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;

    if (password === 'password123') {
        alert(`Welcome to Blogify`);
        window.location.href = 'Dashboard.html';}

    else if (password ===  "password22"){
        window.location.href = 'employee.html';

    }
         else {
        
        document.getElementById('errorMessage').textContent = "Incorrect password. Please try again.";
    }
});


