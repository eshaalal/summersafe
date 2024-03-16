// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Handle form submission
const signInForm = document.querySelector('.sign-in-form');
const signUpForm = document.querySelector('.sign-up-form');

signInForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  
  // Here you would perform authentication (e.g., send data to backend, verify credentials)
  
  // Redirect user to main page
  window.location.href = "main_page.html"; // Replace "main_page.html" with the URL of your main page
});

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  
  // Here you would perform user registration (e.g., send data to backend, create user account)
  
  // Redirect user to main page
  window.location.href = "main_page.html"; // Replace "main_page.html" with the URL of your main page
});
