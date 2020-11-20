$(function () {
    submitForm();
});

function submitForm() {
    $('.form').submit(function (e) {
        e.preventDefault();
        if ($(this).valid()) {
            let form = $(this);

            let url = form.attr('action');
            let data = form.serializeArray();

            if(form.hasClass('quiz-content'))
            {
                data.push({name: 'request', 'value': 'Заявка(Квиз)'});
            }

            data.push({name: 'page', 'value': document.location.href});

            disableControls(form);

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });


            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: function (response) {
                    enableControls(form);
                    form.find("input[type=text], input[type=tel], input[type=email], textarea").val("");
                    $.fancybox.close();
                    $.fancybox.open({
                        src: '#m-success',
                        opts: {
                            beforeShow: function (instance, slide) {
                                $('.header').css('padding-right', '17px');
                                $('.header-page__bg-image').css('padding-right', '17px');
                            },
                            afterClose: function (instance, slide) {
                                $('.header').css('padding-right', '0px');
                                $('.header-page__bg-image').css('padding-right', '0px');
                            },
                        }
                    });
                },
            })
        }
    });
}

function disableControls(elem) {
    let controls = elem.find('input, textarea, button, select, input[type="checkbox"]');
    controls.prop('disabled', true);
    elem.css('opacity', 0.5);
}

function enableControls(elem) {
    let controls = elem.find('input, textarea, button, select, input[type="checkbox"]');
    elem.css('opacity', 1);
    controls.prop('disabled', false);
}
