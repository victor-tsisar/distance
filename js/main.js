$(document).ready(function () {
    $('.sidebar__menu-link').on('click', function() {
        $('.sidebar__menu-link').removeClass('active'),
        $(this).toggleClass('active')
    });

    $('.m-menu').on('click', function () {
        $('.sidebar').toggleClass('sidebar--active'),
            $('.line').toggleClass('line--active')
    });
});