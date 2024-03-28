function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
}
function tra_sition(){
    document.getElementById("arrow_1").classList.toggle("transition_2")
}
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    arrows: true,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
     
    ]
  });