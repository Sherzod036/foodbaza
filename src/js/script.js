$(function () {
	$(window).on('scroll', function () {
		const height = $(window).scrollTop();
		if (height > 50) {
			$('.header--main').addClass('header--scrolled');
		} else {
			$('.header--main').removeClass('header--scrolled');
		}
	});

	$('.slider__items').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
	});

	const slider = $('.slider');
	slider.on('mousemove', () => {
		slider.addClass('slider--cursor');
	});
});
