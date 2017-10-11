$().ready(function (e) {
  $('.photo__slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.photo__slider-thumbs'
  });
  
  $('.photo__slider-thumbs').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.photo__slider-main',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
});
