var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];

    console.log(questionAndAnswer.question);

    questionAndAnswer.answers.forEach(
        function (answer, i) {
            console.log(options[i] + " - " + answer);
        }
    );
};

var question1 = {
    question : "What is the capital of France?",
    answers : [
        "Bordeaux",
        "F",
        "Paris",
        "Brussels"
    ],
    correctAnswer : "Paris"
};

displayQuestion(question1);