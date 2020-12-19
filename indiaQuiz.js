const chalk = require('chalk');
const readline = require('readline-sync');

console.log(chalk.yellow("Lets Check do you know history Of INDIA ;-)"));

var userName = readline.question(chalk.magenta("Enter your name: "));

console.log(chalk.cyan(`\nWelcome ${chalk.green(userName)} in INDIA quiz`));
console.log(chalk.cyan("Lets Start the quiz...\n"));

var score = 0;

const highScoreDb = [
    {
        userName : "Rahul",
        highScore: 2
    }
]

//Play Function
function play(quetion, answer, a, b, c, d) {
    
    const quetionColor = chalk.redBright;
    const rightColor = chalk.greenBright;
    const wrongColor = chalk.keyword('orange');
    console.log(quetionColor(quetion));
    console.log(chalk.yellowBright(`\n1. ${a}\n2. ${b}\n3. ${c}\n4. ${d}\n`));
    var userAnswer = readline.question(chalk.blueBright("Enter your answer: "));

    if (Number(userAnswer) === answer) {
        console.log(rightColor("Woo hoo!! Right :)"));
        score += 1;
    } else {
        console.log(wrongColor("Ohh! Sorry its Wrong :("));
    }

    console.log(chalk.yellowBright(`Current Score: ${score}`));
    console.log(chalk.dim("-------------------------------------\n"));
}

//Array of ojects
var quetionsAndAnswers = [
    {
        question: "When india got its Independence?",
        answer: 3,
        a: "15 August 1957",
        b: "26 Agust 1947",
        c: "15 August 1947",
        d: "26 January 1950"
    },
    {
        question: "When India declared as Republic? ",
        answer: 4,
        a: "15 August 1957",
        b: "26 Agust 1947",
        c: "15 August 1947",
        d: "26 January 1950"
    },
    {
        question: "Who was the first Prime Minister of India? ",
        answer: 2,
        a: "Mahatma Gandhi",
        b: "Pandit Jawaharlal Neharu",
        c: "Dr. B. R. Ambedakar",
        d: "Vallabhbhai Patel"
    },
    {
        question: "When did the Kargil War happened? ",
        answer: 4,
        a: "1962",
        b: "1965",
        c: "1972",
        d: "1999"
    },
    {
        question: "When India won its first cricket world cup? ",
        answer: 1,
        a: "1983",
        b: "1973",
        c: "2007",
        d: "2011"
    }
];

quetionsAndAnswers.forEach(qna => {
    play(qna.question, qna.answer, qna.a, qna.b, qna.c, qna.d);
})  

console.log(chalk.blue(`YAY!! ${chalk.green(userName)} you Scored: ${chalk.yellow(score)}`));

function isItAHighScore(score) {
    let isScoredHigh = false;

    highScoreDb.forEach(user => {
        if (score >= user.highScore) {
            isScoredHigh = true;
        }
    });

    return isScoredHigh;
}

if (isItAHighScore(score)) {
    console.log(chalk.cyanBright("Hey!! Congratulations you achived High Score :)")); 
    console.log(chalk.gray("Please send screenshot of this to save your achivement."));    
}

if (score > 3) {
    console.log(chalk.magentaBright("Thats great you know about India ;)"));
} else {
    console.log(chalk.yellow("You need to google about India's history ;)"));
}
