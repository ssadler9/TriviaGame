// timer for the game -- 45 seconds
var timer = 41;
// setinterval id
var intervalId;
// increment correct answers
var correctAnswers = 0;
// increment incorrect answers
var incorrectAnswers = 0;



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
        choices: [" 2018 ", " 2019 ", " 2060 ", " Never Again... "],
        correctAnswer: 0
    },
];		

function displayQuestion(index, value) {
    $.each(questions, function(index, value) {
        // displays questions to the quiz div box on html
        $('#quiz').append('<p>' + value.question + '</p>' + '<br>');
        // displays the answer choices to the quiz div box on html
        for (var i = 0; i < value.choices.length; i++) {
            // choices[i];
            // displays choices as buttons
            var answer = $('<button>').text(value.choices[i]).val(i);
            // adds value to correct answers for tracking
            if(i === value.correctAnswer){
            	answer.attr("answer", "dog");
            }
            // adds class to separate buttons from questions
            answer.addClass("answerButtons");
            $('#quiz').append(answer);
        };
    });
// tracks to clicks and will increment if correctAnswer else incorrectAnswer
	$('.answerButtons').on('click', function() {
		if($(this).attr("answer") === undefined){
			// console.log("wrong");
			incorrectAnswers++;
			$('#incorrect').html('<p>Wrong Answers: ' + incorrectAnswers + '</p>');
		} else {
			// console.log("right");
			correctAnswers++;
			$('#correct').html('<p>Correct Answers: ' + correctAnswers + '</p>');
		}
	 });
};

// ends game if submit button clicked
$('#submit').on('click', function(){
    swal({
  		title: "Results",
  		text: "Correct: " + correctAnswers + " Incorrect: " + incorrectAnswers + " ",
  		imageUrl: "https://www.purposegames.com/images/games/background/75/75769.png",
  		confirmButtonText: "Cool"
	});
	stop();
});
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
        stop();
        swal({
  			title: "Results",
  			text: "Correct: " + correctAnswers + " Incorrect: " + incorrectAnswers + " ",
  			imageUrl: "https://www.purposegames.com/images/games/background/75/75769.png",
  			confirmButtonText: "Cool"
	});

    } else if ('#timer' !== 0) {
    	$('#results').hide();
    };
};
// stops the timer
function stop() {
    clearInterval(intervalId);
};
// display end of game screen with reults when time runs out

displayQuestion();
decrement();
run();








