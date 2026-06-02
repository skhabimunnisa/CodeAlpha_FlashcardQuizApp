let cards = [
  {question: "What is Python?", answer: "A programming language"},
  {question: "What is AWS?", answer: "A cloud platform"},
  {question: "What is HTML?", answer: "Markup language for web pages"}
];

let current = 0;

function showCard() {
  document.getElementById("question").innerText = cards[current].question;
  document.getElementById("answer").style.display = "none";
}

function showAnswer() {
  document.getElementById("answer").innerText = cards[current].answer;
  document.getElementById("answer").style.display = "block";
}

function nextCard() {
  current = (current + 1) % cards.length;
  showCard();
}

function prevCard() {
  current = (current - 1 + cards.length) % cards.length;
  showCard();
}
function addCard() {
  let q = document.getElementById("newQuestion").value;
  let a = document.getElementById("newAnswer").value;
  if(q && a) {
    cards.push({question: q, answer: a});
    current = cards.length - 1; // show the new card
    showCard();
    alert("Flashcard added!");
  } else {
    alert("Please enter both question and answer.");
  }
}

function editCard() {
  let q = document.getElementById("newQuestion").value;
  let a = document.getElementById("newAnswer").value;
  if(q && a) {
    cards[current] = {question: q, answer: a};
    showCard();
    alert("Flashcard updated!");
  } else {
    alert("Please enter both question and answer.");
  }
}

function deleteCard() {
  if(cards.length > 0) {
    cards.splice(current, 1);
    current = 0;
    showCard();
    alert("Flashcard deleted!");
  } else {
    alert("No cards to delete.");
  }
}


// Show first card when app loads
showCard();
