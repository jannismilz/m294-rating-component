import { getRatings, storeRating } from "./storage.js";
import "./form.js";
import "./ratings.js";
import { renderRatings } from "./ratings.js";
import "./sort.js";
import "./transition.js";

renderRatings();

// console.log(getRatings("publish", "desc")); // Neuste zuerst
// console.log(getRatings("publish", "asc")); // Älteste zuerst
// console.log(getRatings("rating", "desc")); // Beste zuerst
// console.log(getRatings("rating", "asc")); // Schlechteste zuerst
