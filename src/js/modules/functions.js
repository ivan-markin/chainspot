export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });  
}

export function selectHandler(evt) {
  evt.target.closest('.btn-select').classList.toggle('active');
}

export function newsBlockWidth() {
  const root = document.documentElement;
  const wrapper = document.querySelector('.bridges__cards');  

  if (wrapper) {
    root.style.setProperty('--newsLeftPosition', wrapper.offsetWidth / 2 + "px");  
  }    
}

export const mobileMenuHandler = () => {
	const mobileMenuPopup = document.querySelector('.mobile-menu');

	const openMenu = () => {
		mobileMenuPopup.classList.add('active');
		document.body.classList.add('fixed');
	}

	const closeMenu = () => {
		mobileMenuPopup.classList.remove('active');
		document.body.classList.remove('fixed');
	}

	return {
		open: openMenu,
		close: closeMenu
	}
}

export function popupCloseHandler(evt) {
  if (evt.target.classList.contains('popup')) {
      evt.target.classList.remove('active');    
  }

  if (evt.target.classList.contains('popup__close')) {
      evt.target.closest('.popup').classList.remove('active');
  }
  
  document.body.classList.remove('fixed');
}