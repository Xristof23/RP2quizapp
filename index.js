// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector("[data-js=bookmark-button]");
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
  console.log("Bookmarked!");
});

const secondBookmarkButton = document.querySelector(
  "[data-js=bookmark-button-2]"
);
secondBookmarkButton.addEventListener("click", () => {
  secondBookmarkButton.classList.toggle("bookmark--active");
  console.log("Bookmarked 2nd card!");
});

const showAnswerButton = document.querySelector("[data-js=show-answer-button]");
const firstCardAnswer = document.querySelector("[data-js=card-one-answer]");
showAnswerButton.addEventListener("click", (toggleButtonText) => {
  firstCardAnswer.classList.toggle("card__answer--active");
  if (firstCardAnswer.classList.contains("card__answer--active")) {
    showAnswerButton.textContent = "Hide answer";
  } else {
    showAnswerButton.textContent = "Show answer";
  }
});
