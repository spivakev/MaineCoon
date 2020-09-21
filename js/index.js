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

/* А если все спрятаны?
Или больше 1 показаны?
Добавить обработку этих случаев (?)
Выводить хотя бы в консоль предупреждение!
 */

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


let petSection = document.querySelector('.pets');

questionToggle();
showNextSlide(petSection);
showPrevSlide(petSection);