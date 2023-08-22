import { rerenderRatings } from "./ratings.js";

const sortSelect = document.getElementById("ratingsSort");

sortSelect.addEventListener("change", () => {
    const value = sortSelect.value;
    const [sort, sortType] = value.split("-"); // Format: publish-desc

    rerenderRatings(sort, sortType);
});
