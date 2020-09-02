/**
 * Example store structure
 */
let store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Where does Buffy work in season Six?',
      answers: [
        'Burger Palace',
        'Hot Dog On A Stick',
        'Smoothie Street',
        'Ricos Tacos, Tacos'
      ],
      correctAnswer: 'Hot Dog On A Stick'
    },
    {
      question: 'Which character is not part of the Scooby Gang?',
      answers: [
        'Xander',
        'Willow',
        'Lilly',
        'Cordelia'
      ],
      correctAnswer: 'Lilly'
    },
    {
      question: "What is the name of Buffy's Watcher?",
      answers: [
        'Rupert',
        'Watson',
        'Alfred',
        'Timothy'
      ],
      correctAnswer: 'Rupert'
    },
    {
      question: 'Oz is what type of supernatural creature?',
      answers: [
        'Vampire',
        'Werewolf',
        'Changling',
        'Mereman'
      ],
      correctAnswer: 'Werewolf'
    },
    {
      question: "What is buffy's sister's name?",
      answers: [
        'Carla',
        'Willow',
        'Dawn',
        'Jessica'
      ],
      correctAnswer: 'Dawn'
    }
  ],
  questionNumber: 0,
  score: 0
};

let resultsStringText = ""; //string declared globally so it can be used in multiple functions. 

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

function questionCounter() { //+1 to questionNumber each time called 
  store.questionNumber += 1;
}

function scoreCounter() { //+1 to score each time called
  store.score += 1;
}

function scorePercentage() { //determines score as a percentage
  if (store.questionNumber === 0) {
    return `
      No score yet!`
  } else {
    return `
      ${((store.score / store.questionNumber) * 100).toFixed(2)}%`;
  }
}

function checkAnswer(e) { //this function checks if the user submitted answer is correct

  e.preventDefault();
  let selectedAnswer = $("input[name='answer']:checked").val(); //gets value from selected radio
  let currentCorrectAnswer = store.questions[store.questionNumber].correctAnswer; /*gets correct
  answer from store*/

  /* if/else statement assigns appropriate string based on user selection */
  if (selectedAnswer === currentCorrectAnswer) {
    scoreCounter();
    resultsStringText = `Your answer is correct! You are a true Vampire Slayer!`;
  } else {
    resultsStringText = `That is incorrect. The correct answer is ${currentCorrectAnswer}.`;
  }
}

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function generateSplash() { //this is a template for the opening 'splash' page. 
  return `
  <div class="container">
    <form>
      <p>
        How big of a fan are you?
      </p>
      <button type="submit" id="beginQuiz"> Begin Quiz</button>
    </form>
  </div>
  `;
}

function answerFeedback() { //this is a template that provides feedback based on users answer 
  return `
  <div class="container">
    <form>
      <p>${resultsStringText}</p>
      <div class="button-container">
      <button type="submit" id="next"> Next Question</button>
      </div>  
    </form>  
  </div>    
  `
}

function finalScreen() { //this is a template for the final screen
  return `
  <div class="container">
  <form>
    <p>
      Congratulations! You have completed the quiz! <br> <br>
      Your final score is ${scorePercentage()}.
    </p>
    <button type="submit" id="restart"> Restart Quiz</button>
  </form>
</div>
`;
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function generateQuestion() { //this function is both a template for the questions, and renders questions based on store state. 
  let answerString = "";
  let questionObject = store.questions[store.questionNumber];
  let questionText = questionObject.question;

  questionObject.answers.map((a, i) => { /*using .map to iterate through avalable answers and make a
    string for each answer*/
    answerString += `
    <li>
      <input type="radio" name="answer" id="answer-${i}" data-answer="${a}" value="${a}">
      <label for="answer-${i}"> ${a}</label>
    </li>  
  `
  });

  return `
  <div class ="container">
    <div class="question">
      <form>
        <p>
          Question ${store.questionNumber + 1} out of ${store.questions.length}. <br>
          Current score: ${scorePercentage()}
        <p>
          ${questionText}
        </p>
    <div class="answer">
      <ol type="A">
        ${answerString}
      </ol>
      <div class="button-container">
      <button id="check-answer" onClick="checkAnswer(event)"> 
       Check Answer
      </button>
      </div>
    </div>
  </div>`

}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStart() {
  $(document).ready(function () {
    $('main').html(generateSplash());
    $('main').on('click', '#beginQuiz', (event) => {
      event.preventDefault();
      $('main').html(generateQuestion());
    });
  });
}

function renderQuestion() {
  $('main').on('click', '#next', (event) => {
    event.preventDefault();
    $('main').html(generateQuestion());
  });
}

function generateFeedback() {
  $('main').on('click', '#check-answer', (event) => {
    event.preventDefault();
    questionCounter();
    $('main').html(answerFeedback());
    if (store.questionNumber === store.questions.length) {
      $('#next').prop("id", "finish-quiz");
      $("#finish-quiz").text("Finish");
    }
  });
}

function generateFinal() {
  $('main').on('click', '#finish-quiz', (event) => {
    event.preventDefault();
    $('main').html(finalScreen());
  });
}

function restartQuiz() {
  $('main').on('click', '#restart', (event) => {
    event.preventDefault();
    store.questionNumber = 0;
    store.score = 0;
    $('main').html(generateQuestion());
  });
}


function handleQuizApp() {
  generateSplash();
  handleStart();
  renderQuestion();
  generateQuestion();
  generateFeedback();
  generateFinal();
  restartQuiz()
}

handleQuizApp(); 