var quizQuestions = [
    {
        question: "Sarah is currently completing her MPhil researching:",
        answers: {
            a: 'Bacterial replication',
            b: 'Cardiovascular diseases',
            c: 'Fibrillin'
        },
        correctAnswer: 'c'
    },
    {
        question: "Sarah is a postgraduate at:",
        answers: {
            a: 'James Cook University',
            b: 'Central Queensland University',
            c: 'University of Sunshine Coast'
        },
        correctAnswer: 'a'
    },
    {
        question: "Sarah completed her undergraduate degree with two majors:",
        answers: {
            a: 'Chemistry and physics',
            b: 'Chemistry and molecular biology',
            c: 'Chemistry and zoology'
        },
        correctAnswer: 'b'
    },
    {
        question: "Sarah is excited about a future career in:",
        answers: {
            a: 'Education',
            b: 'Research',
            c: 'Both and more!'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var sumbitButton = document.getElementById('submit');

generateQuiz(quizQuestions, quizContainer, resultsContainer, sumbitButton);

function generateQuiz(quizQuestions, quizContainer, resultsContainer, sumbitButton){

    function buildQuiz(quizQuestions, quizContainer){
        var output = [];
        var answers;
        for(var i=0; i<quizQuestions.length; i++){
            answers = [];
            for(letter in quizQuestions[i].answers){
                answers.push(
                    '<label>'
                    +'<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ": "
                    + quizQuestions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="questions">' + quizQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }

    function showResults(quizQuestions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var numCorrect = 0;
        var userAnswer = '';
        for(var i=0; i<quizQuestions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if(userAnswer===quizQuestions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }
        if (numCorrect === 0) {
            resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
        }
        if (numCorrect === 1) {
            resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
        }
        if (numCorrect === 2) {
            resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
        }
        if (numCorrect === 3) {
            resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Sarah pretty well!";
        }
        if (numCorrect === 4) {
            resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Sarah so well!";
        }
    }

    buildQuiz(quizQuestions, quizContainer);

    sumbitButton.onclick = function() {
        showResults(quizQuestions, quizContainer, resultsContainer);
    }
}