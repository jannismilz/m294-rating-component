/**
 * Get the ratings from the local storage
 *
 * @param {("publish"|"rating")} sort
 * @param {("desc"|"asc")} sortType
 */
export function getRatings(sort = "publish", sortType = "desc") {
    const localData = JSON.parse(localStorage.getItem("ratings"));

    if (!localData) return null;

    switch (sort) {
        case "publish":
            return localData.sort((a, b) =>
                sortType === "desc"
                    ? b.created_at - a.created_at
                    : a.created_at - b.created_at
            );
        case "rating":
            return localData.sort((a, b) =>
                sortType === "desc" ? b.rating - a.rating : a.rating - b.rating
            );
    }
}

/**
 * Store a review to the local storage
 *
 * @param {string} name
 * @param {number} rating
 * @param {string} review
 */
export function storeRating(name, rating, review) {
    console.log(name, rating, review);
    const dataObj = {
        name,
        rating,
        review,
        created_at: Date.now(),
    };

    const localData = localStorage.getItem("ratings");

    if (!localData) {
        return localStorage.setItem("ratings", JSON.stringify([dataObj]));
    }

    localStorage.setItem(
        "ratings",
        JSON.stringify([...JSON.parse(localData), dataObj])
    );
}
