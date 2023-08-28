const Questions = [{
    q: "1/5.What is capital of India?",
    a: [{ text: "Gandhinagar", isCorrect: false },
    { text: "Surat", isCorrect: false },
    { text: "Delhi", isCorrect: true },
    { text: "Mumbai", isCorrect: false }
    ]
},
{
    q: "2/5.What is the tallest mountain in the world?",
    a: [{ text: "Makalu", isCorrect: false},
    { text: "K2", isCorrect: false },
    { text: "Kangchenjunga", isCorrect: false },
    { text: "Mount Everest", isCorrect: true }
]
},
{
    q: "3/5.Which is the largest ocean on Earth?",
    a: [{ text: "Indian Ocean", isCorrect: false },
    { text: "Atlantic Ocean", isCorrect: false },
    { text: "Pacific Ocean", isCorrect: true },
    { text: "Arctic Ocean", isCorrect: false }
    ]
},
{
    q: "4/5.Which planet is known as the Red Planet?",
    a: [{ text: "Mars", isCorrect: true },
    { text: "Venus", isCorrect: false },
    { text: "Mercury", isCorrect: false },
    { text: "Uranus", isCorrect: false }
    ]
},
{
    q: "5/5.Which is the largest planet in solar system?",
    a: [{ text: "Saturn", isCorrect: false },
    { text: "Jupiter", isCorrect: true },
    { text: "Mars", isCorrect: false },
    { text: "Neptune", isCorrect: false }
    ]
}
]
 
let currQuestion = 0;
let score = 0;
 
function loadQues() {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
}
 
function nextQuestion() {
    if (currQuestion < Questions.length -1) {
        currQuestion++;
        loadQues();
    }
     else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}

function PrevQuestion() {
    if (currQuestion < Questions.length -1) {
        currQuestion--;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
