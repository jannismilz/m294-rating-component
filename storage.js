/**
 * Get the ratings from the local storage
 *
 * @param {("publish"|"rating")} sort
 * @param {("desc"|"asc")} sortType
 */
export function getRatings(sort = "publish", sortType = "desc") {
    const localData = localStorage.getItem("ratings");

    if (!localData) return null;

    // Sort...

    return localData;
}

/**
 * Store a review to the local storage
 *
 * @param {string} name
 * @param {number} rating
 * @param {string} review
 */
export function storeRating(name, rating, review) {
    const dataObj = {
        name,
        rating,
        review,
        created_at: Date.now(),
    };

    const localData = localStorage.getItem("ratings");

    if (!localData) {
        localStorage.setItem("ratings", JSON.stringify([dataObj]));
    }

    localStorage.setItem(
        "ratings",
        JSON.stringify([...JSON.parse(localData), dataObj])
    );
}
