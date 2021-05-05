import * as CS from './consts.js';
import { createResultScreen } from './createResults.js';

export const emptyAppContainer = () => {
  CS.APP_CONTAINER.innerHTML = '';
}

export const setCounter = () => {
  const countdown = document.createElement('span');
  countdown.className = 'countdown';

  let timeLeft = 15;
  let counter = setInterval(() => {
    CS.APP_CONTAINER.append(countdown);
    countdown.innerHTML = timeLeft;
    timeLeft -= 1;

    if (timeLeft <= 0) {
      clearInterval(counter);
    }
  }, 1000);
}

export const beginQuiz = () => {
  const beginQuizDiv = document.createElement('div');
  beginQuizDiv.className = 'begin-quiz-div';
  const beginQuizTitle = document.createElement('h2');
  beginQuizTitle.className = 'begin-quiz-title';
  beginQuizTitle.innerHTML = 'Quiz starting!';

  const beginQuizText = document.createElement('p');
  const beginQuizText2 = document.createElement('p');
  const beginQuizText3 = document.createElement('p');
  
  beginQuizText.innerHTML = 'You have 15 seconds for every question';
  beginQuizText2.innerHTML = 'Carefully read the question and answers';
  beginQuizText3.innerHTML = 'Good luck, have fun!';
  
  setCounter();

  beginQuizDiv.append(beginQuizTitle, beginQuizText, beginQuizText2, beginQuizText3)
  CS.APP_CONTAINER.append(beginQuizDiv);
}

export const showQuestion = (quizQuestions) => {
  let score = 0;
  let index = 0;
  let scores = [];

  let interval = setInterval(() => {
    CS.APP_CONTAINER.innerHTML = '';

    setCounter();

    index += 1;
    const quizDiv = document.createElement('div');
    quizDiv.className = 'quiz-div';

    const quizQuestion = document.createElement('h2');
    quizQuestion.innerHTML = quizQuestions[index - 1].question;
    const question = quizQuestions[index - 1].question;

    const answerList = document.createElement('ul');

    const rightAnswerKey = quizQuestions[index - 1].correct_answer;
    const rightAnswer = quizQuestions[index - 1].answers[rightAnswerKey];

    console.log(rightAnswer);

    for (const items in quizQuestions[index - 1].answers) {
      if (quizQuestions[index - 1].answers[items] !== null) {
        const answerItem = document.createElement('li');
        answerItem.innerHTML = quizQuestions[index - 1].answers[items];
        answerItem.setAttribute('data-id', quizQuestions[index - 1].answers[items])
        answerList.append(answerItem);
      }
    };
    
    quizDiv.append(quizQuestion, answerList);
    CS.APP_CONTAINER.append(quizDiv);
    const $quizAnswers = document.querySelectorAll('.quiz-div li');
    $quizAnswers.forEach((answer) => {
      answer.addEventListener('click', () => {
        $quizAnswers.forEach((element) => {
          element.classList.remove('active');
        })
        answer.classList.add('active');
      })
    });
    if (index === quizQuestions.length) {
      clearInterval(interval);
      setTimeout(() => {
          // Go to createResults.js
          createResultScreen(scores ,score, index);
      }, 15000);
    }

    setTimeout(() => {
      let $answer = document.querySelector('.quiz-div li.active');

      if ($answer !== null) {
        $answer = $answer.dataset.id;
        if ($answer === rightAnswer) {
          score += 1;
        }
      } else {
        $answer = 'no answer';
      }

      scores.push(
        {
          question: question,
          selected_answer: $answer,
          right_answer: rightAnswer
        }
      );
    },15000)
  }, 16000);
}