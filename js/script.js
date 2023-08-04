$('.banner-slide').slick({
    arrows:false,
    dots:true
});


$('.main_slider').slick({

    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: '<i class="fa-solid fa-chevron-left left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right"></i>',



    responsive: [
      
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       
      ]
});

