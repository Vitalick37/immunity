// JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger').toggleClass('active');
		$('.header__menu').toggleClass('header__menu-active');
		$('body').toggleClass('lock');
	});
});
  // fixed menu*******************************************************

  let navPos, winPos, navHeight;

  function refreshVar() {
    navPos = $('.header').offset().top;
    navHeight = $('.header').outerHeight(true);
  }

  refreshVar();
  $(window).resize(refreshVar);

  $('<div class="clone-nav"></div>').insertBefore('.header').css('height', navHeight).hide();

  $(window).scroll(function() {
    winPos = $(window).scrollTop();

    if (winPos > navPos) {
      $('.header').addClass('fixed shadow');  
      $('.clone-nav').show();
    } 
    else {
      $('.header').removeClass('fixed shadow');
      $('.clone-nav').hide();
    }
  });