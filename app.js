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

//this is a template for the opening 'splash' page. 

function questionCounter() {
  store.questionNumber+=1;
}

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

function generateQuestion() {
  let answerString  = "";
  let questionObject = store.questions[store.questionNumber];
  let questionText = questionObject.question;

  console.log(store.questionNumber);


  questionObject.answers.map((a, i)=>{
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
    <button class="ans-button" onClick="checkAnswer(event)">
      Check Answer
    </button>
  </div>`
}

function checkAnswer(e) {
  let correctStringText = "";
  let wrongStringText = "";

  e.preventDefault(); 
  let selectedAnswer = $("input[name='answer']:checked").val();
  let currentCorrectAnswer = store.questions[store.questionNumber].correctAnswer;

  if (selectedAnswer === currentCorrectAnswer) {
    correctStringText = `Your answer is correct! You are a true Vampire Slayer!`;
  } else {
    wrongStringText = `That is incorrect. The correct answer is ${currentCorrectAnswer}.`;
  }
  console.log(correctStringText);
  console.log(wrongStringText);
}

 

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuestion() {
  
};

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//after user submits answer we need to verify if answer is correct. if answer is correct
//tell them in <div> feedback. if answer is incorrect in <div> feedback provide them
//with the correct question. Update question and score counter. 
function handleSubmit() {
  console.log("handleSubmit");
}

//when user hits next, render the next question. we can do this by providing the array index that matches the question number?
function handleNext() {
  console.log("handleNext");
}

function handleStart() {
  console.log("handleStart");
  $(document).ready(function() {
    const splashString = generateSplash(); 
    $('main').html(splashString);
    const quizInterface = generateQuestion();
    console.log('ran "generateQuestion"')
    $('main').html(quizInterface);
  });

} 


function handleQuizApp(){
  generateSplash();
  handleStart();
  renderQuestion();
  handleNext();
  handleSubmit();
};  

handleQuizApp();