$(function(){
	
	awardsSlider();

});

const awardsSlider = () => {

	let swiper = new Swiper('.js-awards-slider', {
		speed: 1000,
		spaceBetween: 30,
		loop: false,
		slidesPerView: 1,

		pagination: {
			el: '.swiper-pag',
			type: 'bullets',
			bulletActiveClass: '_active',
			clickable: true
		},

		breakpoints: {
			476: {
				slidesPerView: 2,
			},

			767: {
				slidesPerView: 3,
			},
		}
	});

}