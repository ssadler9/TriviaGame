// increment correct answers
var correctAnswers = 0;
// increment incorrect answers
var incorrectAnswers = 0;
// Creating an array for user selections
var selections = [];
// 10 questions for user to answer
var questions = [{
        question: "Which player was not part of the Dallas Cowboys Triplets?",
        choices: ["Emmitt Smith", "Troy Aikman", "Tony Dorsett", "Michael Irvin"]
        // correct: 2,
    },
    {
        question: "When was the last time the Dallas Cowboys won The Superbowl?",
        choices: ["1999", "1996", "1994", "1997"],
        // correct: 1,
    },
    {
        question: "Where did Dak Prescott attend college?",
        choices: ["Mississippi State", "Purdue", "LSU", "USC"],
        // correct: 0
    },
    {
        question: "Roger Staubach played which position?",
        choices: ["Running Back", "Wide Receiver", "Left Out", "Quarterback"],
        // correct: 3
    },
    {
        question: "What record did Emmitt Smith set?",
        choices: ["Career Rushing Yards", "Most Fumbles", "Fastest 40", "Most Rushing Attempts"],
        // correct: 0
    },
    {
        question: "Which team is the Dallas Cowboys mosted hated rival?",
        choices: ["New York Giants", "Washington Redskins", "Philadelphia Eagles", "All of the Above"],
        // correct: 3
    },
    {
        question: "Before the NFC/AFC Split, which team shared Dallas, TX?",
        choices: ["Tennessee Titans", "Arizona Cardinals", "Kansas City Chiefs", "Houston Oilers"],
        // correct: 2
    },
    {
        question: "What franchise is the most valued franchise in all of sports?",
        choices: ["New York Yankees", "Dallas Cowboys", "Miami Heat", "Oakland Raiders"],
        // correct: 1
    },
    {
        question: "What position did Jay Novacek play?",
        choices: ["Quarterback", "Center", "Wide Receiver", "Tight End"],
        // correct: 3
    },
    {
        question: "When will the Dallas Cowboys when their next Superbowl?",
        choices: ["2017", "2018", "2060", "Never Again..."],
        // correct: 1
    },
];

// display questions on html
function displayQuestion(index, value) {
	$.each(questions, function (index, value){
		console.log(value);
		$('#quiz').append('<p>' + value + '</p>');
	});
};

// timer for the game -- 45 seconds
var timer = 46;
var intervalId;

// makes timer count down at a rate of 1 second
function run() {
    intervalId = setInterval(decrement, 1000);
};

// function shows the timer counting down
function decrement() {
    timer--;
    $('#timer').html('<h2>' + timer + '</h2>');
    // makes game end at 0
    if (timer === 0) {
        alert('Game Over');
        stop();
    }
};
decrement();

// stops the timer
function stop() {
    clearInterval(intervalId);
};

displayQuestion();
run();


// answer bank of correct answers
// answer bank of incorrect answers

// verify if the answer is correct

// display end of game screen with reults when time runs out

// First attempt at Display Question
    // $.each(questions, function(key, element) {
    //     $('#quiz').append('<p>' + element + '</p>' + '<br>');
    // });




// display answers as buttons on html
// function displayAnswers () {
// 	$.each(answers1, function(key, element){
// 		$('#submit').append('<button>' + element + '</button>');
// 	});
// 	$.each(answers2, function(key, element){
// 		$('#submit').append('<button>' + element + '</button>');
// 	});
// 	$.each(answers3, function(key, element){
// 		$('#submit').append('<button>' + element + '</button>');
// 	});
// 	$.each(answers4, function(key, element){
// 		$('#submit').append('<button>' + element + '</button>');
// 	});
// 	$.each(answers5, function(key, element){
// 		$('#submit').append('<button>' + element + '</button>');
// 	});
// 	$.each(answers6, function(key, element){
// 		$('#submit').append('<button>' + element + '</button>');
// 	});
// 	$.each(answers7, function(key, element){
// 		$('#submit').append('<button>' + element + '</button>');
// 	});
// 	$.each(answers8, function(key, element){
// 		$('#submit').append('<button>' + element + '</button>');
// 	});
// 	$.each(answers9, function(key, element){
// 		$('#submit').append('<button>' + element + '</button>');
// 	});
// 	$.each(answers10, function(key, element){
// 		$('#submit').append('<button>' + element + '</button>');
// 	});
// };
// displayAnswers ();


