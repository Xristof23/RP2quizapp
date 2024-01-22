const form = document.querySelector('[data-js="form"]');

const questionString = document.querySelector("[data-js=yourquestion]");

questionString.addEventListener("input", () => {
  const charactersLeft = 150 - questionString.value.length;
  let questionStringDisplay = document.querySelector(
    "[data-js=question-string-display]"
  );
  questionStringDisplay.textContent = `${charactersLeft} characters left`;
});

// const submitButton = document.querySelector("[data-js=submit-button]");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formelements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const yourQuestion = formelements.yourquestion.value;
  const tag = formelements.tag.value;

  const cardList = document.createElement("ul");
  document.body.append(cardList);
  cardList.classList.add("card-list");

  const newQuestion = document.createElement("li");
  cardList.append(newQuestion);
  newQuestion.classList.add("card-list__item");

  const article = document.createElement("article");
  article.innerHTML = `<button class="card__button-answer"
  type="button" data-js="show-answer-button-n">Show answer
</button>`;

  article.classList.add("card");
  newQuestion.append(article);

  const question = document.createElement("h2");
  article.prepend(question);
  question.classList.add("card__question");
  question.textContent = yourQuestion;

  const answer = document.createElement("p");
  article.append(answer);
  answer.classList.add("card__answer");
  answer.textContent = formelements.youranswer.value;

  const nShowAnswerButton = document.querySelector(
    "[data-js=show-answer-button-n]"
  );
  nShowAnswerButton.addEventListener("click", () => {
    answer.classList.toggle("card__answer--active");
    if (nShowAnswerButton.textContent.includes("Show answer")) {
      nShowAnswerButton.textContent = "Hide answer";
    } else {
      nShowAnswerButton.textContent = "Show answer";
    }
  });

  const bookmarkZone = document.createElement("div");
  article.append(bookmarkZone);
  bookmarkZone.classList.add("card__button-bookmark");
  bookmarkZone.innerHTML = `<button
class="bookmark"
aria-label="bookmark"
type="button"
data-js="bookmark-button-n">
*
</button>`;

  const nBookmarkButton = document.querySelector("[data-js=bookmark-button-n]");
  nBookmarkButton.addEventListener("click", () => {
    nBookmarkButton.classList.toggle("bookmark--active");
  });

  const tagZone = document.createElement("ul");
  article.append(tagZone);
  tagZone.classList.add("card__tag-list");

  const tagLi = document.createElement("li");
  tagZone.append(tagLi);
  tagLi.classList.add("card__tag-list-item");
  tagLi.textContent = tag;
});
