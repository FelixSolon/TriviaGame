//all the trivia questions.
var question0 = {
    question : "Star Wars was directed by: "
    , a : ["Stanley Kubrick", false]
    , b : ["Francis Ford Coppola", false]
    , c : ["Steven Spielberg", false]
    , d : ["George Lucas", true]
};

var question1 = {
    question : "Which actor played the captain of the Enterprise in Star Trek: the Next Generation?"
    , a : ["William Shatner", false]
    , b : ["Patrick Stewart", true]
    , c : ["Scott Bakula", false]
    , d : ["Kate Mulgrew", false]
};

var question2 = {
    question : "In 20,000 Leagues Under the Sea, the Nautilus is captained by which character?"
    , a : ["Nemo", true]
    , b : ["Ahab", false]
    , c : ["Jack Sparrow", false]
    , d : ["Guybrush Threepwood", false]
};

var question3 = {
    question : "In the Hitchhiker's Guide to the Galaxy, why do the Vogons want to destroy Earth?"
    , a : ["They were terrified of mice taking over the galaxy.", false]
    , b : ["Earthlings insulted their poetry.", false]
    , c : ["A misunderstanding due to a sick Babelfish", false]
    , d : ["Earth is in the way of a long-planned hyperspace bypass", true]
};

var question4 = {
    question : "In the movie Alien, the only survivor is: "
    , a : ["Ripley", true]
    , b : ["Dallas", false]
    , c : ["Ash", false]
    , d : ["Parker", false]
};

var question5 = {
    question : "The pilot who destroyed the second Death Star in the original Star Wars trilogy was: "
    , a : ["Jabba the Hutt", false]
    , b : ["Han Solo", false]
    , c : ["Luke Skywalker", false]
    , d : ["Lando Calrissian", true]
};

var question6 = {
    question : "In Asimov's Foundation series, who developed the science of Psychohistory?"
    , a : ["Hari Seldon", true]
    , b : ["Emmett Brown", false]
    , c : ["Zefram Cochrane", false]
    , d : ["Richard Hannay", false]
};

var question7 = {
    question : "The title of Ray Bradbury's Fahrenheit 451 comes from the combustion temperature of what substance?"
    , a : ["Paper", true]
    , b : ["Money", false]
    , c : ["Gasoline", false]
    , d : ["Human Remains", false]
};

var question8 = {
    question : "In Paul Verhoven's take on Starship Troopers, what does service guarantee?"
    , a : ["Three square meals a day", false]
    , b : ["Death", false]
    , c : ["Citizenship", true]
    , d : ["Nothing at all", false]
};

var question9 = {
    question : "At the start of George Orwell's 1984, what time are the clocks striking?"
    , a : ["Nine", false]
    , b : ["Five", false]
    , c : ["Noon", false]
    , d : ["Thirteen", true]
};

//declare all my variables
var restartTimer;
var correctAnswers = 0;
var wrongAnswers = 0;
var timedOut = 0;
var gameStarted = false;
var questions = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];
//to hold onto the question array to reset the game
var questionsReset = questions;
var randomNumber = Math.floor(Math.random() * questions.length);

//setting this to the format it should have later so JS doesn't do something weird
var chosenQuestion = (questions[randomNumber]);

//this block deals with all the timing issues
//variable name is odd because I'm recycling code and I don't feel like breaking things in new and interesting ways
var intervalId
var time = 5
function count(){
    time--;
    $("#timer").text(time + " seconds remaining");
    console.log("time remaining is: " + time);
    if (time < 0){
        clearTimeout(intervalId);
        var correctAnswer = $('button.answertrue').text();
        $("#startBox").empty();
        $("#startBox").append("<h1 class = 'text-center'>Out of Time!</h1><h1 class = 'text-center'>The correct answer was " + correctAnswer);
        timedOut+=1
        restartTimer = setInterval(chooseQuestionFirst, 3000)
    }
};
intervalId;



function chooseQuestionFirst(){
    clearTimeout(restartTimer); 
    var randomNumber = Math.floor(Math.random() * questions.length);
    console.log(randomNumber);
    chosenQuestion = (questions[randomNumber]);
    $("#startButton").addClass("hidden");
    $("#startBox").empty();
    $("#startBox").append("<h1 class='text-center' id='questionText'>" + chosenQuestion.question + "</h1>")
    $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.a[1] +"' id = 'a'><h2 class = 'text-center'>" + chosenQuestion.a[0] + "</h2></button><br>")
    $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.b[1] +"' id = 'b'><h2 class = 'text-center'>" + chosenQuestion.b[0] + "</h2></button><br>")
    $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.c[1] +"' id = 'c'><h2 class = 'text-center'>" + chosenQuestion.c[0] + "</h2></button><br>")
    $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.d[1] +"' id = 'd'><h2 class = 'text-center'>" + chosenQuestion.d[0] + "</h2></button><br>")
    $("#startBox").append("<h1 id='timer'>30 seconds remaining</h1>")
    questions.splice(randomNumber, 1);
    time = 5;
    intervalId = setInterval(count, 1000);
}

function chooseQuestion(){
    randomNumber = Math.floor(Math.random() * questions.length);
    chosenQuestion = (questions[randomNumber]);
    $("#questionText").text(chosenQuestion.question);
    $(".answerfalse").removeClass("answerfalse");
    $(".answertrue").removeClass("answertrue");
    //So I orginally tried to call the array in the .addClass function below, but it wouldn't work.
    //Is that something that's even possible? I did the below as a work around, and it's probably better anyhow
    //I just want to make sure I know what's going on.
    var answerA = "answer"+chosenQuestion.a[1];
    var answerB = "answer"+chosenQuestion.b[1];
    var answerC = "answer"+chosenQuestion.c[1];
    var answerD = "answer"+chosenQuestion.d[1];
    $("#a").html("<h2>" + chosenQuestion.a[0] + "</h2>");
    $("#a").addClass(answerA);
    $("#b").html("<h2>" + chosenQuestion.b[0] + "</h2>");
    $("#b").addClass(answerB);
    $("#c").html("<h2>" + chosenQuestion.c[0] + "</h2>");
    $("#c").addClass(answerC);
    $("#d").html("<h2>" + chosenQuestion.d[0] + "</h2>");
    $("#d").addClass(answerD);
    questions.splice(randomNumber, 1);
    console.log("Questions.length is " + questions.length);
    time = 30;
    $("#timer").text(time + " seconds remaining");
    intervalId
}

function showEndScreen(){
    $("#startBox").empty();
    $("#startBox").append("<h1>You got " + correctAnswers + " correct answers!</h1>")
    $("#startBox").append("<h1>You got " + wrongAnswers + " wrong answers!</h1>")
    $("#startBox").append("<h1>You got " + timedOut + " timed out questions!</h1>")
}
    
$(document).ready(function() {
    console.log("Questions.length is " + questions.length);
    $("#startButton").click(function() {
        console.log("Questions.length is " + questions.length);
        chooseQuestionFirst();
        console.log("Questions.length is " + questions.length);
        console.log("This is working 2: " + $("button.answertrue").text())
        console.log("This is working 1: " + $("answertrue").text())
        /*$("#questionText").text(chosenQuestion.question);
        $("#startButton").addClass("hidden");
        $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.a[1] +"'><h2 class = 'text-center' id = 'a'>" + chosenQuestion.a[0] + "</h2></button><br>")
        $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.b[1] +"'><h2 class = 'text-center' id = 'b'>" + chosenQuestion.b[0] + "</h2></button><br>")
        $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.c[1] +"'><h2 class = 'text-center' id = 'c'>" + chosenQuestion.c[0] + "</h2></button><br>")
        $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.d[1] +"'><h2 class = 'text-center' id = 'd'>" + chosenQuestion.d[0] + "</h2></button><br>")
        questions.splice(randomNumber, 1);*/
    });

    $(document).on("click", ".answerfalse", function(){
        clearTimeout(intervalId);
        alert("Wrong, Bitch!");
        var correctAnswer = $('button.answertrue').text();
        $("#startBox").empty();
        $("#startBox").append("<h1>Wrong!</h1><h1>The correct answer was " + correctAnswer + "</h1>");
        delayButtonAlert = setTimeout(function() {
          $("#startBox").empty();
          chooseQuestionFirst();

        }, 5000);
/*        chooseQuestion();*/
        wrongAnswers+=1;
        if(questions.length === 0){
            alert("You're out of questions!");
            showEndScreen();
        }
    });

    $(document).on("click", ".answertrue", function(){
        clearTimeout(intervalId);
        alert("Correctamundo!");
        chooseQuestion();
        correctAnswers+=1;
        if(questions.length === 0){
            alert("You're out of questions!")
            showEndScreen();
        }
    });

});