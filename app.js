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
      question: 'Which character is not part of the Scooby Gang',
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
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

let resultsStringText = "";

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

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

//question counter function increases QuestionNumber eash time questionCounter is called. 
function questionCounter() {
  store.questionNumber+=1;
}

//this is a template for the opening 'splash' page. 
function generateSplash() {
  return `
  <div class="splash">
    <form>
      <p>
        How big of a fan are you?
      </p>
      <button type="submit" id="beginQuiz" autofocus> Begin Quiz</button>
    </form>
  </div>
  `;  
}

function finalScreen() {
  return `
  <div class="final">
  <form>
    <p>
      Congratulations! You have completed the quiz! <br>
      Your score is ${store.score}.
    </p>
    <button type="submit" id="beginQuiz" autofocus> Restart Quiz</button>
  </form>
</div>
`; 
}

//a template that generates question and answer strings
function generateQuestion() {
  let answerString  = "";
  let questionObject = store.questions[store.questionNumber];
  let questionText = questionObject.question;

  console.log(store.questionNumber);

  questionObject.answers.map((a, i)=>{ /*using .map to iterate through avalable answers and make a
    string for each answer*/
    answerString+= `
    <li>
      <input type="radio" name="answer" id="answer-${i}" data-answer="${a}" value="${a}">
      <label for="answer-${i}"> ${a}</label>
    </li>  
  `
  })
  return `
  <div class="question">
    <form>
      <p>
        Question ${store.questionNumber+1}
      <p>
        ${questionText}
      </p>
  <div class="answer-container">
    <ol>
      ${answerString}
    </ol>
    <button id="ans-button" onClick="checkAnswer(event)"> 
      Check Answer
    </button>
  </div>`
}

function answerFeedback() {
  return  `
  <div class="feedback">
    <form>
      <p>${resultsStringText}</p>
      <button type="submit" id="next" autofocus> Next Question</button>
    </form>  
  </div>    
  `
}
//this function checks if the user submitted answer is correct
function checkAnswer(e) {


  e.preventDefault(); 
  let selectedAnswer = $("input[name='answer']:checked").val(); //gets value from selected radio
  let currentCorrectAnswer = store.questions[store.questionNumber].correctAnswer; /*gets correct
  answer from store*/

  /*for if/else statement assigns appropriate string based on user selection*/
  if (selectedAnswer === currentCorrectAnswer) {
    resultsStringText = `Your answer is correct! You are a true Vampire Slayer!`;
  } else {
    resultsStringText = `That is incorrect. The correct answer is ${currentCorrectAnswer}.`;
  }
  console.log(resultsStringText);
}

//on click it has to generate answer feedback

function generateFeedback() {
  //let feedbackString = answerFeedback(); 
  console.l
  console.log(store.questionNumber+1);
  console.log(store.questions.length); 
  $('main').on('click', '#ans-button',(event) => {
    event.preventDefault();
    $('main').html(answerFeedback()); 
    // $('#ans-button').prop("id", "restart-quiz");
    //if (store.questionNumber+1 === store.questions.length) {
    //  $('#ans-button').attr("id", "restart-quiz");
    //  $('#restart-quiz').text("Restart Quiz"); 
  });
}



//function that determines if it is the last question, and generates html telling user final score and gives option to restart quiz

//function that keeeps track of score. Correct: 1/5 2/5 3/5 4/5 

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuestion() {
  $('main').on('click', '#next', (event) => {
    event.preventDefault();
    questionCounter();
    $('main').html(generateQuestion()); 
}); 
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


function handleStart() {
  console.log("handleStart");
  $(document).ready(function() {
    $('main').html(generateSplash());
    $('main').on('click', '#beginQuiz', (event) => {
      event.preventDefault();
      $('main').html(generateQuestion()); 
  }); 
    $('main').html(generateSplash());
});
}
   
function handleQuizApp() {
  generateSplash();
  handleStart();
  renderQuestion();
  generateQuestion(); 
  generateFeedback();
};  

handleQuizApp(); 