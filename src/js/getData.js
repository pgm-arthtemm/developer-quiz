import * as CS from './consts.js';
import { showQuestion } from './createQuiz.js';

export const fetchQuestions = async (limit, categories, difficulty) => {
  const response = await fetch(CS.API_LINK + `&limit=${limit}${categories == 'All' ? `&categories=` : `&category=`}${categories}&difficulty=${difficulty}`);
  const data = await response.json();
  showQuestion(data);
};