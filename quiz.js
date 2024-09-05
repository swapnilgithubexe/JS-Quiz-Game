const questionObj =
{
  category: 'Food & Drink',
  id: 'qa-1',
  correctAnswer: 'Three',
  answers: ['Two', 'Three', 'Four', 'Five'],
  question:
    "How many pieces of bun are in a Mcdonald's Big Mac?",
};

const questionDiv = document.getElementById("question");
questionDiv.textContent = questionObj.question;

const optionsDiv = document.getElementById("options")
const scoreDiv = document.getElementById("score")
let score = 0;

questionObj.answers.forEach((item) => {
  let btn = document.createElement("button")
  btn.innerText = item
  btn.dataset.answer = item
  optionsDiv.appendChild(btn)
})

optionsDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const selectedAnswer = e.target.dataset.answer
    if (selectedAnswer === questionObj.correctAnswer.trim()) {
      scoreDiv.textContent = `Score: ${++score}`
    } else {
      scoreDiv.textContent = `Score: ${score - 0.25}`
    }
    optionsDiv.textContent = ""
    questionDiv.textContent = "Quiz Completed!"
  }
})

