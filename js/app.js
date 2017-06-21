/*Меню на мобильнике*/
var navMenu = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMenu.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", function() {
  if ( navMenu.classList.contains("main-nav--closed") ) {
    navMenu.classList.remove("main-nav--closed");
    navMenu.classList.add("main-nav--opened");
  } else {
    navMenu.classList.add("main-nav--closed");
    navMenu.classList.remove("main-nav--opened");
  }
});

/*Модальное окно*/
var btn = document.querySelectorAll(".modal-open");
var modal = document.querySelector(".modal-bg");
var close = document.querySelector(".add-to-cart");

for ( var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal-show");
  })
};

close.addEventListener("click", function(event) {
  event.preventDefault();
  if ( modal.classList.contains("modal-show") ) {
    modal.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if ( modal.classList.contains("modal-show") ) {
      modal.classList.remove("modal-show");
    }
  }
})

