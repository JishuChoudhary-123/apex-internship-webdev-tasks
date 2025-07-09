// QUIZ SECTION
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language"],
    correct: 0
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheet", "Cascading Style Sheet", "Computer Style Sheet"],
    correct: 1
  },
  {
    question: "Which language is used for web apps?",
    options: ["PHP", "Python", "JavaScript"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(idx);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = `<h3>Your Score: ${score}/${quizData.length}</h3>`;
  }
}

loadQuestion();

// API SECTION (Fetch Joke)
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(err => {
      document.getElementById("joke").textContent = "Failed to load joke.";
    });
}
