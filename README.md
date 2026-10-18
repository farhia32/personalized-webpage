# Personalized Webpage

##  Project Overview

The Personalized Webpage is a simple, interactive website that allows users to enter their names and ages to receive a personalized greeting and view information about their age.

The project demonstrates the use of HTML, CSS, and JavaScript to create a user-friendly webpage. It also uses browser local storage to save user information so that it can be displayed again when the page is refreshed.

##  Project Objectives

The main objectives of this project are to:

* Build a webpage using HTML.
* Style the webpage using CSS.
* Use JavaScript to make the webpage interactive.
* Collect and validate user input through a form.
* Display a personalized greeting using the user's name.
* Calculate the user's age in months.
* Use conditional statements to display an age-related message.
* Use a loop to display a motivational quote five times.
* Store and retrieve user information using `localStorage`.

##  Technologies Used

* **HTML5:** Structures the webpage and its content.
* **CSS3:** Styles the webpage and makes it visually appealing and responsive.
* **JavaScript:** Handles form submission, input validation, calculations, conditional statements, loops, and dynamic content.
* **Browser Local Storage:** Saves the user's name and age in the browser.
* **Git and GitHub:** Used for version control and project hosting.

## Features

### 1. Personalized Greeting

Users enter their names and receive a greeting that includes their names.

### 2. Age Calculator

The webpage calculates the user's age in months by multiplying their age in years by 12.

### 3. Conditional Messages

The webpage uses an `if...else` statement to display a message indicating whether the user is over 18 or 18 and younger.

### 4. Motivational Quotes

A JavaScript `for` loop displays the same motivational quote five times.

### 5. Form Validation

The webpage checks that the user enters a name and a valid age between 1 and 120 before processing the information.

### 6. Data Persistence

The webpage uses `localStorage` to save the user's name and age. The saved information can be retrieved when the webpage is refreshed or reopened in the same browser, provided the stored data remains available.

### 7. Responsive Design

CSS media queries help the webpage adapt to smaller screens, including mobile devices.

##  Project Structure

personalized-webpage/
│
├── index.html
├── style.css
├── script.js
└── README.md


### File Descriptions

* `index.html` contains the structure and content of the webpage.
* `style.css` contains the styling and responsive design rules.
* `script.js` contains the interactive functionality and local storage logic.
* `README.md` provides information about the project.

##  How to Run the Project

1. Clone or download the project repository.
2. Open the project folder in Visual Studio Code.
3. Ensure that `index.html`, `style.css`, and `script.js` are in the same folder.
4. Open `index.html` in a web browser.
5. Enter your name and age in the form.
6. Click the **Create My Profile** button.
7. View your personalized greeting, age in months, age-related message, and motivational quotes.
8. Refresh the webpage to test whether the saved information is retrieved.

No backend server or database is required because the project uses browser local storage.

##  JavaScript Concepts Demonstrated

This project demonstrates the following JavaScript concepts:

* **Variables:** Store references to HTML elements and user information.
* **DOM Manipulation:** Updates webpage content dynamically.
* **Functions:** Organize reusable tasks such as displaying user information and motivational quotes.
* **Event Listeners:** Detect form submission.
* **Form Validation:** Checks whether the entered information meets the required conditions.
* **Conditional Statements:** Use `if...else` to display age-related messages.
* **Template Literals:** Insert variables into strings.
* **Loops:** Use a `for` loop to display a quote five times.
* **Local Storage:** Save and retrieve information in the browser.
* **Type Conversion:** Convert the entered age into a number for calculations and validation.

##  Future Improvements

Possible future improvements include:

* Allowing users to choose from different motivational quotes.
* Adding a button to clear saved profile information.
* Adding more personalized messages.
* Improving accessibility and visual design.
* Providing more detailed input error messages.

##  Author

Developed as a beginner web development project to practise HTML, CSS, and JavaScript fundamentals.

## License

This project is intended for educational purposes.
