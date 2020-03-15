window.addEventListener('load', function () {


$('.slider-wrap').each(function() {
var that = $(this),
    SLIDER_CONFIG = {
        'slick' : $('.slider', that),
        'slick2' : $('#review', that),
        'slickNext': $('.slick-next', that),
        'slickPrev' : $('.slick-prev', that),
        'blockDots' : $('.slick-navigation', that)
},
settingsSlider = {
    dots: true,
    fade: true,
    slidesToShow: 1,
    nextArrow: SLIDER_CONFIG.slickNext,
    prevArrow: SLIDER_CONFIG.slickPrev,
    appendDots: SLIDER_CONFIG.blockDots,
    adaptiveHeight: true,
},
settingsSlider2 = {
    dots: true,
    fade: true,
    slidesToShow: 1,
    nextArrow: SLIDER_CONFIG.slickNext,
    prevArrow: SLIDER_CONFIG.slickPrev,
    appendDots: SLIDER_CONFIG.blockDots,
    adaptiveHeight: true,
    mobileFirst:true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                fade: false,
                slidesToShow: 3,
            }
        },
    ]

}
slider = SLIDER_CONFIG.slick,
slider2 = SLIDER_CONFIG.slick2;

 var flag = 0;

if (window.innerWidth <= 992 && flag === 0) {
flag = 1;
slider.slick(settingsSlider)
}

$(window).on('resize', function (event) {
windowWidth = $(window).width();

if (event.target.innerWidth <= 992 && flag === 0) {
    flag = 1;
    slider.slick(settingsSlider)

} else if (event.target.innerWidth > 992 && flag === 1) {
    flag = 0;
    $('.slider').filter('.slick-initialized').slick('unslick');
    //$('.slider').slick('unslick');
}
});















slider2.slick(settingsSlider2)

    // slick_on_mobile( slider, settingsSlider);
    //
    // function slick_on_mobile(slider, settings){
    //     $(window).on('load resize', function() {
    //         if (windowWidth >= 992) {
    //             if (slider.hasClass('slick-initialized')) {
    //                 slider.slick('unslick');
    //             }
    //             return
    //         }
    //         if (!slider.hasClass('slick-initialized')) {
    //             return slider.slick(settings);
    //         }
    //     });
    // };

});

$('.bcg-parallax').jKit('parallax', {
    'init': '5',
    'strength': '0.5',
    'axis': 'both',
    'scope': 'global'
});



$('.faq__item').click(function () {
if (!$(this).hasClass("faq__item_active")) {
    $('.faq__item_active').removeClass('faq__item_active');
    $(this).addClass('faq__item_active');

    $('.faq__question').removeClass('faq__question_active');
    $(this).find('.faq__question').toggleClass('faq__question_active');

    $('.faq__answer').slideUp();
    $(this).find('.faq__answer').slideDown()

} else {
    $('.faq  .faq__item_active').removeClass('faq__item_active');
    $(this).find('.faq__question').removeClass('faq__item_active');
    $(this).find('.faq__answer').slideUp()
}

});

$(".menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
$('body,html').animate({scrollTop: top}, 1500);
});

(function () {
    var getReviewDatas = document.querySelectorAll('.review__data');
    getReviewDatas.forEach(function (item, i) {
        var interval = i - getReviewDatas.length - 1;
        getReviewDatas[i].textContent = dtime_nums(interval, true);
    });
})();
(function () {
    var modal = document.querySelector(".modal"),
        trigger = document.querySelectorAll(".open-modal"),
        closeButton = document.querySelector(".close-modal");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    for (var i = 0; i < trigger.length; i++) {
        trigger[i].addEventListener("click", toggleModal);
    }

    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
})();
})

