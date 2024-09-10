const quesJSON = [
  {
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

let currentIndex = 0;
let score = 0;

const renderQuestions = (questionObj) => {
  const shuffleOptions = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
  }

  const questionDiv = document.getElementById("question");
  questionDiv.textContent = questionObj.question;
  const optionsDiv = document.getElementById("options")
  const scoreDiv = document.getElementById("score")

  const shuffledOptions = shuffleOptions(questionObj.options)
  shuffledOptions.forEach((item) => {
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
      currentIndex += 1;
      optionsDiv.innerHTML = ""

      if (currentIndex < quesJSON.length) {
        renderQuestions(quesJSON[currentIndex])
      } else {
        questionDiv.textContent = "Quiz Completed!";
        optionsDiv.innerHTML = "";
      }
    }
  }, { once: true })

}

renderQuestions(quesJSON[currentIndex]);




