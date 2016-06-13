var between = require('./between');

var qIndex = 0;

var questions = [
    { question: "7 x 8", answer: "56" },
    { question: "12 x 12", answer: "144" },
    { question: "5 x 6", answer: "30" },
    { question: "9 x 3", answer: "27" }
];

var getQuestion = function () {
    qIndex = between(0, questions.length - 1);
    return questions[qIndex].question;
};

var checkAnswer = function (userAnswer) {
    if (userAnswer === questions[qIndex].answer) {
        return "Correct!";
    } else {
        return "No, the answer is " + questions[qIndex].answer;
    }
};

module.exports = {
    quizMe: getQuestion,
    submit: checkAnswer
};