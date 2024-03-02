document.addEventListener("DOMContentLoaded", function() {
    var users = [];

    document.getElementById("registerLink").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registerForm").style.display = "block";
        document.getElementById("securePage").style.display = "none";
    });

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        var user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("securePage").style.display = "block";
            document.getElementById("registerForm").style.display = "none";
            document.getElementById("loginError").style.display = "none";
        } else {
            document.getElementById("loginError").style.display = "block";
        }
    });

    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var newUsername = document.getElementById("newUsername").value;
        var newPassword = document.getElementById("newPassword").value;

        users.push({ username: newUsername, password: newPassword });

        document.getElementById("registerForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    });

    document.getElementById("logoutButton").addEventListener("click", function() {
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("securePage").style.display = "none";
    });

    // Registering "ramya" with password "123"
    users.push({ username: "ramya", password: "123" });
});

