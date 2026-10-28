// const product=()=>{
//     const inner=(chocolate)=>{
//         card+= chocolate
//         console.log("New product",card);
//     }
//     return inner
// }
// const adding card=product()
// adding(cookies)

// Select HTML Elements using DOM
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const dashboard = document.getElementById("dashboard");

const loginMessage = document.getElementById("loginMessage");
const registerMessage = document.getElementById("registerMessage");
const welcomeMessage = document.getElementById("welcomeMessage");

const logoutButton = document.getElementById("logoutButton");

// Get registered users from LocalStorage
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Show Login Form
function showLogin() {
    loginForm.hidden = false;
    registerForm.hidden = true;
    dashboard.hidden = true;

    loginMessage.textContent = "";
    registerMessage.textContent = "";
}

// Show Register Form
function showRegister() {
    loginForm.hidden = true;
    registerForm.hidden = false;
    dashboard.hidden = true;

    loginMessage.textContent = "";
    registerMessage.textContent = "";
}

// Register
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim().toLowerCase();
    const password = document.getElementById("registerPassword").value;

    const users = getUsers();

    const existingUser = users.find(function(user) {
        return user.email === email;
    });

    if (existingUser) {
        registerMessage.textContent = "Email already registered!";
        return;
    }

    users.push({
        name: name,
        email: email,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));

    registerMessage.textContent = "Registration successful! Please login.";
    registerForm.reset();
});

// Login
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const users = getUsers();

    const user = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify({
            name: user.name,
            email: user.email
        }));

        showDashboard(user);
        loginForm.reset();
    } else {
        loginMessage.textContent = "Invalid email or password!";
    }
});

// Show Dashboard
function showDashboard(user) {
    loginForm.hidden = true;
    registerForm.hidden = true;
    loginTab.hidden = true;
    registerTab.hidden = true;
    dashboard.hidden = false;

    welcomeMessage.textContent = "Welcome, " + user.name + "!";
}

// Logout
logoutButton.addEventListener("click", function() {
    localStorage.removeItem("currentUser");

    loginTab.hidden = false;
    registerTab.hidden = false;

    loginForm.reset();
    registerForm.reset();

    showLogin();
});

// DOM Click Events
loginTab.addEventListener("click", showLogin);
registerTab.addEventListener("click", showRegister);

// Check login when page refreshes
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    showDashboard(currentUser);
} else {
    showLogin();
}
