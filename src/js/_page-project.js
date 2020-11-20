$(function(){
	
	projectVideoSlider();
	projectVideoPlayButton();

});

const projectVideoSlider = () => {

	let mySlider = new Swiper('.js-project-video-slider', {
		speed: 800,
		spaceBetween: 0,
		loop: false,

		navigation: {
			nextEl: '.swiper-nav__next',
			prevEl: '.swiper-nav__prev',
		},

		pagination: {
			el: '.swiper-pag',
			type: 'bullets',
			bulletActiveClass: '_active',
		},


	});

	function closure(){
		let iframe = $('.swiper-slide-active iframe');
		
		return function(){
			iframe.attr('src', '').css('z-index', '1');
		}
	}

	mySlider.on('slideChange', function(){
		let updateSlide = closure();
		setTimeout(updateSlide, 600);
	})

};

const projectVideoPlayButton = () => {

	$('.js-pv-player').click(function (e) { 
		e.preventDefault();
		let _this = $(this);
		let poster = _this.find('.project-video__poster');
		let playButton = _this.find('.yt-button');
		let iframe = _this.find('iframe');

		iframe.attr('src', iframe.attr('data-src')).css('z-index', '10');

	});

};