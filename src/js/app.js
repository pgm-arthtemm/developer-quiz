/**
 * The Main Application
 */

import * as CS from './consts.js';
import * as FETCH from './getData.js';
import * as HOME from './createHomePage.js';
import * as QUIZ from './createQuiz.js';

const app = () =>
{
  // set the app title
  document.title = CS.APP_TITLE;

  // create homepage
  HOME.createHeader();
  HOME.createCategories();
  HOME.createDifficulties();
  HOME.createSlider();
  HOME.createStartButton();

  // caching homepage
  const $categories = document.querySelectorAll('.categories li');
  const $difficulties = document.querySelectorAll('.difficulties li');
  const $startButton = document.querySelector('button');

  // listeners
  $categories[0].classList.add('active');
  $categories.forEach((category) => {
    category.addEventListener('click', () => {
      $categories.forEach((element) => {
        element.classList.remove('active');
      })
      category.classList.add('active');
    });
  });

  $difficulties[0].classList.add('active');
  $difficulties.forEach((difficulty) => {
    difficulty.addEventListener('click', () => {
      $difficulties.forEach((element) => {
        element.classList.remove('active');
      })
      difficulty.classList.add('active');
    })
  });

  $startButton.addEventListener('click', () => {
    const selectedLimit = document.querySelector('.slider').value;
    const selectedCategory = document.querySelector('.categories li.active').innerHTML;
    const selectedDifficulty = document.querySelector('.difficulties li.active').innerHTML;

    FETCH.fetchQuestions(selectedLimit, selectedCategory, selectedDifficulty);
    
    QUIZ.emptyAppContainer();
    QUIZ.beginQuiz();
  })
};

// start the app
app();