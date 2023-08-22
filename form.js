import { rerenderRatings } from "./ratings.js";
import { storeRating } from "./storage.js";

const form = document.getElementById("yourrating");
const nameInput = document.querySelector("#yourrating [name='name']");
const nameInputErr = document.querySelector("#nameErr");
const ratingInput = document.querySelector("#yourrating [name='rating']");
const ratingInputErr = document.querySelector("#ratingErr");
const reviewInput = document.querySelector("#yourrating [name='review']");
const reviewInputErr = document.querySelector("#reviewErr");
const submitBtn = document.querySelector("#yourrating [name='submit']");
const submitSuccess = document.querySelector("#submitSuccess");

function handleFormSubmit(el) {
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
    ratingInput.value = "";
    reviewInput.value = "";
    submitSuccess.innerText = "Bewertung erfolgreich abgesendet!";
    rerenderRatings();
}

if (form.attachEvent) {
    form.attachEvent("submit", handleFormSubmit);
} else {
    form.addEventListener("submit", handleFormSubmit);
}
