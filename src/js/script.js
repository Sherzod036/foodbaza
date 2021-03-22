$(function () {
	const BODY = $('body');
	BODY.removeClass('body--fixed');
	$('.preloader').addClass('preloader--disabled');

	$(window).on('scroll', function () {
		const height = $(window).scrollTop();
		if (height > 50) {
			$('.header--main').addClass('header--scrolled');
		} else {
			$('.header--main').removeClass('header--scrolled');
		}
	});

	const hamb = $('.hamburger');

	hamb.on('click', () => {
		hamb.toggleClass('is-active');
		$('.header__nav').slideToggle().css({ display: 'block' });
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
		margin: 20,
	});

	const pageMediaArrows = [
		'<span class="icon-media-arrow-left"></span>',
		'<span class="icon-media-arrow-right"></span>',
	];

	$('.page-media__slider').owlCarousel({
		items: 1,
		margin: 50,
		smartSpeed: 1000,
		mouseDrag: false,
		touchDrag: false,
		nav: true,
		navText: pageMediaArrows,
	});

	const slider = $('.slider');
	slider.on('mousemove', () => {
		slider.addClass('slider--cursor');
	});
});
