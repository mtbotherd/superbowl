$(document).ready(function() {

    // prevent body scroll when menu is open
    $(function() {

        var fixed = document.getElementById('fixed'),
            overflow;

        $(window).on('load resize', function() {
            overflow = fixed.scrollHeight - $('#fixed').height();
        });

        fixed.on('touchmove', function() {

            if (overflow) return true;
            else return false;
        });
    });

    // Collapse menu when link it clicked (mobile only).
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    // Set active class on selected menu item.
    $('.nav li').click(function() {
        $('.nav li').removeClass('active');
        console.log("done!");
        $(this).addClass('active');
    });

    // Park n Ride popovers
});
