import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const arrFaq = [
  {
    question: 'What programming languages are most often used in your project?',
    answer:
      'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
  {
    question: 'What are the deadlines for the&nbsp;project?',
    answer:
      'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    question: 'What payment methods do you&nbsp;accept?',
    answer:
      'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
  },
  {
    question: 'How can I contact you?',
    answer:
      'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
  {
    question: 'Do you provide advice or&nbsp;support?',
    answer:
      'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    question:
      'What does the process of developing a software product look like from idea to implementation?',
    answer:
      'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
  },
];

function createMarkup({ question, answer }) {
  return `<li class="faq-item">
<div class="ac">
    <div class="ac-wrapper">
      <h3 class="ac-header">${question}</h3>
      <button class="ac-trigger" type="button">
        <svg class="icon-arrow-down" width="20" height="20">
          <use href="./img/sprite.svg#icon-arrow-down"></use>
        </svg>
        <svg class="icon-arrow-up" width="20" height="20">
          <use href="./img/sprite.svg#icon-arrow-up"></use>
        </svg>
      </button>
    </div>
    <div class="ac-panel">
      <p class="ac-text">${answer}</p>
    </div>
  </div>
  </li>`;
}

function renderFAQ() {
  const faqList = document.querySelector('.accordion-container');
  const faqMarkup = arrFaq.map(createMarkup).join('');

  faqList.innerHTML = faqMarkup;
}

renderFAQ();

const acTriggers = document.querySelectorAll('.ac-trigger');

acTriggers.forEach(trigger => {
  trigger.addEventListener('click', event => {
    const iconArrowDown = event.currentTarget.querySelector('.icon-arrow-down');
    const iconArrowUp = event.currentTarget.querySelector('.icon-arrow-up');
    const acPanel = event.currentTarget
      .closest('.ac')
      .querySelector('.ac-panel');

    if (acPanel.classList.contains('is-active')) {
      iconArrowDown.style.display = 'block';
      iconArrowUp.style.display = 'none';
    } else {
      iconArrowDown.style.display = 'none';
      iconArrowUp.style.display = 'block';
    }
    acPanel.classList.toggle('is-active');
  });
});

const accordion = new Accordion('.accordion-container');
