// console.log('Ваша оценка - 83 балла\nОтзыв по пунктам ТЗ:\nЧастично выполненные пункты:\n1) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна\nОтзыв: Выполнено частично');

// Burger Menu

const menuBtn = document.querySelector('.menu_icon');
const menu = document.querySelector('.menu__container');
const body = document.querySelector('body');
menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
})
menu.addEventListener('click', function() {
    if (menuBtn.classList.contains('active')) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('lock');
    }
});

// Service actions

function clickedButton() { //Удержание кнопки активной, недопущение трёх активных кнопок (первый вариант исполнения)
  // const allAtiveButtons = document.querySelectorAll('.service-chooser__button_clicked');
  // if (allAtiveButtons.length >= 2) {
  //     const allAtiveButtons = document.body.querySelectorAll('.service-chooser__button_clicked');
  //     for (let item of allAtiveButtons) {
  //       item.classList.remove('service-chooser__button_clicked');
  //     }
  //   }
  this.classList.toggle('service-chooser__button_clicked');
};

function bluringCards() { //Перебор активных кнопок и отключение блюра связанных карт
  const allAtiveButtons = document.querySelectorAll(".service-chooser__button_clicked");
  if (allAtiveButtons.length > 0) {
    for (card of allServiceCards) card.classList.add("blur");
    for (button of allAtiveButtons) {
      if (button.classList.contains("button-gard")) {
        for (card of allServiceCards) {
          if (card.classList.contains("garden")) card.classList.remove("blur");
        }
      } else if (button.classList.contains("button-lawn")) {
        for (card of allServiceCards) {
          if (card.classList.contains("lawn")) card.classList.remove("blur");
        }
      } else if (button.classList.contains("button-plant")) {
        for (card of allServiceCards) {
          if (card.classList.contains("planting"))
            card.classList.remove("blur");
        }
      }
    }
  } else {
    for (card of allServiceCards) card.classList.remove("blur");
  }
}

function deActivateThirdBtn() { //недопущение трёх активных кнопок (второй вариант исполнения)
  const allAtiveButtons = document.querySelectorAll('.service-chooser__button_clicked');
  if (allAtiveButtons.length > 1) {
    let unActiveBtn = document.body.querySelector("button.service-chooser__button:not(.service-chooser__button_clicked)");
    unActiveBtn.disabled = true;
  } else {
    for (button of serviceButtons) {
      button.disabled = false;
    }
  }
}

const serviceButtons = document.querySelectorAll('.service-chooser__button');
for (button of serviceButtons) button.addEventListener('click', clickedButton);
for (button of serviceButtons) button.addEventListener('click', bluringCards);
for (button of serviceButtons) button.addEventListener('click', deActivateThirdBtn);
const allServiceCards = document.getElementsByClassName('service-items__image');


// Prices actions

function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll("details[open]").forEach((el) => {
      if (el === event.target) {
        return;
      }
      el.open = false;
    });
  }
}

document.querySelectorAll("details").forEach((el) => el.addEventListener("toggle", onToggle));

// Contact actions

const addressBase = {   //База для подстановки в плашку с выбранным городом
  canandaigua: {'second-title__city': 'Canandaigua, NY', 'second-title__phone': '+1 585 393 0001', 'second-title__address': '151 Charlotte Street'},
  newyork: {'second-title__city': 'New York City', 'second-title__phone': '+1 212 456 0002', 'second-title__address': '9 East 91st Street'},
  yonkers: {'second-title__city': 'Yonkers, NY', 'second-title__phone': '+1 914 678 0003', 'second-title__address': '511 Warburton Ave'},
  sherrill: {'second-title__city': 'Sherrill, NY', 'second-title__phone': '+1 315 908 0004', 'second-title__address': '14 WEST Noyes BLVD'},
};
const locatChooser = document.body.querySelector('.location-chooser__main');
locatChooser.addEventListener('click', chooserStyle);
const towns = document.body.querySelectorAll('.location-chooser__opened p');
for (town of towns) {
  town.addEventListener('click', chosingTown);
  town.textContent = addressBase[town.classList.value]['second-title__city'];
};

function chooserStyle() { //Активация/деактивация выпадающего списка
  document.body.querySelector('.location-chooser_current').classList.add('hidden');
  locatChooser.classList.toggle('_active');
  document.body.querySelector('.location-chooser__opened').classList.toggle('hidden');
}

function chosingTown() {  //Убираем выпадающий список, плюс заполняем плашку данными из базы
  document.body.querySelector('.location-chooser__opened').classList.toggle('hidden');
  locatChooser.classList.toggle('_active');
  document.body.querySelector('.location-chooser_current').classList.remove('hidden');
  locatChooser.firstChild.textContent = this.textContent;
  const cityFromClass = this.classList.value;
  document.querySelector('.second-title__city').textContent = addressBase[cityFromClass]['second-title__city'];
  document.querySelector('.second-title__phone').textContent = addressBase[cityFromClass]['second-title__phone'];
  document.querySelector('.second-title__address').textContent = addressBase[cityFromClass]['second-title__address'];
  document.body.querySelector('.call-us').href = 'tel:'+ addressBase[cityFromClass]['second-title__phone'];
  if (document.documentElement.clientWidth < 400) document.body.querySelector('.contacts-container__woman').classList.add('hidden');
}