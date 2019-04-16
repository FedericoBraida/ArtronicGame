const resize = () => {
    if (innerWidth < 767) {
        $("#menu").addClass("bg-cream");
    } else {
        $("#menu").removeClass("bg-cream");
    }
}
addEventListener('resize', resize);
addEventListener('DOMContentLoaded', resize);

$(document).ready(function () {
    $(window).scroll(function () {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("bg-cream");
        } else {
            $("#menu").removeClass("bg-cream");
        }
    });


    $(window).scroll(function () {
        var barra = $(window).scrollTop();
        var posicion = barra * 0.10 - 170;

        $('body').css({
            'background-position': '50% -' + posicion + 'px'
        });
    });
});