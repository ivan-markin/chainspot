import * as flsFunctions from "./modules/functions.js";
import smoothscroll from 'smoothscroll-polyfill';
import Swiper, {Navigation} from "swiper";

const sortSelectBtn = document.querySelector('#sortSelectBtn');
const burgerBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuClose = document.querySelector('.mobile-menu__close');
const selectButtons = document.querySelectorAll('.select-button');
const popupCloseButtons = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('.popup');
const selectElems = Array.from(document.querySelectorAll('.select'));
const btnSelectElems = Array.from(document.querySelectorAll('.btn-select'));
const selectArr = selectElems.concat(btnSelectElems);
const chooseTokenBtn = document.querySelector('.choose-token-button');
const moreBtn = document.querySelector('#moreTokensBtn');
const iconCntElems = document.querySelectorAll('.icon-cnt');

flsFunctions.isWebp();
smoothscroll.polyfill();
flsFunctions.newsBlockWidth();

const swiper = new Swiper('.most-pop-slider', {	
	modules: [Navigation],
	spaceBetween: 40,	
	slidesPerView: 'auto',	
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// sortSelectBtn.addEventListener('click', flsFunctions.selectHandler);
window.addEventListener('resize', flsFunctions.newsBlockWidth);
burgerBtn.addEventListener('click', flsFunctions.mobileMenuHandler().open);
mobileMenuClose.addEventListener('click', flsFunctions.mobileMenuHandler().close);

if (selectButtons) {
	selectButtons.forEach(el => {
		el.addEventListener('click', flsFunctions.selectHandler);
	})
} 

if (chooseTokenBtn) {
	chooseTokenBtn.addEventListener('click', (evt) => {
		const popup = document.querySelector('.top-up-popup');
	
		evt.preventDefault();
		popup.classList.add('active');
		document.body.classList.add('fixed');
	})
}

if (moreBtn) {
  moreBtn.addEventListener('click', (evt) => {
    const popup = evt.target.closest('.popup').querySelector('.switch-network-popup');
    popup.style.height = '100vh';
    popup.classList.add('active');
  })
}

popups.forEach(el => {
	el.addEventListener('click', flsFunctions.popupCloseHandler);
})

popupCloseButtons.forEach(el => {
	el.addEventListener('click', flsFunctions.popupCloseHandler);
})

document.addEventListener('keydown', (evt) => {  	
	selectArr.forEach(el => {
		if (evt.key === 'Escape') el.classList.remove('active');		
	})
	
	popups.forEach(el => {
		if (evt.key === 'Escape') el.classList.remove('active');
		document.body.classList.remove('fixed');
  })        
})

iconCntElems.forEach(el => {
	const imgSrc = el.querySelector('.token-cnt__image').src;
	const iconBgEl = el.querySelector('.token-cnt__icon-bg');
	iconBgEl.style.backgroundImage = `url('${imgSrc}')`;
})

// document.addEventListener('click', (evt) => {
// 	if (!evt.target.classList.contains('select') || !evt.target.closest('.select') || 
// 			!evt.target.classList.contains('btn-select') || !evt.target.closest('.btn-select')) {
		
// 		selectArr.forEach(el => el.classList.remove('active'));
// 	}
// })
