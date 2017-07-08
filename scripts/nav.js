$("#toggle").on('click', function (e) {
	e.preventDefault();
	$('body, .mobile-navbar').toggleClass('js-open');
});

$(".nav-background").on('click', function () {
  $('body, .mobile-navbar').removeClass('js-open');
});
