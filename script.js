document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent successfully.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Function to toggle language based on user or browser preference
function toggleLanguage(language) {
    const elements = document.querySelectorAll("[data-en]");
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${language}`);
    });
    // Store selected language in localStorage
    localStorage.setItem("selectedLanguage", language);
}

// Function to detect browser language and set default language
function setDefaultLanguage() {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    const browserLanguage = navigator.language || navigator.userLanguage;

    if (savedLanguage) {
        // Use language from localStorage if available
        toggleLanguage(savedLanguage);
    } else if (browserLanguage.startsWith("es")) {
        // Set to Spanish if browser language is Spanish
        toggleLanguage("es");
    } else {
        // Default to English
        toggleLanguage("en");
    }
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", setDefaultLanguage);

