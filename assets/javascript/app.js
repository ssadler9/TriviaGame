// increment correct answers
var correctAnswers = 0;
// increment incorrect answers
var incorrectAnswers = 0;

// Creating an array for user selections
// Need to verify if correct answer or incorrect answer, then store those in an array
var selections = [];

// 10 questions for user to answer
var questions = [{
        question: "Which player was not part of the Dallas Cowboys Triplets?",
        choices: [" Emmitt Smith ", " Troy Aikman ", " Tony Dorsett ", " Michael Irvin"],
        correctAnswer: 2
    },
    {
        question: "When was the last time the Dallas Cowboys won The Superbowl?",
        choices: [" 1999 ", " 1996 ", " 1994 ", " 1997 "],
        correctAnswer: 1
    },
    {
        question: "Where did Dak Prescott attend college?",
        choices: [" Mississippi State ", " Purdue ", " LSU ", " USC "],
        correctAnswer: 0
    },
    {
        question: "Roger Staubach played which position?",
        choices: [" Running Back ", " Wide Receiver ", " Left Out ", " Quarterback "],
        correctAnswer: 3
    },
    {
        question: "What record did Emmitt Smith set?",
        choices: [" Career Rushing Yards ", " Most Fumbles ", " Fastest 40 ", " Most Rushing Attempts "],
        correctAnswer: 0
    },
    {
        question: "Which team is the Dallas Cowboys mosted hated rival?",
        choices: [" New York Giants ", " Washington Redskins ", " Philadelphia Eagles ", " All of the Above "],
        correctAnswer: 3
    },
    {
        question: "Before the NFC/AFC Split, which team shared Dallas, TX?",
        choices: [" Tennessee Titans ", " Arizona Cardinals ", " Kansas City Chiefs ", " Houston Oilers "],
        correctAnswer: 2
    },
    {
        question: "What franchise is the most valued franchise in all of sports?",
        choices: [" New York Yankees ", " Dallas Cowboys ", " Miami Heat ", " Oakland Raiders "],
        correctAnswer: 1
    },
    {
        question: "What position did Jay Novacek play?",
        choices: [" Quarterback ", " Center ", " Wide Receiver ", " Tight End "],
        correctAnswer: 3
    },
    {
        question: "When will the Dallas Cowboys when their next Superbowl?",
        choices: [" 2017 ", " 2018 ", " 2060 ", " Never Again... "],
        correctAnswer: 1
    },
];

// trackers the user clicks
var userGuess = $('#quiz').click(function (){
			// console.log(userGuess);
			 // need to verify if userGuess is = correctAnswer
			if (userGuess === CorrectAnswer){
				correctAnswers++;
				console.log(correctAnswers);
			}
		});
			


function displayQuestion(index, value) {
	$.each(questions, function (index, value){
		// displays questions to the quiz div box on html
		$('#quiz').append('<p>' + value.question + '</p>' + '<br>');
		// displays the answer choices to the quiz div box on html
		$('#quiz').append('<button>' + value.choices[0] + '</button>' + '<button>' + value.choices[1] + '</button>' + '<button>' + value.choices[2] + '</button>' + '<button>' + value.choices[3] + '</button>' + '<br>' + '<br>');
		// check if user choice is the correct choice
		// then increment correctAnswers
		// else if user choice is incorrect then increment incorrectAnswers
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
        console.log('Game Over');
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


// display end of game screen with reults when time runs out




