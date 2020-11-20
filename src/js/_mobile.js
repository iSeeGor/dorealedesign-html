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