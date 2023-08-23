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

    const ratingNode = document.createElement("form");
    ratingNode.classList.add("ratingRating");

    const reviewNode = document.createElement("p");
    reviewNode.classList.add("ratingReview");
    reviewNode.innerText = review;

    for (let i = 5; i >= 1; i--) {
        const starNode = document.createElement("input");
        starNode.type = "radio";
        starNode.name = "rating";
        starNode.id = `star${i}`;
        if (i === parseInt(rating)) starNode.checked = true;

        const starLabelNode = document.createElement("label");
        starLabelNode.for = `star${i}`;
        starLabelNode.innerText = "☆";

        ratingNode.appendChild(starNode);
        ratingNode.appendChild(starLabelNode);
    }

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

export function renderRatings(sort, sortType) {
    removeRatings();
    const ratings =
        sort !== null && sortType !== null
            ? getRatings(sort, sortType)
            : getRatings();

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
export function rerenderRatings(sort, sortType) {
    renderRatings(sort, sortType);
}
