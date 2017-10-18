$(document).ready(function() {

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
    $('[data-toggle="popover"]').popover();
});
