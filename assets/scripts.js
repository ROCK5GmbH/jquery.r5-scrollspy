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

    var $cycleIcons = $(".cycle-icons i");
    var $randomIcon =  $cycleIcons.eq(Math.floor(Math.random() * $cycleIcons.length));
    var $nextIcon = $randomIcon;

    $cycleIcons.hide();
    $randomIcon.show();

    setInterval(function() {
        $randomIcon.hide();
        while($nextIcon === $randomIcon){

            $nextIcon = $cycleIcons.eq(Math.floor(Math.random() * $cycleIcons.length));
        }

        $randomIcon = $nextIcon;
        $randomIcon.show();
    }, 5000);
})(jQuery);