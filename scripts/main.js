$(document).ready(function() {
    $('.prev').on('click', function() {

        var currentImg = $('.active');
        var prevImg = currentImg.prev('.slider-inner img'); 
        if(prevImg.length == 0) {
          prevImg = $('.slider-inner img:last');
        }

        currentImg.removeClass('active'); 
        prevImg.addClass('active'); 
    });
    $('.next').on('click', function() {

        var currentImg = $('.active');
        var nextImg = currentImg.next('.slider-inner img'); 
        if(nextImg.length == 0) {
          nextImg = $('.slider-inner img:first');
        }
        currentImg.removeClass('active'); 
        nextImg.addClass('active'); 
    })
});
