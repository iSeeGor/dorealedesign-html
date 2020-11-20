$(function() {

	stickyContent();
	plansHandler();
	plansSlaider();
});

const stickyContent = () => {
	$('.js-sticky-service-block').stickySidebar({
		topSpacing: 120
	});
}

const plansHandler = () => {
	let item = $(".ckeck-list__item:not(._visible)");
	let button = $('.js-plans-button');

	// $(window).on('load', function(){
	// 	item.hide();
	// });

	button.on('click', function(){
		item.toggle();
		$('._wo-arrow').toggle();
	})
}

const plansSlaider = () => {

	let swiperTab = new Swiper('.js-swiper-tabs', {
		speed: 600,
		spaceBetween: 0,
		slidesPerView: 1,

		init: false, 

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {

			500: {
				slidesPerView: 2,
      			spaceBetween: 20
			},

			992: {
				slidesPerView: 3,
      			spaceBetween: 30
			},

		}

	});

	let swiperContsnt = new Swiper('.js-swiper-tabcont', {
		speed: 600,
		spaceBetween: 0,
		slidesPerView: 1,

		init: false, 

		breakpoints: {

			500: {
				slidesPerView: 2,
      			spaceBetween: 20
			},

			992: {
				slidesPerView: 3,
      			spaceBetween: 30
			},


		}

	});

	if(window.innerWidth <= 1200 ){
		swiperTab.init();
		swiperContsnt.init();
		swiperTab.controller.control = swiperContsnt;
		swiperContsnt.controller.control = swiperTab;
	}

	window.addEventListener('resize', swiperInit, false);
	// window.addEventListener('resize', destroySwiper, false);


	function swiperInit(){

		if(window.innerWidth <= 1200 ){
			swiperTab.init();
			swiperContsnt.init();
			swiperTab.controller.control = swiperContsnt;
			swiperContsnt.controller.control = swiperTab;
			window.removeEventListener('resize', swiperInit, false);
		}
	}

	function destroySwiper(){
		if(window.innerWidth > 1201){
			swiperTab.destroy();
			$('.plans-tabs__item').css({
				'width' : '',
				'margin-right' : '',
			 })
		}
	}

}