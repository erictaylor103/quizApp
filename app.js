function populate() {
    if(quiz.isEnded()) {
        showScores();
        
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Pregunta " + currentQuestionNumber + " of " + quiz.questions.length;
};

function restart(){
    window.location.reload();
}

function showScores() {
    var gameOverHTML = "<h1>Resultado</h1>";
    gameOverHTML += "<h2 id='score'> Respuestas Correctas: " + quiz.score + "</h2>";
    
    gameOverHTML += "<button id='score' onclick='restart()' > Reiniciar Quiz!</button>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Quien creo los cassettes?", ["Bill Gates", "Apple","Phillips Company", "J Balvin"], "Phillips Company"),
    new Question("En que año fue creado el nintendo 1?", ["1984", "1985", "2008", "2020"], "1985"),
    new Question("En que año se crearon las cartas?", ["1840", "2009","1944", "1994"], "1840"),
    new Question("Quien creo la cinta de vídeo?", ["Panasonic", "JVC", "Charles Ginsburg", "Bad Bunny"], "Charles Ginsburg"),
    new Question("Cuando fue creado el disquete?", ["en 1856", "en 1964", "en 1900", "1997"], "en 1964"),
    new Question("Quien creo las cabinas telefónicas?", ["William Fray", "Jeff Bezos","Rafael Pombo", "Toledo"], "William Fray"),
    new Question("Quien creo los mapas?", ["Adam Sandler", "Mark Zuckerberg", "Anaximadro", "Jennifer Rauda"], "Anaximadro")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





