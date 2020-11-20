$(function() {


	// common
	headerAnimation();
	
	

	// components init
	fancyboxInit();
	formValidation();

	// Home Page
	heroSloganSlider();
	// countDownNums();


	// mobile
	hamburgerAnim();
});





const hamburgerAnim = () => {

	$('.hamburger').on('click', function(){
		let _this = $(this);

		let menu = $('.aside-menu');

		if(!_this.hasClass('_active') && !_this.hasClass('_disabled')){
			_this.addClass('_active');
			menu.addClass('_opened');
			$(body).css('overflow', 'hidden');

		} else if(_this.hasClass('_active')) {
			_this.removeClass('_active').addClass('_disabled');
			menu.removeClass('_opened');
			$(body).css('overflow', 'auto');

		} else if(_this.hasClass('_disabled')){
			_this.removeClass('_disabled').addClass('_active')
			menu.addClass('_opened');
			$(body).css('overflow', 'hidden');
		}

	})

};
$(function() {
	mobileCheck();
	addMobileClasess()
	resetFunction()

	customCursour();
	headerAnimation();
	salAnimationLib();
	rellaxJSAnimation();
	smoothScroll();
	scrollToTop();
	pageHeaderImageHeight();
	
});

const mobileCheck = () => {

	window.mobileAndTabletcheck = function() {
        var check = false;
		
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
		
		return check;
	};

}

const addMobileClasess = () => {

	if(window.mobileAndTabletcheck()) {
		$('.dd-card, .button-svg').addClass('_mobile');
	}

}

const resetFunction = () => {

	//  Убираем на мобильных класы имитации scrollbar
	if(window.mobileAndTabletcheck()){
		$(body).removeClass('_preload');
		$('.root__header, .header-page__bg-image').removeClass('_preload');
	}

}

const pageHeaderImageHeight = () => {
	
	let image = document.querySelector('.header-page__bg-image');
	
	if(image){
		let pageHeaderHeight = document.querySelector('.header-page').offsetHeight;
		image.style.height = pageHeaderHeight + "px";
	}

}

const scrollToTop = () => {
    let toTopBtn = $('.to-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
            toTopBtn.addClass('_visible');
        } else {
            toTopBtn.removeClass('_visible');
        }
    });

    $(document).on('click', '.to-top', () => {
        $('html, body').animate({ scrollTop: 0 }, 0);
    });
};

const smoothScroll = () => {

	SmoothScroll({ stepSize: 60 })

};

const headerAnimation = () => {

	window.addEventListener('scroll', headerHandler);

	function headerHandler(){
		let scrollPosition = $(window).scrollTop();
		let brakepoint = 200;
		let overlay = $('.js-header-overlay');
		let logo = $('.js-logo-image');

		if(scrollPosition > brakepoint){
			overlay.addClass('_visible');
			logo.addClass('_small');
		} else {
			overlay.removeClass('_visible');
			logo.removeClass('_small');
		}
		
	};

};

const salAnimationLib = () => {

	if(!window.mobileAndTabletcheck() && window.innerWidth >= 1200){
		sal({
			threshold: 0.1,
			// once: false,
			rootMargin: '0px 0px -20% 0px',
		});

	} else {
		$('[data-sal|="fade"]').css('opacity','1');
		$('[data-sal|="slide"], [data-sal|="zoom"]').css({"opacity": 1, 'transform': 'none'});
		$('[data-sal|="flip"]').css('transform','none');
	}
	
};

const rellaxJSAnimation = () => {

	if(!window.mobileAndTabletcheck() && window.innerWidth >= 1200) {
		let rellax = new Rellax('.rellax', {
			center: true,
		});
	}

};

const customCursour = () => {

	if(!window.mobileAndTabletcheck() && window.innerWidth >= 1200){

		const cursor = curDot({
			zIndex: 101,
			diameter: 50,
			borderWidth: 1,
			borderColor: '#ccc2c3',
			//   easing: 4,
			//   background: '#ddd'
			});
		
		cursor.over(".js-logo-image", {
			background: "#fff",
			scale: 1.4
		});

		cursor.over(".hero__title", {
			background: "#fff",
			scale: 1.4
		});

		cursor.over("a", {
			scale: 1.2
		});

		cursor.over("button", {
			scale: 1.2
		});

	}
}
const fancyboxInit = () => {
	
	$("[data-fancybox]").fancybox({
		autoFocus: false,

		beforeShow: function( instance, slide ) {

			if(!window.mobileAndTabletcheck()){
				$('.header').css('padding-right', '17px');
				$('.header-page__bg-image').css('padding-right', '17px');
			}

		},
		afterClose: function( instance, slide ) {
			if(!window.mobileAndTabletcheck()){
				$('.header').css('padding-right', '0px');
				$('.header-page__bg-image').css('padding-right', '0px');
			}
		},
	});

};

const formValidation = () => {
    const forms = document.querySelectorAll('.js-validate');

    $.validator.methods.email = function( value, element ) {
        return this.optional( element ) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
    }

    forms.forEach(function(form){
        let forms = $(form).validate({
            errorElement: "em",
            errorPlacement: function(error, element) {
                element.parent().parent().append(error);
            }
		});

        $('.js-reset-validation').on('click', function(){
			forms.resetForm();
		});
	});



    $('.input_number').bind('keypress', function(e){
		var keyCode = (e.which)?e.which:event.keyCode
		return !(keyCode>31 && (keyCode<48 || keyCode>57)); 
	});

	$('.input_number').mask("+38 (000) 000 0000", {placeholder: "+38 (000) 000 0000"});

};

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

$(function(){
	
	portfolioItemsFilter();

});


const portfolioItemsFilter = () => {

	$('.js-mixItUp').mixItUp({
		animation: {
			enable: true,
			effects: 'fade translateY(400px)',
			duration: 800,
			// easing: 'ease',
			// perspectiveDistance: '3000',
			// perspectiveOrigin: '50% 50%',
			// queue: false,
			// queueLimit: 1,
			// animateChangeLayout: false,
			// animateResizeContainer: true,
			// animateResizeTargets: false,
			// staggerSequence: false,
			// reverseOut: false
		},

		selectors: {
			target: '.product-grid__col',
			filter: '.filter-control__button',
			// sort: '.'
		}
	});


	$('.filter-control__button').on('click', function(){
		let _this = $(this);

		if(!_this.hasClass('._active')){
			_this.addClass('_active').siblings().removeClass('_active');
		}

	});

	// let rellax = rellaxJSAnimation();
		// rellax.refresh();

};

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