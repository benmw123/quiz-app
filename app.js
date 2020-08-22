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
                  +'<button id="submit" class="hide">Submit</button>'
                  +'<button id="start">Start</button>'
                  +'<button id="next" class="hide">Next</button>'
                  +'</div>'
                  +'<div class = "question-counter-box"></div>'
                  +'<div class = "feedback"></div>'
                  +'</div>');
    template.appendTo("main");
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

//when user hits start. start button is hidden and submit and next button is 
// shown. question div shows first question. answer div shows form showing first answers.
// counter div shows the score and question counter. 
function renderQuestion() {
  console.log("renderQuestion");
    $('#start').on('click', function() {
      $(this).hide();
      $("#submit").toggleClass("hide");
      $(".question h2").text("What is buffy's sister's name?");
      $(".answers").html("<form>"
                        +"<ol type='A'>"
                        +"<li>"
                        +"<input type=radio name=choice value=0>"
                        +"Carla"
                        +"</li>"
                        +"<li>"
                        +"<input type=radio name=choice value=1>"
                        +"Willow"
                        +"</li>"
                        +"<li>"
                        +"<input type=radio name=choice value=2>"
                        +"Dawn"
                        +"</li>"
                        +"<li>"
                        +"<input type=radio name=choice value=3>"
                        +"Jessica"
                        +"</li>"
                        +"</ol>"
                        +"</form>"
                        ); 
      $(".question-counter-box").html(
                        "<p>Question:</p> <p>Score:</p>");                  
    });
    
  

}

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

} 


function handleQuizApp(){
  generateTemplate();
  handleStart();
  renderQuestion();
  handleNext();
  handleSubmit();
};  

handleQuizApp();