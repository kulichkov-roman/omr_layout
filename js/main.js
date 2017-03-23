$(function () {
    $('.js-callme').fancybox({
        padding: [30, 30, 40, 30]
    });

    $('.nav__level1-item').mouseenter(function () {
        var level2 = $(this).find('.nav__level2');
        if(level2.length){
            $('.nav__bg').show();
        }
    }).mouseleave(function () {
        var level2 = $(this).find('.nav__level2');
        if(level2.length){
            $('.nav__bg').hide();
        }
    });

    $('.form__select select').select2({
        minimumResultsForSearch: -1,
        width: '100%'
    });

    $('.form__select').addClass('form__select--load');
});

window.onload = function(){

};