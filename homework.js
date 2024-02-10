import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let quizData = [];

try {
    const tasksData = fs.readFileSync('tasks.json', 'utf-8');
    quizData = JSON.parse(tasksData);
} catch (error) {
    console.log('Error reading task data:', error.message);
    process.exit(1);
}

const startQuiz = () => {
    let userScore = 0;
    let currentIndex = 0;

    const displayScoreAndExit = () => {
        rl.close();
        console.log(`Your final score is ${userScore} out of ${quizData.length}`);
    };

    const displayQuestion = () => {
        if (currentIndex === quizData.length) {
            displayScoreAndExit();
            return;
        }

        const currentTask = quizData[currentIndex];

        rl.question(` ${currentIndex + 1}. ${currentTask.question}\n${currentTask.options.join('\n')}\n Enter Answer: `, (userInput) => {
            const userAnswer = parseInt(userInput) - 1;

            if (userAnswer >= 0 && userAnswer < currentTask.options.length) {
                const isCorrectAnswer = currentTask.answer === userAnswer;

                if (isCorrectAnswer) {
                    console.log('Correct Answer!\n');
                    userScore++;
                } else {
                    console.log(`Wrong answer! The correct answer is: ${currentTask.options[currentTask.answer]} \n`);
                }

                currentIndex++;
                displayQuestion();
            } else {
                console.log('Invalid answer! Enter a number corresponding to the position of your chosen option.\n');
                displayQuestion();
            }
        });
    };

    console.log(`QUIZ\nSelect the correct answer for the following questions:\n`);
    displayQuestion();
};

startQuiz();

