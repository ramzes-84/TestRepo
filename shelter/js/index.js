console.log('Если ничего не упустил, выполнены все пункты по третьей части');

// Object with data for Cards and Popup --------------------------------------------------

const petsJson = [
    {
      "name": "Jennifer",
      "img": "../shelter/assets/img/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../shelter/assets/img/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../shelter/assets/img/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../shelter/assets/img/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../shelter/assets/img/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../shelter/assets/img/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../shelter/assets/img/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../shelter/assets/img/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
];

// Slider ----------------------------------------------------------------

function calcCardsToSlideOnStart() {  // Считаем, сколько карточек должно быть в слайде
    if (window.innerWidth >= 1000) cardsToSlide = 3;
    if (window.innerWidth < 1000 && window.innerWidth >= 640) cardsToSlide = 2;
    if (window.innerWidth < 640) cardsToSlide = 1;
};
function generateSliderOrder() { //Создаём порядок карточек на текущей и следующей странице
    while (sliderOrder.size < (cardsToSlide * 2)) {
        let randomNum = Math.floor(Math.random() * 8);
        sliderOrder.add(randomNum);
    }
};
function createSliderCards(slides) {
    let sliderOrderArr = [...sliderOrder];
    sliderContainer.innerHTML = '';
    for (let i = 0; i < slides; i++) {
        let card = document.createElement('div');
        card.className = 'card';
        let img = document.createElement('img');
        img.className = "card__img";
        img.src = petsJson[sliderOrderArr[0]]["img"];
        card.append(img);
        let textBlock = document.createElement('div');
        textBlock.className = 'card__name';
        let name = document.createElement('p');
        name.textContent = petsJson[sliderOrderArr[0]]["name"];
        let button = document.createElement('button');
        button.className = 'card__btn georgia_400';
        button.textContent = 'Learn more';
        textBlock.append(name, button);
        card.append(textBlock);
        sliderContainer.append(card);
        sliderOrderArr.shift();
    };
    sliderOrder = new Set(sliderOrderArr);
    generateSliderOrder();
    addListenersToCards();
};
function prevSlide() {
    removeBlock();
    if (lastMove == undefined) {
        prevSetOfCards = sliderContainer.innerHTML;
        setTimeout(createSliderCards, 300, cardsToSlide);
    } else if (lastMove === 'back') {
        prevSetOfCards = sliderContainer.innerHTML;
        setTimeout(createSliderCards, 300, cardsToSlide);
    } else if (lastMove === 'forw') {
        setTimeout(easyPeasyLemonSqueezy, 300)
    }
    lastMove = 'back';
    setTimeout(addBlock, 500);
};
function nextSlide() {
    removeBlock();
    if (lastMove === undefined) {
        prevSetOfCards = sliderContainer.innerHTML;
        setTimeout(createSliderCards, 300, cardsToSlide);
    } else if (lastMove === 'forw') {
        prevSetOfCards = sliderContainer.innerHTML;
        setTimeout(createSliderCards, 300, cardsToSlide);
    } else if (lastMove === 'back') {
        setTimeout(easyPeasyLemonSqueezy, 300)
    }
    lastMove = 'forw';
    setTimeout(addBlock, 500);
};
function calcWindowWidthForSlider() {
    let currCardsToSlide;
    if (window.innerWidth >= 1000) currCardsToSlide = 3;
    if (window.innerWidth < 1000 && window.innerWidth >= 640) currCardsToSlide = 2;
    if (window.innerWidth < 640) currCardsToSlide = 1;
    if (currCardsToSlide !== cardsToSlide) {
        cardsToSlide = currCardsToSlide;
        createSliderCards(cardsToSlide);
    }
};
function removeBlock() {
    sliderContainer.classList.add('remove');
};
function addBlock() {
    sliderContainer.classList.remove('remove');
};
function easyPeasyLemonSqueezy() {
    let tempVar = sliderContainer.innerHTML;
    sliderContainer.innerHTML = prevSetOfCards;
    prevSetOfCards = tempVar;
}

const isMainPage = document.location.pathname.includes('index');
const sliderContainer = document.body.querySelector('.slider__content');
const bttnBack = document.body.querySelector('.slider__arr_back');
const bttnForw = document.body.querySelector('.slider__arr_forw');

let cardsToSlide;
let lastMove; // 'forv' если ход был вперёд, 'back' если назад
let prevSetOfCards; // Хранит предыдущий набор карточек в слайде
let sliderOrder = new Set;

if (isMainPage) {
    bttnBack.addEventListener('click', prevSlide);
    bttnForw.addEventListener('click', nextSlide);
    window.addEventListener('resize', calcWindowWidthForSlider);
    calcCardsToSlideOnStart();
    generateSliderOrder();
    createSliderCards(cardsToSlide);
};

// Pagination on Pets page -----------------------------------------------

function calcCardsToPageOnStart() {
    if (window.innerWidth >= 900) cardsToPage = 8; // Считаем, сколько карточек должно быть на странице
    if (window.innerWidth < 900 && window.innerWidth >= 660) cardsToPage = 6;
    if (window.innerWidth < 660 && window.innerWidth >= 450) cardsToPage = 4;
    if (window.innerWidth < 450) cardsToPage = 3;
};
function generatePageOrder() { //Создаём порядок карточек на каждой странице (основан на 1 массиве со случайным порядком всех 48 карточек)
    while (paginationOrder.length < 49) {
        let tempSet = new Set;
        while (tempSet.size < 8) {
            let randomNum = Math.floor(Math.random() * 8);
            tempSet.add(randomNum);
        };
        [...tempSet].forEach(element => paginationOrder.push(element));
    }
};
function createPage(page) { // Основан на 1 массиве в paginationOrder со случайным порядком всех 48 карточек
    for (let i = (((page - 1) * cardsToPage) + 1); i <= (page * cardsToPage); i++) {
        let card = document.createElement('div');
        card.className = 'card _pets-page';
        let img = document.createElement('img');
        img.className = "card__img";
        img.src = petsJson[paginationOrder[i]]["img"];
        card.append(img);
        let textBlock = document.createElement('div');
        textBlock.className = 'card__name';
        let name = document.createElement('p');
        name.textContent = petsJson[paginationOrder[i]]["name"];
        let button = document.createElement('button');
        button.className = 'card__btn georgia_400';
        button.textContent = 'Learn more';
        textBlock.append(name, button);
        card.append(textBlock);
        cardsContainer.append(card);
    }
    addListenersToCards();
    bttnShowCurrPage.textContent = currPage;
    bttnNext.classList.remove('not-avail');
    bttnEnd.classList.remove('not-avail');
};
function addListenersToCards() { // Вешаем листенеры для попапа на карточки
    const petsCards = document.querySelectorAll('.card');
    for (item of petsCards) {
        item.addEventListener('click', showPopup);
    };
};
function createNextPage() {
    if (currPage < (48 / cardsToPage - 1)) {
        currPage += 1;
        cardsContainer.innerHTML = '';
        createPage(currPage);
        bttnShowCurrPage.textContent = currPage;
        bttnBack.classList.remove('not-avail');
        bttnStart.classList.remove('not-avail');
        bttnStart.addEventListener('click', createFirstPage);
        bttnBack.addEventListener('click', createPrevPage);
    } else if (currPage = (48 / cardsToPage - 1)) createLastPage();
};
function createLastPage() {
    if (currPage < (48 / cardsToPage)) {
        currPage = 48 / cardsToPage;
        cardsContainer.innerHTML = '';
        createPage(currPage);
        bttnShowCurrPage.textContent = currPage;
        bttnBack.classList.remove('not-avail');
        bttnStart.classList.remove('not-avail');
        bttnNext.removeEventListener('click', createNextPage);
        bttnEnd.removeEventListener('click', createLastPage);
        bttnNext.classList.add('not-avail');
        bttnEnd.classList.add('not-avail');
        bttnStart.addEventListener('click', createFirstPage);
        bttnBack.addEventListener('click', createPrevPage);
    }
};
function createPrevPage() {
    if (currPage > 2) {
        currPage -= 1;
        cardsContainer.innerHTML = '';
        createPage(currPage);
        bttnShowCurrPage.textContent = currPage;
        bttnNext.classList.remove('not-avail');
        bttnEnd.classList.remove('not-avail');
        bttnNext.addEventListener('click', createNextPage);
        bttnEnd.addEventListener('click', createLastPage);
    } else if (currPage = 2) createFirstPage();
};
function createFirstPage() {
    if (currPage > 1) {
        currPage = 1;
        cardsContainer.innerHTML = '';
        createPage(currPage);
        bttnShowCurrPage.textContent = currPage;
        bttnBack.classList.add('not-avail');
        bttnStart.classList.add('not-avail');
        bttnNext.classList.remove('not-avail');
        bttnEnd.classList.remove('not-avail');
        bttnNext.addEventListener('click', createNextPage);
        bttnEnd.addEventListener('click', createLastPage);
    }
};
function calcWindowWidth() {
    let currCardsToPage;
    if (window.innerWidth >= 900) currCardsToPage = 8;
    if (window.innerWidth < 900 && window.innerWidth >= 660) currCardsToPage = 6;
    if (window.innerWidth < 660 && window.innerWidth >= 450) currCardsToPage = 4;
    if (window.innerWidth < 450) currCardsToPage = 3;
    if (currCardsToPage !== cardsToPage) {
        cardsToPage = currCardsToPage;
        currPage = 1;
        cardsContainer.innerHTML = '';
        createPage(currPage);
    };
    bttnNext.addEventListener('click', createNextPage);
    bttnEnd.addEventListener('click', createLastPage);
};

const paginationOrder = ['empty'];
const bttnStart = document.body.querySelector('.slider__arr_start');
const bttnNext = document.body.querySelector('.slider__arr_next');
const bttnEnd = document.body.querySelector('.slider__arr_end');
const bttnShowCurrPage = document.body.querySelector('.slider__arr_page');
const cardsContainer = document.querySelector('.slider__content._pets-page');

let currPage = 1;
let cardsToPage;

if (!isMainPage) {
    bttnNext.addEventListener('click', createNextPage);
    bttnEnd.addEventListener('click', createLastPage);
    window.addEventListener('resize', calcWindowWidth);
    calcCardsToPageOnStart();
    generatePageOrder(); //Создаём порядок карточек на каждой странице
    createPage(currPage);
};

// Burger Menu --------------------------------------------------

function closeBurger() {
    if (menuBtn.classList.contains('active')) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        menuBlackout.classList.remove('active');
        body.classList.remove('lock');
    }
};

const menuBtn = document.querySelector('.menu_icon');
const menu = document.querySelector('.menu__container');
const body = document.querySelector('body');
const menuBlackout = document.querySelector('.menu__blackout');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    menuBlackout.classList.toggle('active');
    body.classList.toggle('lock');
});
menu.addEventListener('click', closeBurger);
menuBlackout.addEventListener('click', closeBurger);

// Mark menu item --------------------------------------------------

function markAtiveMenuItem() {
    for (let item of menuItems) {
        item.classList.remove('clicked');
    }
    this.classList.toggle('clicked');
};

const menuItems = document.querySelectorAll('.menu__item');

for (let item of menuItems) {
    item.addEventListener('click', markAtiveMenuItem);
};

// Popup --------------------------------------------------

function closePopup() {
    if (event.target === this) {
        popupWindow.classList.add('hide');
        body.classList.remove('lock');
    }
};
function closePopupOnX() {
    popupWindow.classList.add('hide');
    body.classList.remove('lock');
};
function showPopup() {
    body.classList.add('lock');
    popupWindow.classList.remove('hide');
    let currentPet;
    let petName = this.querySelector('.card__name p').textContent; // Jennifer
    for (let item of petsJson) {
        if (item['name'] === petName) currentPet = item;
    }
    let popupName = document.querySelector('.popup__name');
    let popupType = document.querySelector('.popup__type');
    let popupDesc = document.querySelector('.popup__desc');
    let popupImg = document.querySelector('.popup__img');
    let popupAge = document.querySelector('.popup__age');
    let popupIno = document.querySelector('.popup__ino');
    let popupDis = document.querySelector('.popup__dis');
    let popupPar = document.querySelector('.popup__par');
    popupName.textContent = petName;
    popupImg.src = currentPet["img"];
    popupType.textContent = `${currentPet['type']} - ${currentPet['breed']}`;
    popupDesc.textContent = currentPet['description'];
    popupAge.textContent = currentPet['age'];
    popupIno.textContent = (currentPet['inoculations'].length > 1) ? currentPet['inoculations'].join(', ') : currentPet['inoculations'];
    popupDis.textContent = (currentPet['diseases'].length > 1) ? currentPet['diseases'].join(', ') : currentPet['diseases'];
    popupPar.textContent = (currentPet['parasites'].length > 1) ? currentPet['parasites'].join(', ') : currentPet['parasites'];
};

const closePopupBtn = document.querySelector('.popup__close-btn');
const popupWindow = document.querySelector('.popup__bgrnd');

closePopupBtn.addEventListener('click', closePopupOnX);
popupWindow.addEventListener('click', closePopup);