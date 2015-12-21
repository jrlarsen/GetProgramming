/* Get Programming with JavaScript
 * Listing 11.12
 * Hiding the questions and answers
 */

var getQuiz = function () {
    var qIndex = 0;
    var questions = [
        {
            question: "What is the highest mountain in the world?",
            answer: "Everest"
        },
        {
            question: "What is the highest mountain in Scotland?",
            answer: "Ben Nevis"
        },
        {
            question: "How many munros are in Scotland?",
            answer: "284"
        }
    ];

    return {
        quizMe : function () {
            return questions[qIndex].question;
        },

        showMe : function () {
            return questions[qIndex].answer;
        },

        next : function () {
            qIndex = qIndex + 1;
            return "Ok";
        }
    };
};

var quiz = getQuiz();



/* Further Adventures
 *
 * Run the program. Then:
 *
 * 1) At the prompt, type 'quiz' and press enter.
 *
 * The quiz object has three methods,
 * next, quizMe and showMe.
 *
 * 2) At the prompt, type:
 *
 *    > quiz.questions
 *    > quiz.qIndex
 *
 * Those properties do not exist on the quiz object.
 *
 * 3) Add a new method to the returned object, showIndex,
 *    that returns the value of qIndex.
 *
 * 4) Test the new method.
 *
 */