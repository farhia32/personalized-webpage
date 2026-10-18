const userForm = document.getElementById("user-form");

const nameInput = document.getElementById("name");

const ageInput = document.getElementById("age");

const greeting = document.getElementById("greeting");

const ageResult = document.getElementById("age-result");

const ageMessage = document.getElementById("age-message");

const quotesContainer = document.getElementById("quotes-card");

function displayUser(name, age) {

    greeting.textContent = `Hello, ${name}! Welcome to your personal dashboard.`;

const months = age * 12;

ageResult.textContent = `You are ${months} months old.`;

if (age > 18) {

    ageMessage.textContent = "You are over 18.";

} else {

    ageMessage.textContent = "You are 18 or younger.";

}

}

function displayQuotes() {

    const quote = "Believe in yourself and keep learning!";

    quotesContainer.innerHTML = "";

    for (let i = 0; i < 5; i++) {

        const quoteElement = document.createElement("p");

        quoteElement.className = "quote";

        quoteElement.textContent = quote;

        quotesContainer.appendChild(quoteElement);

    }

}
userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();

    const age = Number(ageInput.value);

    if (
        name === "" ||
        !Number.isInteger(age) ||
        age < 1 ||
        age > 120
    ) {

        alert("Please enter a valid name and age.");

        return;

    }


    localStorage.setItem("userName", name);

    localStorage.setItem("userAge", age);

    displayUser(name, age);

    displayQuotes();

});

const savedName = localStorage.getItem("userName");

const savedAge = localStorage.getItem("userAge");

if (savedName !== null && savedAge !== null) {

    const age = Number(savedAge);

    displayUser(savedName, age);

    displayQuotes();

}