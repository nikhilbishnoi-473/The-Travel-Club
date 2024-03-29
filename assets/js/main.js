function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
}
function tra_sition(){
    document.getElementById("arrow_1").classList.toggle("transition_2")
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
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
              slidesToScroll: 2,
              autoplay: true,
            }
          },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          autoplay: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        }
      },
      
     
    ]
  });