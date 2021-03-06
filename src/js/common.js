$(document).ready(function () {
  lazy();
  nav();
  parralax();
  scroll();
  new WOW().init();
});
$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});

//global variables
var innerWidth = $('body').innerWidth();

//lazy
function lazy() {
  $(".lazy").Lazy({
    visibleOnly: true,
    effect: 'fadeIn',
    effectTime: '300'
  });
}
//nav
function nav() {
  var $navOpen = $('.nav-open'),
    $navClose = $('.nav-close'),
    $nav = $('.nav'),
    $overlay = $('.overlay');

  $navOpen.on('click', function (e) {
    e.preventDefault();
    $nav.toggleClass('active');
    navState();
  })
  $navClose.on('click', function (e) {
    e.preventDefault();
    $nav.removeClass('active');
    navState();
  })
  $overlay.on('click touchstart', function () {
    $nav.removeClass('active');
    navState();
  })
  
  function navState() {
    if ($nav.hasClass('active')) {
      $('.page').addClass('active');
      scrollLock.hide($("body"));
      $overlay.fadeIn(300);
    } else {
      scrollLock.show($("body"));
      $('.header').removeClass('active');
      $('.page').removeClass('active');
      $overlay.fadeOut(300);
    }
  }
}

//parralax
function parralax() {
  //init parralax
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene, {
    limitY: '80',
    limitX: '80'
  });
}
//scroll
function scroll() {
  $(".scroll-link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});
}