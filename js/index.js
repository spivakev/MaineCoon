"use strict";

// Анимация для блока "Вопрос - Ответ". Смена стилей кнопки развернуть ("+"/"-") при клике.
const questionToggle = function () {
  let questionList = document.querySelectorAll('.faq__question');

  for (let i = 0; i < questionList.length; i++) {
    let question = questionList[i];

    question.addEventListener('click', function () {
      if (question.classList.contains('faq__question_open')) {
        question.classList.remove('faq__question_open');
      } else {
        question.classList.add('faq__question_open');
      }
    })
  }
}

// Поиск индекса слайда, который отображается на данный момент
const findCurrentSlideIndex = function (slideList) {
  for (let i = 0; i < slideList.length; i++) {
    if (!slideList[i].classList.contains('hide')) {
      return i;
    }
  }
}

// По нажатию на стрелку ">" в слайдере прячем текущий слайд и показываем следующий. Для слайдеров, где только картинки. Например, в секции pets.
const showNextSlide = function (section) {
  let nextButton = section.querySelector('.slider__btn_next');
  let slideList = section.querySelectorAll('.slider__slide');

  nextButton.addEventListener('click', function () {
    //ищем текущий слайд
    let currentIndex = findCurrentSlideIndex(slideList);
    let currentSlide = slideList[currentIndex];

    //находим следующий слайд
    let nextIndex;
    let nextSlide;

    if (currentIndex === slideList.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }
    nextSlide = slideList[nextIndex];

    //скрываем текущий слайд
    currentSlide.classList.add('hide');

    //показываем новый слайд
    nextSlide.classList.remove('hide');
  })
}

// По нажатию на стрелку "<" в слайдере прячем текущий слайд и показываем предыдущий. Для слайдеров, где только картинки. Например, в секции pets.
const showPrevSlide = function (section) {
  let prevButton = section.querySelector('.slider__btn_prev');
  let slideList = section.querySelectorAll('.slider__slide');

  prevButton.addEventListener('click', function () {
    //ищем текущий слайд
    let currentIndex = findCurrentSlideIndex(slideList);
    let currentSlide = slideList[currentIndex];

    //находим предыдущий слайд
    let prevIndex;
    let prevSlide;

    if (currentIndex === 0) {
      prevIndex = slideList.length - 1;
    } else {
      prevIndex = currentIndex - 1;
    }
    prevSlide = slideList[prevIndex];

    //скрываем текущий слайд
    currentSlide.classList.add('hide');

    //показываем новый слайд
    prevSlide.classList.remove('hide');
  })
}

// По нажатию на стрелку ">" в слайдере прячем текущий слайд и описание под ним и показываем следующий слайд и его описание. (Для секций team и reviews).
const showNextSlideAndDescription = function (section) {
  let nextButton = section.querySelector('.slider__btn_next');
  let slideList = section.querySelectorAll('.slider__slide');
  let slideDescriptionList = section.querySelectorAll('.slide-description');

  nextButton.addEventListener('click', function () {
    // находим индекс текущего элемента
    let currentIndex = findCurrentSlideIndex(slideList);

    // находим индекс следующего элемента
    let nextIndex;

    if (currentIndex === slideList.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }

    let currentSlide = slideList[currentIndex];
    let nextSlide = slideList[nextIndex];

    // прячем текущий слайд и описание
    let currentSlideDescription = slideDescriptionList[currentIndex];
    currentSlide.classList.add('hide');
    currentSlideDescription.classList.add('hide');

    // показываем следующий слайд и описание
    let nextSlideDescription = slideDescriptionList[nextIndex];
    nextSlide.classList.remove('hide');
    nextSlideDescription.classList.remove('hide');
  })
}

// По нажатию на стрелку "<" в слайдере прячем текущий слайд и описание под ним и показываем предыдущий слайд и его описание. (Для секций team и reviews).
const showPrevSlideAndDescription = function (section) {
  let prevButton = section.querySelector('.slider__btn_prev');
  let slideList = section.querySelectorAll('.slider__slide');
  let slideDescriptionList = section.querySelectorAll('.slide-description');

  prevButton.addEventListener('click', function () {
    // находим индекс текущего элемента
    let currentIndex = findCurrentSlideIndex(slideList);

    // находим индекс следующего элемента
    let prevIndex;

    if (currentIndex === 0) {
      prevIndex = slideList.length - 1;
    } else {
      prevIndex = currentIndex - 1;
    }

    let currentSlide = slideList[currentIndex];
    let prevSlide = slideList[prevIndex];

    // прячем текущий слайд и описание
    let currentSlideDescription = slideDescriptionList[currentIndex];
    currentSlide.classList.add('hide');
    currentSlideDescription.classList.add('hide');

    // показываем следующий слайд и описание
    let prevSlideDescription = slideDescriptionList[prevIndex];
    prevSlide.classList.remove('hide');
    prevSlideDescription.classList.remove('hide');
  })
}

let petSection = document.querySelector('.pets');
let teamSection = document.querySelector('.team');

questionToggle();
showNextSlide(petSection);
showPrevSlide(petSection);

showNextSlideAndDescription(teamSection);
showPrevSlideAndDescription(teamSection);