$(function () {
    $('.mainVisual-wrap-slider').bxSlider({
        mode: 'fade',
        auto: true,
        controls: false,
        pager: true,
        responsive: false,
        pause: 3000,
        speed: 1000,
        easing: 'ease-out'
    });
});

$(function(){
    $('.gnb-btn').on("click",function(){
        $('.header-bottom').toggleClass('on');
    });
});
