var readlineSync=require('readline-sync');
var chalk=require('chalk');

var questionSet=[{
  question: "Where do I live? ",
  answer: "lucknow"
},
{
  question:"do I work? ",
  answer: "no"
},
{
  question:"Where did I grew up? ",
  answer: "bahraich"
},
{
  question:"My graduation is in which field? ",
  answer: "i.t."
},
{
  question:"Do I love to spend or invest? ",
  answer: "invest"
}];

var questionSet2=[{
question: "What genre of articles do I read? ",
answer: "technology"
},
{
  question:"Do I love cycling or running? ",
  answer:"cycling"
},
{
  question:"Am I a non vegetarian? ",
  answer:"yes"
},
{
  question:"What is my Hobby? ",
  answer: "photography"
}];


var highScore=[
  {
    user: "Mom and Dad",
    score: 9
  },
  {
    user: "Prateesh",
    score: 8
  },
  {
    user: "Prateek",
    score: 7
  },
  {
    user: "Sandeep",
    score: 6
  }
];

function welcome(){
var userName=readlineSync.question(chalk.blue('Hi! May I have your name? \n'));

console.log(chalk.whiteBright.bgBlueBright("Hi! " +userName.toUpperCase() + ". Welcome to do you know Pratyush."));

var userChoice=readlineSync.question("Do you want to play? Enter choice as Yes or No \n");

if(userChoice.toLowerCase()==="yes")
{
  console.log(chalk.whiteBright.bgBlueBright("Please type in your answers.\n"));
  readArray();
  play();
}
else
{
  console.log(chalk.red("I thought I am a good person to know :( :( "));
}
}
var currentScore=0;


function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer)
  {
    console.log(chalk.bgCyan.whiteBright("Woah!You do know me.\n"));
    currentScore++;
  }
  else
  {
    console.log("Don't give up we can still get to know each other :) \n");
    console.log(chalk.greenBright("Correct answer is: " +answer + "\n"));
  }
}

function readArray(){
for(var i=0;i<questionSet.length;i++)
{
  play(questionSet[i].question , questionSet[i].answer);
}

console.log(chalk.magentaBright.bgWhite("Yay! Your score is: "  +currentScore+ "\n"));

if(currentScore>=3)
{
  console.log(chalk.white("Here comes another level! Why? Because I love to let people know about myself. \n"));
  for(var j=0;j<questionSet2.length;j++)
  {
    play(questionSet2[j].question , questionSet2[j].answer);
  }
console.log("Your final score is: " +currentScore);
}
else{
  console.log(chalk.green("Well played Buddy! \n"));
}
highSscore();
process.exit();
}
welcome();



function highSscore(){
  
console.log(chalk.bgYellow.bold("\t\t\t HIGH SCORES "));
console.table(  highScore);

var maximum=highScore[0];
for(let j=1;j<highScore.length;j++)
{
  if(highScore[j] > maximum)
  {
    maximum=highScore[j];
  }
}

console.log(chalk.bgWhite.black('If you see that you have beaten the highscore. Text me the screenshot and i will update the details.'));


}
