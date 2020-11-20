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
