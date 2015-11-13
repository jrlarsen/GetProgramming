/* Get Programming with JavaScript
 * Listing 12.07
 * Checking quiz answers
 */

var getQuiz = function () {
  var score = 0,
      qIndex = 0,
      inPlay = true,
      questions,
      next,
      getQuestion,
      checkAnswer,
      submit;
    
  questions = [
    {
      question: "What is the highest mountain in the world?",
      answer: "Everest"
    },
    {
      question: "What is the highest mountain in Scotland?",
      answer: "Ben Nevis"
    }
  ];
  
  next = function () {
    qIndex = qIndex + 1;
    
    if (qIndex >= questions.length) {
      inPlay = false;
      console.log("You have finished the quiz.");
    }
  };
  
  getQuestion = function () {
    if (inPlay) {
      return questions[qIndex].question;
    } else {
      return "You have finished the quiz.";
    }
  };
  
  checkAnswer = function (userAnswer) {
    if (userAnswer === questions[qIndex].answer) {
      console.log("Correct!");
      score = score + 1;
    } else {
      console.log("No, the answer is " + questions[qIndex].answer);
    }
  };
  
  submit = function (userAnswer) {
    var message = "You have finished the quiz.";
    
    if (inPlay) {
      checkAnswer(userAnswer);
      next();
      message = "Your score is " + score + " out of " + qIndex;
    }
      
    return message;
  };
  
  return {
    quizMe: getQuestion,
    submit: submit
  };
};

var quiz = getQuiz();



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Take the quiz, using the quiz.quizMe and
 *    quiz.submit methods.
 *    
 *    > quiz.quizMe()
 *      What is the highest mountain in the world?
 *    > quiz.submit("K2")
 *
 * 3) Add some more questions and answers, run the
 *    program and take the quiz again.
 *
 * CHALLENGE:
 *
 * 4) Add a hint property for each question.
 *
 * 5) Define a getHint function that returns
 *    the hint for the current question.
 *
 * 6) Add a helpMe property to the public interface,
 *    the object returned by getQuiz. The getHint
 *    function should be assigned to the
 *    helpMe property.
 *
 *    return {
 *      quizMe: getQuestion,
 *      submit: submit,
 *      helpMe: getHint
 *    };
 *
 */