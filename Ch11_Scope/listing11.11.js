/* Get Programming with JavaScript
 * Listing 11.11
 * Improving the quiz app
 */

var quiz = {
    questions: [
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
    ],

    qIndex: 0,

    quizMe: function () {
        return quiz.questions[quiz.qIndex].question;
    },

    showMe: function () {
        return quiz.questions[quiz.qIndex].answer;
    },

    next: function () {
        quiz.qIndex = quiz.qIndex + 1;
        return "Ok";
    }
};



/* Further Adventures
 *
 * Run the program. Then:
 *
 * 1) Test the  quiz methods at the console.
 *    e.g.
 *    > quiz.quizMe()
 *      What is the highest mountain in the world?
 *    > quiz.showMe()
 *      Everest
 *    > quiz.next()
 *      Ok
 *    etc.
 *
 * 2) Access the questions and qIndex properties.
 *    e.g.
 *    > quiz.qIndex
 *    > quiz.questions
 *    > quiz.questions[0]
 *    > quiz.questions[1].answer
 *
 * All of the properties and methods are accessible
 * on the console.
 */