$().ready(function (e) {

    $('.photo__slider-main').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: false,
        slide: 'li',
        cssEase: 'linear',
        centerMode: false,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                variableWidth: false,
                slidesToShow: 1,
                dots: true
            },
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                variableWidth: false,
                slidesToShow: 1,
                dots: true

            }
        }],
        customPaging: function (slider, i) {
            return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
        }
    });

    //$('.slick-thumbs').html('');
    //$('.slick-dots').appendTo('.slick-thumbs');
});