function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

/* <МЕНЮ>============================================================================================================ */

// Активная ссылка

var selector, elems, makeActive;

selector = '.menu__list li';

elems = document.querySelectorAll(selector);

makeActive = function () {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('_btn-actH');

    this.classList.add('_btn-actH');
};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);


    /* <БУРГЕР> */

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuOpac = document.querySelector('.header__opacity-bg');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		menuOpac.classList.toggle('_opacity-bg-act');
	});
}


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
				menuOpac.classList.remove('_opacity-bg-act');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}


/* <МЕНЮ END>============================================================================================================ */
// function detectClick(element) {
//   element.classList.toggle("highlight");
// }


/* Смена блоков цветов курток */

function blueBlack(){
  document.getElementById("jacketBlack").style.display = "block";
  document.getElementById("jacketBlue").style.display = "none";
};
function blueRed(){
  document.getElementById("jacketRed").style.display = "block";
  document.getElementById("jacketBlue").style.display = "none";
};
function blackBlue(){
  document.getElementById("jacketBlue").style.display = "block";
  document.getElementById("jacketBlack").style.display = "none";
};
function blackRed(){
  document.getElementById("jacketRed").style.display = "block";
  document.getElementById("jacketBlack").style.display = "none";
};
function redBlue(){
  document.getElementById("jacketBlue").style.display = "block";
  document.getElementById("jacketRed").style.display = "none";
};
function redBlack(){
  document.getElementById("jacketBlack").style.display = "block";
  document.getElementById("jacketRed").style.display = "none";
};

/* Смена блоков по названиям меню */

function aboutUs(){
  document.getElementById("about-usS").style.display = "flex";
  document.getElementById("pageE").style.display = "none";
  document.getElementById("contactT").style.display = "none";
  document.getElementById("shopP").style.display = "none";
};
function Page(){
  document.getElementById("about-usS").style.display = "none";
  document.getElementById("shopP").style.display = "none";
  document.getElementById("pageE").style.display = "flex";
  document.getElementById("jacketBlack").style.display = "none";
  document.getElementById("jacketBlue").style.display = "block";
  document.getElementById("jacketRed").style.display = "none";
  document.getElementById("contactT").style.display = "none";
};
function shop(){
  document.getElementById("shopP").style.display = "flex";
  document.getElementById("pageE").style.display = "none";
  document.getElementById("about-usS").style.display = "none";
  document.getElementById("contactT").style.display = "none";
};
function contact(){
  document.getElementById("shopP").style.display = "none";
  document.getElementById("pageE").style.display = "none";
  document.getElementById("about-usS").style.display = "none";
  document.getElementById("contactT").style.display = "flex";
};
// function dwnld(){
//   document.getElementById("dwnlD").style.display = "block";
//   };


/* Форма заказа======================================================= */
$(document).ready(function(){
  //Скрыть PopUp при загрузке страницы
  PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
  $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
  $("#popup1").hide();
};

/* Смена цвета курток -----------------------------*/
function formJacketBlue(){
  document.getElementById("jacketsFormBlack").style.display = "none";
  document.getElementById("jacketsFormRed").style.display = "none";
  document.getElementById("jacketsFormBlue").style.display = "block";
};
function formJacketBlack(){
  document.getElementById("jacketsFormBlack").style.display = "block";
  document.getElementById("jacketsFormRed").style.display = "none";
  document.getElementById("jacketsFormBlue").style.display = "none";
};
function formJacketRed(){
  document.getElementById("jacketsFormBlack").style.display = "none";
  document.getElementById("jacketsFormRed").style.display = "block";
  document.getElementById("jacketsFormBlue").style.display = "none";
};
/* Смена цвета курток END -----------------------------*/
/* Форма заказа END=================================================== */
