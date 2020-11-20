$(function(){

	servicesInit();
	stagesTanbs();
	reviewsSlider();
	countDownNums();
	siteQuiz();

});

const siteQuiz = () => {

	let label = $('.quiz-content__label');

	progressBar();

	// $('.button-quiz').on('click', function(e){
	// 	e.preventDefault();
	// })

	label.on('click', function(){
		let block = $(this).parent().parent();

		changeBlock(block);
		countBlocks(block);
		quizCounter(block);
		progressBar();
	});

	function changeBlock(block){;
		block.removeClass('_current').next().addClass('_current');
	};

	function countBlocks(block){
		let blockName = block.next().attr('data-quiz-title');
		$('.quiz-progress__title').text(blockName);
	};

	function quizCounter(block){
		let countEl = $('.quiz-progress__count');
		countEl.text(block.next().index()+1)
		// countEl.text(block.next().index())
	};

	function progressBar(){
		let progBar = $('.quiz-progress__bar');
		let current = $('.quiz-content__block._current').index();
		let totalLength = $('.quiz-content__block').length;
		let percent = 100 / (totalLength);
		let width = percent * (current + 1);
		// let width = percent * (current);

		progBar.css('width', width + '%');

	};
}

const heroSloganSlider = () => {

	let swiper = new Swiper('.js-slogan-slider', {
		speed: 1400,
		spaceBetween: 100,
		autoplay: {
			disableOnInteraction: false,
			delay: 4000
		},

		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},

		allowTouchMove: false,

		on: {
			slideChangeTransitionStart: function(){
				let sloganBar = document.querySelector('.js-slogan-bar');
				if(sloganBar.classList.contains('_bottom')){
					sloganBar.classList.remove('_bottom');
				} else {
					sloganBar.classList.add('_bottom');
				}
			}
		}
	});

}


const countDownNums = () => {

	function fireCoundown(){
		if(document.querySelector('.dd-numbers__content').classList.contains('dd-numbers-animate')){
			// $('.js-count-nums').each(function () {
			// 	$(this).prop('js-count-nums',0).animate({
			// 		Counter: $(this).attr('data-countdown')
			// 	}, {
			// 		duration: 2000,
			// 		easing: 'swing',
			// 		step: function (now) {
			// 			$(this).text(Math.ceil(now));
			// 		}
			// 	});
			// });

			$('.dd-numbers-animate .js-count-nums').spincrement({
				decimalPlaces: null,
				thousandSeparator: '',
				duration: 2000,
			})

		}
	}

	if(document.querySelector('.dd-numbers__content')){
		window.addEventListener('scroll', fireCoundown, false);
	}
}

const servicesInit = () => {

	$('.dd-services__item').each(function(){

		let _this = $(this);

		_this.hover(handlerIn, handlerOut);

	});

	function handlerIn(){
		let _this = $(this)
		_this.addClass('_hover');
	}

	function handlerOut(){
		let _this = $(this)
		_this.removeClass('_hover');
	}

	// $(".dd-services__item").mousemove(function(e) {
	// 	let offset = $(this).offset();
	// 	let relativeX = (e.pageX - offset.left)/10;
	// 	let relativeY = (e.pageY - offset.top)/10;
	// 	let image = $(this).find('.dd-services__item-media');

	// 	image.css('transform', 'translate(' + relativeY + 'px,' +  relativeX + 'px');
	// });

}

const stagesTanbs = () => {

	$('.js-tab-btn').on('click', function(){

		let _this = $(this);
		let current = _this.index();
		let taba = $('.tab-grid');

		if(!_this.hasClass('_active')){

			_this.addClass('_active').siblings().removeClass('_active');
			taba.eq(current).addClass('_active').siblings().removeClass('_active');
		}

	});

}

const reviewsSlider = () => {

	let swiper = new Swiper('.js-reviews-slider', {
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

}
