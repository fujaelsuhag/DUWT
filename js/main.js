// Slick slider Js
$('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // Venbox Js
$('.venobox').venobox(); 