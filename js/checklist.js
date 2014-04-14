(function($, utils){

    //detect checks and update button accordingly

    if (utils.svgSupported()) {

        $('.submit-button').addClass('hidden');



    } else {

        $('.numbered-radio-container').click(function(event) {
            if ($(event.currentTarget) !== $('.numbered-radio-container.selected')) {
                $('.numbered-radio-container.selected').removeClass('selected');
                $(event.currentTarget).addClass('selected');
            }

        });

        $('.nothing-radio-container').click(function() {
            $('.numbered-radio-container.selected').removeClass('selected');
        });
    }


})(jQuery, window.utils);