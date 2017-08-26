// 10 questions for user to answer
var questions = {
    question1: "Which player was not part of the Dallas Cowboys Triplets?",
	question2: "When was the last time the Dallas Cowboys won The Superbowl?",
    question3: "Where did Dak Prescott attend college?",
    question4: "Roger Staubach played which position?",
    question5: "What record did Emmitt Smith set?",
    question6: "Which team is the Dallas Cowboys mosted hated rival?",
    question7: "Before the NFC/AFC Split, which team shared Dallas, TX?",
    question8: "What franchise is the most valued franchise in all of sports?",
    question9: "What position did Jay Novacek play?",
    question10: "When will the Dallas Cowboys when their next Superbowl?",
};
console.log(questions.question6);
// answer bank
var answers1={ 
			    a:"Emmitt Smith", 
				b:"Troy Aikman", 
				c:"Tony Dorsett", 
				d:"Michael Irvin",
			};
			console.log(answers1);
var answers2={ 
				a:"1999",
				b:"1996",
				c:"1994",
				d:"1997",
			};
			console.log(answers2);
var answers3={
				a:"Mississippi State University",
				b:"Purdue",
				c:"LSU",
				d:"USC",
			};
			console.log(answers3);
var answers4={ 
				a:"Running Back",
				b:"Wide Receiver",
				c:"Left-out",
				d:"Quarterback",
			};
			console.log(answers4);
var answers5={ 
				a:"Career Rushing Yards",
				b:"Most Fumbles",
				c:"Fastest 40",
				d:"Most Rushing Attempts",
			};
			console.log(answers5);
var answers6={ 
				a:"Ney York Giants",
				b:"Washington Redskins",
				c:"Philadelphia Eagles",
				d:"All of the Above",
			};
			console.log(answers6);
var answers7={ 
				a:"Kansas City Chiefs",
				b:"Tennessee Titans", 
				c:"New York Giants", 
				d:"Arizona Cardinals",
			};
			console.log(answers7);
var answers8={
				a:"New York Yankees",
				b:"Miami Heat",
				c:"Dallas Cowboys",
				d:"Oakland Raiders",
			};
			console.log(answers8);
var answers9={ 
				a:"Quarterback",
				b:"Tight End",
				c:"Center",
				d:"Middle-Linebacker"
			};
			console.log(answers9);
var answers10={
				a:"2017",
				b:"2018",
				c:"2060",
				d:"Never",
			};
			console.log(answers10);

// answer bank of correct answers
// answer bank of incorrect answers
// timer for the game -- 45 seconds
// verify if the answer is correct

// increment correct answers
var correctAnswers = 0;
// increment incorrect answers
var incorrectAnswers = 0;
// display end of game screen with reults when time runs out