import * as CS from './consts.js';

export const createHeader = () => {
  const homepageTitle = document.createElement('h1');
  homepageTitle.innerHTML = 'DevQuiz';

  CS.HEADER.append(homepageTitle);
}

export const createCategories = () => {
  const categoriesDiv = document.createElement('div');
  categoriesDiv.className = 'categories';

  const categoriesTitle = document.createElement('h2');
  categoriesTitle.append('Category');

  const categoriesList = document.createElement('ul');

  CS.APP_CONTAINER.append(categoriesDiv);
  categoriesDiv.append(categoriesTitle, categoriesList);

  for (let category of CS.CATEGORIES) {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-id', category);
    listItem.innerHTML = category;
    categoriesList.append(listItem);
  }
}

export const createDifficulties = () => {
  const difficultiesDiv = document.createElement('div');
  difficultiesDiv.className = 'difficulties';

  const difficultiesTitle = document.createElement('h2');
  difficultiesTitle.append('Difficulty');

  const difficultiesList = document.createElement('ul');

  difficultiesDiv.append(difficultiesTitle, difficultiesList);
  CS.APP_CONTAINER.append(difficultiesDiv);

  for (let difficulty of CS.DIFFICULTIES) {
    const listItem = document.createElement('li');
    listItem.textContent = difficulty;
    listItem.setAttribute('data-id', difficulty);
    difficultiesList.append(listItem);
  }
}

export const createSlider = () => {
  const amountSliderDiv = document.createElement('div');
  amountSliderDiv.className = 'amount-slider';

  const amountSliderInput = document.createElement('input');
  amountSliderInput.className = 'slider';
  amountSliderInput.type = 'range';
  amountSliderInput.min = 1;
  amountSliderInput.max = 15;
  
  const amountSliderValue = document.createElement('h2');
  amountSliderValue.innerHTML = 15;

  const amountSliderTitle = document.createElement('h2');
  amountSliderTitle.innerHTML = 'Questions: ';

  amountSliderInput.oninput = function () {
    amountSliderValue.innerHTML = this.value;
  }

  amountSliderDiv.append(amountSliderTitle, amountSliderValue, amountSliderInput)
  CS.APP_CONTAINER.append(amountSliderDiv);
}

export const createStartButton = () => {
  const startButton = document.createElement('button');
  startButton.innerHTML = 'Start';
  startButton.className = 'start-btn';

  CS.APP_CONTAINER.append(startButton);
}