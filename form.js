import { rerenderRatings } from "./ratings.js";
import { storeRating } from "./storage.js";

const form = document.getElementById("yourrating");
const nameInput = document.querySelector("input[name='name']");
const nameInputErr = document.querySelector("#nameErr");
const ratingInputErr = document.querySelector("#ratingErr");
const reviewInput = document.querySelector("textarea[name='review']");
const reviewInputErr = document.querySelector("#reviewErr");
const submitBtn = document.querySelector("input[name='submit']");
const submitSuccess = document.querySelector("#submitSuccess");

function handleFormSubmit(el) {
    const ratingInput = document.querySelector("input[name='rating']:checked");
    if (el.preventDefault) el.preventDefault();

    storeRating(nameInput.value, ratingInput.value, reviewInput.value);

    // Reset all fields
    nameInput.value = "";
    reviewInput.value = "";

    // Show success message
    submitSuccess.innerText = "Bewertung erfolgreich abgesendet!";
    rerenderRatings();
}

if (form.attachEvent) {
    form.attachEvent("submit", handleFormSubmit);
} else {
    form.addEventListener("submit", handleFormSubmit);
}
const ratingInput = document.querySelector("input[name='rating']:checked");

function formInputOnType() {
    submitSuccess.innerText = "";
}

nameInput.addEventListener("input", formInputOnType);
reviewInput.addEventListener("input", formInputOnType);
