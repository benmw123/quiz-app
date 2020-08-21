/**
 * Example store structure
 */
const store = {
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

function generateTemplate() {
  console.log("generateTemplate");
  var template = $('<div class = js-template>'
                  +'<div class = "question">'
                  +'<h2>How big of a fan are you?</h2>'
                  +'</div>'
                  +'<div class = "answers"></div>'
                  +'<div class = "button-wrap">'
                  +'<button id="submit">Submit</button>'
                  +'<button id="start">Start</button>'
                  +'<button id="next">Next</button>'
                  +'<div class = "feedback"></div>'
                  +'</div>'
                  +'</div>');
    template.appendTo("main");
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuestion() {
  console.log("renderQuestion");
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleSubmit() {
  console.log("handleSubmit");
}


function handleNext() {
  console.log("handleNext");
}

function handleStart() {
  console.log("handleStart");

} 


function handleQuizApp(){
  generateTemplate();
  handleStart();
  renderQuestion();
  handleNext();
  handleSubmit();
};  

handleQuizApp();