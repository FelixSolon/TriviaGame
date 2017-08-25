//I take no responsibility for misspellings.
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
var gameStarted = false;
var questions = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];
var randomNumber = Math.floor(Math.random() * questions.length);
console.log(randomNumber);
var chosenQuestion = (questions[randomNumber]);
function chooseQuestionFirst(){
    var randomNumber = Math.floor(Math.random() * questions.length);
    console.log(randomNumber);
    var chosenQuestion = (questions[randomNumber]);
    $("#questionText").text(chosenQuestion.question);
    $("#startButton").addClass("hidden");
    $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.a[1] +"' id = 'a'><h2 class = 'text-center'>" + chosenQuestion.a[0] + "</h2></button><br>")
    $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.b[1] +"' id = 'b'><h2 class = 'text-center'>" + chosenQuestion.b[0] + "</h2></button><br>")
    $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.c[1] +"' id = 'c'><h2 class = 'text-center'>" + chosenQuestion.c[0] + "</h2></button><br>")
    $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.d[1] +"' id = 'd'><h2 class = 'text-center'>" + chosenQuestion.d[0] + "</h2></button><br>")
    questions.splice(randomNumber, 1);
}

function chooseQuestion(){
    var randomNumber = Math.floor(Math.random() * questions.length);
    console.log(randomNumber);
    var chosenQuestion = (questions[randomNumber]);
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
}

$(document).ready(function() {
    
    $("#startButton").click(function() {
        chooseQuestionFirst();
        /*$("#questionText").text(chosenQuestion.question);
        $("#startButton").addClass("hidden");
        $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.a[1] +"'><h2 class = 'text-center' id = 'a'>" + chosenQuestion.a[0] + "</h2></button><br>")
        $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.b[1] +"'><h2 class = 'text-center' id = 'b'>" + chosenQuestion.b[0] + "</h2></button><br>")
        $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.c[1] +"'><h2 class = 'text-center' id = 'c'>" + chosenQuestion.c[0] + "</h2></button><br>")
        $("#startBox").append("<button class='btn btn-primary btn-block answer" + chosenQuestion.d[1] +"'><h2 class = 'text-center' id = 'd'>" + chosenQuestion.d[0] + "</h2></button><br>")
        questions.splice(randomNumber, 1);*/
    });

    $(document).on("click", ".answerfalse", function(){
        alert("Wrong, Bitch!");
        chooseQuestion();
    });

    $(document).on("click", ".answertrue", function(){
        alert("Correctamundo!");
        chooseQuestion();
    });

});