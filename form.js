const form = document.querySelector('[data-js="form"]');

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
  type="button" data-js="show-answer-button">
  Show answer
</button>`;
  article.classList.add("card");
  newQuestion.append(article);

  const question = document.createElement("h2");
  article.prepend(question);
  question.classList.add("card__question");
  question.textContent = yourQuestion;

  //   const answerButton = document.createElement("button");

  const answer = document.createElement("p");
  article.append(answer);
  answer.classList.add("card__answer--active");
  answer.textContent = formelements.youranswer.value;

  const bookmarkZone = document.createElement("div");
  article.append(bookmarkZone);
  bookmarkZone.classList.add("card__button-bookmark");
  bookmarkZone.innerHTML = `<button
class="bookmark"
aria-label="bookmark"
type="button"
data-js="bookmark-button">
*
</button>`;

  const tagZone = document.createElement("ul");
  article.append(tagZone);
  tagZone.classList.add("card__tag-list-item");

  const tagLi = document.createElement("li");
  tagZone.append(tagLi);
  tagLi.textContent = tag;

  /*   newQuestion.innerHTML = `
          <article class="card">
            <h2 class="card__question">
              ${yourQuestion}
            </h2>
            <button
              class="card__button-answer"
              type="button"
              data-js="show-answer-button"
            >
              Show answer
            </button>
            <p class="card__answer--active" data-js="card-new-answer">
              ${formelements.youranswer.value}
            </p>
            <ul class="card__tag-list">
              <li class="card__tag-list-item">
              #${formelements.tag.value}
              </li>
             
            </ul>
            <div class="card__button-bookmark">
              <button
                class="bookmark"
                aria-label="bookmark"
                type="button"
                data-js="bookmark-button"
              >
                *
              </button>
            </div>
          </article>`; */

  console.log(newQuestion);
});
