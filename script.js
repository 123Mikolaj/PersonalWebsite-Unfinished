const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modals = document.querySelectorAll('.modal');

const openModal = function (modalType) {
  const modalContent = document.querySelector(`#${modalType}-content`);
  modalContent.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modals.forEach(modal => {
    modal.classList.add('hidden');
  });
  overlay.classList.add('hidden');
};

const showModalHandler = function (event) {
  const modalType = event.target.dataset.modalType;
  openModal(modalType);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', showModalHandler);
}

//WYKLUCZ
const nonScrollableLinks = document.querySelectorAll('.cbutton a');

nonScrollableLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.stopPropagation(); // Zapobiegaj dalszemu przechwytywaniu zdarzenia kliknięcia
  });
});


for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener('click', closeModal);
}

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModal();
  }
});

document.addEventListener('click', function (e) {
  if (!overlay.contains(e.target) && !btnsOpenModal.contains(e.target)) {
    closeModal();
  }
});


// Pobierz elementy o identyfikatorach 'tilt-left' i 'tilt-right'
let elLeft = document.getElementById('tilt-left');
let elRight = document.getElementById('tilt-right');

// Pobierz wysokość i szerokość elementu 'tilt-left'
const heightLeft = elLeft.clientHeight;
const widthLeft = elLeft.clientWidth;

// Pobierz wysokość i szerokość elementu 'tilt-right'
const heightRight = elRight.clientHeight;
const widthRight = elRight.clientWidth;

// Dodaj nasłuchiwanie na zdarzenie 'mousemove' dla elementu 'tilt-left'
elLeft.addEventListener('mousemove', handleMoveLeft);

// Definiuj funkcję 'handleMoveLeft' dla elementu 'tilt-left'
function handleMoveLeft(e) {
  // Pobierz pozycję kursora myszy względem elementu 'tilt-left'
  const xValLeft = e.layerX;
  const yValLeft = e.layerY;

  // Oblicz wartość obrotu wzdłuż osi Y dla elementu 'tilt-left'
  const yRotationLeft = 15 * ((xValLeft - widthLeft / 2) / widthLeft);

  // Oblicz wartość obrotu wzdłuż osi X dla elementu 'tilt-left'
  const xRotationLeft = -15 * ((yValLeft - heightLeft / 2) / heightLeft);

  // Wygeneruj ciąg znaków dla właściwości transformacji CSS dla elementu 'tilt-left'
  const stringLeft = `perspective(500px) scale(1.1) rotateX(${xRotationLeft}deg) rotateY(${yRotationLeft}deg)`;

  // Zastosuj obliczoną transformację dla elementu 'tilt-left'
  elLeft.style.transform = stringLeft;
}

// Dodaj nasłuchiwanie na zdarzenie 'mouseout' dla elementu 'tilt-left', aby usunąć obroty
elLeft.addEventListener('mouseout', function () {
  elLeft.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
});

// Dodaj nasłuchiwanie na zdarzenie 'mousemove' dla elementu 'tilt-right'
elRight.addEventListener('mousemove', handleMoveRight);

// Definiuj funkcję 'handleMoveRight' dla elementu 'tilt-right'
function handleMoveRight(e) {
  // Pobierz pozycję kursora myszy względem elementu 'tilt-right'
  const xValRight = e.layerX;
  const yValRight = e.layerY;

  // Oblicz wartość obrotu wzdłuż osi Y dla elementu 'tilt-right'
  const yRotationRight = 15 * ((xValRight - widthRight / 2) / widthRight);

  // Oblicz wartość obrotu wzdłuż osi X dla elementu 'tilt-right'
  const xRotationRight = -15 * ((yValRight - heightRight / 2) / heightRight);

  // Wygeneruj ciąg znaków dla właściwości transformacji CSS dla elementu 'tilt-right'
  const stringRight = `perspective(500px) scale(1.1) rotateX(${xRotationRight}deg) rotateY(${yRotationRight}deg)`;

  // Zastosuj obliczoną transformację dla elementu 'tilt-right'
  elRight.style.transform = stringRight;
}

// Dodaj nasłuchiwanie na zdarzenie 'mouseout' dla elementu 'tilt-right', aby usunąć obroty
elRight.addEventListener('mouseout', function () {
  elRight.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
});

//NAVBAR HIDE
// Pobierz przyciski z menu
const skillsBtn = document.getElementById('skillsBtn');
const educationBtn = document.getElementById('educationBtn');

// Pobierz sekcje z treści
const skillsSection = document.getElementById('tilt-left');
const educationSection = document.getElementById('tilt-right');

// Ukryj sekcje
educationSection.style.display = 'none';

// Dodaj obsługę zdarzeń dla przycisków
skillsBtn.addEventListener('click', () => {
  skillsSection.style.display = 'block';
  educationSection.style.display = 'none';
});

educationBtn.addEventListener('click', () => {
  skillsSection.style.display = 'none';
  educationSection.style.display = 'block';
});

//NAVBAR
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const navToggle = document.getElementById('nav-toggle');

// Smooth scrolling tylko po kliknięciu linku navbar z krótkim opóźnieniem
navLinks.forEach(function (navLink) {
  navLink.addEventListener('click', function (e) {
    e.preventDefault(); // Zapobiega domyślnej akcji kliknięcia (przewinięcie do kotwicy)

    const targetId = this.getAttribute('href'); // Pobierz identyfikator kotwicy z atrybutu href
    const targetElement = document.querySelector(targetId); // Pobierz element docelowy na podstawie identyfikatora

    if (targetElement) {
      setTimeout(() => { // Dodaj opóźnienie
        targetElement.scrollIntoView({
          behavior: 'smooth' // Smooth scrolling
        });
      }, 150); // Krótkie opóźnienie 150ms
    }

    // Schowaj menu po kliknięciu na link
    navToggle.checked = false;
  });
});


//Hamburger
const body = document.body;

// Obsługa kliknięcia hamburgera
navToggle.addEventListener('click', function () {
  const isNavOpen = this.checked;
  // Po kliknięciu hamburgera, zamykamy menu, jeśli jest otwarte
  if (!isNavOpen) {
    navToggle.checked = false;
    body.style.overflow = 'auto'; // Umożliwienie przewijania strony
  } else {
    body.style.overflow = 'hidden'; // Zablokowanie przewijania strony
  }
});







//REFRESH
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};










