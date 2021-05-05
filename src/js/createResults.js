import * as CS from './consts.js';

export const createResultScreen = (finalScores, score, index) => {

  CS.APP_CONTAINER.innerHTML = '';
  CS.HEADER.innerHTML = '';
  const homepageTitle = document.createElement('h1');
  homepageTitle.innerHTML = 'DevQuiz';

  CS.HEADER.append(homepageTitle);

  const result = document.createElement('span');
  result.className = 'final-score';
  result.innerHTML = `Score: ${score} / ${index}`;

  CS.HEADER.append(result);

  const resultsDiv = document.createElement('div');
  resultsDiv.className = 'results-div';
  
  finalScores.forEach(q => {
    const resultQuestion = document.createElement('div');
    resultQuestion.className = 'result-question-div';

    const questionTitle = document.createElement('h2');
    questionTitle.className = 'question-title';
    questionTitle.innerHTML = q.question;

    resultQuestion.append(questionTitle);

    const yourAnswer = document.createElement('p');
    if (q.selected_answer === q.right_answer) {
      yourAnswer.className = 'correct-answer';
      yourAnswer.innerHTML = q.selected_answer;
      resultQuestion.append(yourAnswer);
    } else {
      yourAnswer.className = 'wrong-answer';
      const rightAnswer = document.createElement('p');
      rightAnswer.className = 'solution-answer';
      rightAnswer.innerHTML = q.right_answer;
      yourAnswer.innerHTML = q.selected_answer;
      resultQuestion.append(yourAnswer);
      resultQuestion.append(rightAnswer);
    }
    resultsDiv.append(resultQuestion)

  });
  CS.APP_CONTAINER.append(resultsDiv);
}