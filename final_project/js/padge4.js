
let scrollBtn = document.getElementById("scrollTop");
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const imageList = [
    "https://tse3.mm.bing.net/th/id/OIP.ELlR3L6y2xV9RTN_gbQMaQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://alphaindustries.cstatic.io/media/52/f1/9f/1752688643/178318_439_2_model_00001_160146.jpg?ts=1752688643",
    "https://s7d2.scene7.com/is/image/aeo/0195_2202_309_os?$pdp-mdg-opt$&fmt=jpeg",
    "https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0216291620134_004_d?$xlarge$&fit=constrain&qlt=80&wid=640"
];
const mainImage = document.getElementById("hoodieMainImage");
const hoodieIcons = document.querySelectorAll(".hoodieIcon");
let currentIndex = 0;
let autoChange;

function changeImage(index) {
    mainImage.src = imageList[index];
    hoodieIcons.forEach(icon => icon.classList.remove("active"));
    hoodieIcons[index].classList.add("active");
    currentIndex = index;
}

function startAutoChange() {
    autoChange = setInterval(() => {
        let nextIndex = (currentIndex + 1) % imageList.length;
        changeImage(nextIndex);
    }, 5000);
}

function stopAutoChange() {
    clearInterval(autoChange);
}

hoodieIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        changeImage(index);
        stopAutoChange();
        startAutoChange();
    });
});

startAutoChange();

$(document).ready(function () {
    var endDate = new Date();
    endDate.setDate(endDate.getDate() + 1);

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = endDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        $('#countdownHours').text(hours);
        $('#countdownMinutes').text(minutes);
        $('#countdownSeconds').text(seconds);

        if (distance < 0) {
            clearInterval(x);
            $('#countdownHours').text("00");
            $('#countdownMinutes').text("00");
            $('#countdownSeconds').text("00");
        }
    }, 1000);
});

$(document).ready(function(){
    $(".owl-carousel3").each(function(){
      $(this).owlCarousel({
        items: 3,
        loop: true,
        margin: 30, 
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        rtl: false,
        navText: ["<", ">"],
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1200: { items: 3 }
        }
      });
    });
  });
  
  

// Carousel 2
$(document).ready(function () {
    $(".owl-carousel2").each(function () {
        $(this).owlCarousel({
            items: 5,
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            rtl: false,
            navText: ["<", ">"],
            responsive: {
                0: { items: 1 },
                576: { items: 2 },
                768: { items: 3 },
                992: { items: 5 },
                1200: { items: 5 }
            }
        });
    });
});
$(document).ready(function () {
    $("#owl-carousel1").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        rtl: true,
        responsive: {
            0: { items: 3 },
            576: { items: 4 },
            768: { items: 6 },
            992: { items: 8 }
        }
    });
});










const carousel = document.querySelector('#carouselExampleCaptions');
const items = carousel.querySelectorAll('.carousel-item');

const bsCarousel = new bootstrap.Carousel(carousel, {
  interval: 9000, // زودناها شوية تبقى 7 ثواني بدل 6
  ride: 'carousel',
  pause: false,
  wrap: true
});

function resetAnimations() {
  items.forEach(item => {
    const content = item.querySelector('.carousel-content');
    content.classList.remove('animate-text');
  });
}

function triggerAnimation() {
  const activeItem = carousel.querySelector('.carousel-item.active');
  const activeContent = activeItem.querySelector('.carousel-content');

  // نخلي في Delay كافي قبل ما تبدأ الأنيميشن
  setTimeout(() => {
    activeContent.classList.add('animate-text');
  }, 600); // ممكن تزودي أو تقللي delay هنا
}

// أول تحميل للصفحة
window.addEventListener('load', () => {
  setTimeout(() => {
    triggerAnimation();
  }, 500); // أول سلايد
});

// لما السلايد يتغير
carousel.addEventListener('slide.bs.carousel', resetAnimations);
carousel.addEventListener('slid.bs.carousel', triggerAnimation);



