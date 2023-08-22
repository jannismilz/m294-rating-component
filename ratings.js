import { getRatings } from "./storage.js";

const ratingsContainer = document.getElementById("ratings");

const noRatingsTemplate = () => {
    const textNode = document.createElement("p");
    textNode.classList.add("noRatings");
    textNode.innerText = "Derzeit wurden noch keine Bewertungen abgegeben";

    return textNode;
};

const ratingTemplate = (name, rating, review) => {
    const wrapperNode = document.createElement("li");
    wrapperNode.classList.add("ratingWrapper");

    const nameRatingNode = document.createElement("div");
    nameRatingNode.classList.add("ratingNameRating");

    const nameNode = document.createElement("span");
    nameNode.classList.add("ratingName");
    nameNode.innerText = name;

    const ratingNode = document.createElement("span");
    ratingNode.classList.add("ratingRating");
    ratingNode.innerText = rating;

    const reviewNode = document.createElement("p");
    reviewNode.classList.add("ratingReview");
    reviewNode.innerText = review;

    // Append all elements together
    nameRatingNode.appendChild(nameNode);
    nameRatingNode.appendChild(ratingNode);

    wrapperNode.appendChild(nameRatingNode);
    wrapperNode.appendChild(reviewNode);

    return wrapperNode;
};

function removeRatings() {
    Array.from(ratingsContainer.children).forEach((child) => child.remove());
}

export function renderRatings() {
    removeRatings();
    const ratings = getRatings();

    if (!ratings || typeof ratings !== "object") {
        return ratingsContainer.appendChild(noRatingsTemplate());
    }

    ratings.forEach((rating) => {
        ratingsContainer.appendChild(
            ratingTemplate(rating.name, rating.rating, rating.review)
        );
    });
}

// Just for naming and understanding purposes
export function rerenderRatings() {
    renderRatings();
}
