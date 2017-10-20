$(document).ready(function() {

    // prevent body scroll when menu is open
    $('body').bind('touchmove', function(e) {
        e.preventDefault()
    });
    $('body').unbind('touchmove');

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
