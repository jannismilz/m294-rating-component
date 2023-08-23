const yourratingElements = Array.from(
    document.getElementsByClassName("yourrating")
);

document.addEventListener("DOMContentLoaded", () => {
    yourratingElements.forEach((el) => {
        el.classList.add("yourrating-animated");
    });
});

export async function runRatingTransition() {
    // Hack so it only transitions after elements are finally loaded
    await new Promise((r) => setTimeout(r, 1));

    const ratingWrapperElements = Array.from(
        document.getElementsByClassName("ratingWrapper")
    );

    ratingWrapperElements.forEach((el) => {
        el.classList.add("ratingWrapper-animated");
    });
}
