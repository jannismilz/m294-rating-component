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

    let error = false;
    if (!nameInput.value) {
        nameInputErr.innerText = "Dieses Feld muss ausgefüllt werden!";
        error = true;
    }
    if (!ratingInput.value) {
        ratingInputErr.innerText = "Dieses Feld muss ausgefüllt werden!";
        error = true;
    }
    if (!reviewInput.value) {
        reviewInputErr.innerText = "Dieses Feld muss ausgefüllt werden!";
        error = true;
    }

    if (error) return;

    storeRating(nameInput.value, ratingInput.value, reviewInput.value);

    // Reset all fields
    nameInput.value = "";
    reviewInput.value = "";
    submitSuccess.innerText = "Bewertung erfolgreich abgesendet!";
}

if (form.attachEvent) {
    form.attachEvent("submit", handleFormSubmit);
} else {
    form.addEventListener("submit", handleFormSubmit);
}
const ratingInput = document.querySelector("input[name='rating']:checked");