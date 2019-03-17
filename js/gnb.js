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






//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmduYi1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5nbmItZGVwdGgyJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCcuZ25iLWRlcHRoMicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmduYicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuZ25iLWRlcHRoMicpLnJlbW92ZUNsYXNzKFwib25cIik7XHJcbiAgICB9KVxyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAgICQoJy5pbmRleCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX2luZGV4ID0gJCh0aGlzKS5pbmRleChcIi5pbmRleFwiKTtcclxuICAgICAgICAgICAgJCgnLmJnLW1vcmUnKS5jc3Moe1xyXG4gICAgICAgICAgICBcImJhY2tncm91bmRcIjpcInVybCguLi9pbWFnZXMvYmctbW9yZS9iZ19tb3JlX1wiKyhfaW5kZXgrMSkrXCIuanBnXCIsXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1zaXplXCI6XCJjb3ZlclwiLFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmQtcG9zaXRpb25cIjpcImNlbnRlclwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcucHJjZW50ZXItdmlkZW8nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnByY2VudGVyLXZpZGVvIGltZycpLmhpZGUoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=
