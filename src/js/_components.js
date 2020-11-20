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
