$(function () {
    $('.gnb-depth1-link').on('mouseenter', function () {
        $('.gnb-depth2').removeClass('on');
        $(this).next('.gnb-depth2').addClass('on');
    });

    $('.gnb').on('mouseleave', function(){
        $('.gnb-depth2').removeClass("on");
    })
});

$(function(){
    $('.index').on('mouseenter', function(){
        var _index = $(this).index(".index");
            $('.bg-more').css({
            "background":"url(../images/bg-more/bg_more_"+(_index+1)+".jpg",
            "background-size":"cover",
            "background-position":"center"
        });
    });
});

$(function(){
    $('.prcenter-video').on('click',function(){
        $('.prcenter-video img').hide();
    });
});





