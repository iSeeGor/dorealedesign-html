$(function () {
    loadMore();
})

function loadMore() {
    $('.load-more').click(function () {
        $('.filter-control__button').removeClass('active').removeClass('_active');
        $('.filter-all').addClass('_active').addClass('active');
        let items = $(this).attr('data-items');

        if(items)
        {
            items = parseInt(items) + 1;
        }
        console.log(items);
        $.ajax({
            type: 'GET',
            url: `/portfolio?page=${items}`,
            cache: false,
            success: function(response){
                console.log(response);
                if(response.hide_button)
                {
                    $('.load-more').hide();
                }
                $('.load-more').attr('data-items', items);
                $('.product-grid__container').mixItUp('insert', $('.dd-card').length, $(response.view), {filter: 'all'});
            },
        });

    });
}
