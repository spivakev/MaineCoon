"use strict";

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