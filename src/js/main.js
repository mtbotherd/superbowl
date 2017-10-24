$(document).ready(function() {

    $(document).on('show', '#accordion', function(e) {
        //$('.accordion-heading i').toggleClass(' ');
        $(e.target).prev('.accordion-heading').addClass('accordion-opened');
    });

    $(document).on('hide', '#accordion', function(e) {
        $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
        //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
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
