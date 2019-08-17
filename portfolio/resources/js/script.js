$(document).ready(
    function() {
        $('.about').waypoint(
            function(direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '600px'
            }
        )
    }
)

$("document").ready(function() {
    $(function() {
        $('.main-nav a[href="' + location.pathname.split("/")[location.pathname.split("/").length - 1] + '"]').parent().addClass('active');
    });

});