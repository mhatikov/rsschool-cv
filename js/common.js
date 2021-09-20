"use strict"
/*--------------------- */
/*Checkout type device */
/*--------------------*/
const isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  
if(isMobile.any()){
    document.body.classList.add('_touch')
}else{
    document.body.classList.add('_pc')
}

//Menu scripts
const menuIcon = document.querySelector('.menu__menu-icon');
const menuWrapper = document.querySelector('.menu__wrapper');
const menuLinks = document.querySelectorAll('.menu__item-link[data-goto]')
if(menuLinks.length > 0){
    menuLinks.forEach((link)=>{
        link.addEventListener('click', menuLinkClick)
    });
}

function addActiveClass(){
    menuIcon.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    menuWrapper.classList.toggle('_active');
}
function menuLinkClick(event){
    const menuLink = event.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        if(menuIcon.classList.contains('_active')){
            menuIcon.classList.remove('_active');
            document.body.classList.remove('_lock');
            menuWrapper.classList.remove('_active');
        }
        event.preventDefault();
    }
}

if(menuIcon && menuWrapper){
    menuIcon.addEventListener('click', addActiveClass);
}