const faqContainer = document.querySelector(".faq-container");
const addFaqButton = document.querySelector(".add-faq-button");

function toggleFaq(faq) {
  faq.classList.toggle("active");
}

const faqElements = document.querySelectorAll(".faq");
faqElements.forEach((faq) => {
  const toggleButton = faq.querySelector(".faq-toggle");
  toggleButton.addEventListener("click", () => {
    toggleFaq(faq);
  });

  const deleteButton = faq.querySelector(".faq-toggle .fa-times");
  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteFaq(faq);
  });
});

function deleteFaq(faq) {
  faq.remove();
}

addFaqButton.addEventListener("click", () => {
  const questionInput = document.querySelector(".question-input");
  const answerInput = document.querySelector(".answer-input");

  const question = questionInput.value;
  const answer = answerInput.value;

  if (question && answer) {
    const newFaq = document.createElement("div");
    newFaq.classList.add("faq");

    const newTitle = document.createElement("h3");
    newTitle.classList.add("faq-title");
    newTitle.textContent = question;

    const newText = document.createElement("p");
    newText.classList.add("faq-text");
    newText.textContent = answer;

    const newToggle = document.createElement("button");
    newToggle.classList.add("faq-toggle");
    newToggle.innerHTML = `
      <i class="fas fa-chevron-down"></i>
      <i class="fas fa-times"></i>
    `;

    newToggle.addEventListener("click", () => {
      toggleFaq(newFaq);
    });

    newFaq.appendChild(newTitle);
    newFaq.appendChild(newText);
    newFaq.appendChild(newToggle);

    faqContainer.insertBefore(newFaq, faqContainer.firstChild);

    questionInput.value = "";
    answerInput.value = "";
  }
});
