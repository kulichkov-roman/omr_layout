$(function () {
    $('.js-callme').fancybox({
        padding: [30, 30, 40, 30]
    });

    $('.fancybox').fancybox({

    });

    $('.js-thanks').on('click', function() {
        $.fancybox.close();
        $.fancybox.open([
                {content: $('#thanks')}
            ], {
                padding: [30, 30, 40, 30]
            });
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

    $('.tabs__caption').on('click', '.tabs__item:not(.tabs__item--active)', function() {
        $(this)
            .addClass('tabs__item--active').siblings().removeClass('tabs__item--active')
            .closest('.tabs').find('div.tabs__content').removeClass('tabs__content--active').eq($(this).index()).addClass('tabs__content--active');
    });

    var slider1 = $('.bxslider1').bxSlider({
        mode: 'vertical',
        pager:false,
        controls:false,
        autoStart:true,
        auto:true,
        slideMargin: 5,
        preloadImages : 'all',
        pause:8000
    });

    var slider2 = $('.bxslider2').bxSlider({
        preloadImages : 'all',
        pager:false,
        controls:false,
        autoStart:true,
        auto:true,
        pause:8000
    });

    var slider3 = $('.bxslider3').bxSlider({
        mode: 'vertical',
        preloadImages : 'all',
        pager:false,
        controls:false
    });

    $('.gallery-slider').bxSlider({
        slideMargin:20,
        controls:false,
        slideWidth: 150,
        minSlides: 4,
        maxSlides: 4,
        infiniteLoop: false
    });

    $('.slider_prev').click(function(e){
        slider1.goToPrevSlide();
        slider2.goToPrevSlide();
    })

    $('.slider_next').click(function(e){
        slider1.goToNextSlide();
        slider2.goToNextSlide();
    })

    $('.review_prev').click(function(e){
        slider3.goToPrevSlide();
    });

    $('.review_next').click(function(e){
        slider3.goToNextSlide();
    });

    $('.home_info h2 span').click(function(e){
        var item = $(this).data('item');
        $('.home_info h2 span').removeClass('active');
        $('.home_info .item').hide();
        $('.home_info h2 span:eq('+item+')').addClass('active');
        $('.home_info .item:eq('+item+')').show();
    })

    function resize_footer(){
        var d = 30;
        var h1 = $('footer .links').innerHeight();
        var h2 = $('footer .contacts').innerHeight();
        var h3 = 0;
        var h4 = 0;
        if (h1 > h2) {
            h3 = h1;
            h4 = $('footer .links').height();
        } else {
            h3 = h2;
            h4 = $('footer .contacts').height();
        }
        $('footer .left').height(h3+d);
        $('footer .right').height(h3+d);
        $('footer .contacts').height(h4+d);
        $('footer .links').height(h4+d);
    }

    resize_footer();

    if ( $(document).scrollTop() > 0 ) {
        $('#scrollup').fadeIn('fast');
    } else {
        $('#scrollup').fadeOut('fast');
    }

    $('#scrollup').on('click', function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    $( window ).resize(function() {
        resize_footer();
    });

    $(window).scroll(function(){
        var headerHeight = 140;
        if ( $(document).scrollTop() > headerHeight ) {
            $('.header').addClass('header--fixed');
            $('.wrapper').css('padding-top', headerHeight);
        } else{
            $('.header').removeClass('header--fixed');
            $('.wrapper').css('padding-top', 0);
        }

        if ( $(document).scrollTop() > 0 ) {
            $('#scrollup').fadeIn('fast');
        } else {
            $('#scrollup').fadeOut('fast');
        }
    });
});


function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }
    var filename = str.slice(i);
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}