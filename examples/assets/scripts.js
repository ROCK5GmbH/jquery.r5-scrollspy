(function($){

    var $topNavElements = $('header a');
    $('.screen').scrollspy(
        {
            outCallback: function ($element) {
                $topNavElements.filter('[href="#' + $element.attr('id') + '"]').removeClass('active');
                $element.find('.side').html('');
            },
            inCallback:  function ($element, side) {
                $topNavElements.filter('[href="#' + $element.attr('id') + '"]').addClass('active');
                $element.find('.side').html(side);
            }
        }
    );
})(jQuery);