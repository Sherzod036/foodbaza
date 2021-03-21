$(function () {
	$(window).on('scroll', function () {
		const height = $(window).scrollTop();
		if (height > 50) {
			$('.header--main').addClass('header--scrolled');
		} else {
			$('.header--main').removeClass('header--scrolled');
		}
	});

	const pic = $('.single-products__main-pic img');
	$('.single-products__sub-pic img').on('click', function () {
		let current = $(this).attr('src');
		pic
			.fadeOut(400, () => {
				pic.attr('src', current);
				pic.attr('srcset', '');
			})
			.fadeIn();
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
