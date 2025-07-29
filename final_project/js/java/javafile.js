$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        center:false,
        auttoWidth:false,
        stagePadding:0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }

        }
        
    });
});
let count = 0;
const counterElement = document.getElementById('counter');

function increase() {
    count++;
    counterElement.textContent = count;
}

function decrease() {
    if (count > 0) {
        count--;
        counterElement.textContent = count;
    }
}
const zoomImages = document.querySelectorAll('.zoom-on');

zoomImages.forEach(img => {
    const container = img.closest('.img-wrapper');

    container.addEventListener('mousemove', function (e) {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 2;
        const y = ((e.clientY - top) / height - 0.5) * 2;

        const zoom = 2;

        img.style.transform = `scale(${zoom}) translate(${x * 70}px, ${y * 70}px)`;
    });

    container.addEventListener('mouseleave', function () {
        img.style.transform = 'scale(1) translate(0, 0)';
    });
});
const stars = document.querySelectorAll('#hoverRating i');
let selectedValue = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', () => {
        const hoverValue = +star.getAttribute('data-value');
        updateStars(hoverValue);
    });

    star.addEventListener('mouseleave', () => {
        updateStars(selectedValue); 
    });

    star.addEventListener('click', () => {
        selectedValue = +star.getAttribute('data-value');
        updateStars(selectedValue);
    });
});

function updateStars(value) {
    stars.forEach(star => {
        const starValue = +star.getAttribute('data-value');
        if (starValue <= value) {
            star.classList.remove('bi-star');
            star.classList.add('bi-star-fill');
        } else {
            star.classList.remove('bi-star-fill');
            star.classList.add('bi-star');
        }
    });
}
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
// document.querySelectorAll('.card-hover').forEach(card => {
// const buttonsDiv = document.createElement('div');
// buttonsDiv.className = 'card-buttons';
// const icons = ['bi-heart', 'bi-arrow-left-right', 'bi-cart', 'bi-search'];

// icons.forEach(iconClass => {
// const btn = document.createElement('button');
// btn.innerHTML = `<i class="bi ${iconClass}"></i>`;
// buttonsDiv.appendChild(btn);
// });
// 3w
// card.appendChild(buttonsDiv);
// });
// const icons = [
//     { icon: 'bi-heart', tooltip: 'Add to Wishlist' },
//     { icon: 'bi-arrow-left-right', tooltip: 'Compare' },
//     { icon: 'bi-cart', tooltip: 'Add to Cart' },
//     { icon: 'bi-search', tooltip: 'Quick View' }
//   ];
  
//   icons.forEach(({ icon, tooltip }) => {
//     const btn = document.createElement('button');
//     btn.className = 'position-relative'; // مهم علشان البوزيشن
  
//     btn.innerHTML = `
//       <i class="bi ${icon}"></i>
//       <span class="iconbar-text position-absolute">${tooltip}</span>
//     `;
//     buttonsDiv.appendChild(btn);
//   });