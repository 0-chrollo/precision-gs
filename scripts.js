document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    const body = document.body;

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }
    });
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    const burger = document.querySelector('.burger');
    menu.classList.toggle('open');
    burger.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.querySelector(".faq-question").addEventListener("click", () => {
            item.classList.toggle("active");

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
});






        
const slides = document.querySelectorAll('.slides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.dot');

let index = 0;

// Set initial dot opacity
dots[0].style.opacity = '1';

// Position slides
slides.forEach((slide, i) => {
  slide.style.left = `${i * 100}%`;
});

// Move slide function
const moveSlide = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
};

// Remove dots opacity
const removeDotsOpacity = () => {
  dots.forEach((dot) => {
    dot.style.opacity = '.2';
  });
};

// Dot click event listener
dots.forEach((dot, i) => {
  dot.addEventListener('click', (e) => {
    index = i;
    removeDotsOpacity();
    e.target.style.opacity = '1';
    moveSlide();
  });
});

// Previous button click event listener
prevBtn.addEventListener('click', () => {
  if (index === 0) return;
  index--;
  removeDotsOpacity();
  dots[index].style.opacity = '1';
  moveSlide();
});

// Next button click event listener
nextBtn.addEventListener('click', () => {
  if (index === slides.length - 1) return;
  index++;
  removeDotsOpacity();
  dots[index].style.opacity = '1';
  moveSlide();
});

// Auto-play slide function
const autoPlaySlide = () => {
  removeDotsOpacity();
  if (index === slides.length - 1) index = -1;
  index++;
  dots[index].style.opacity = '1';
  moveSlide();
};

// Auto-play slide on window load
window.onload = () => {
  setInterval(autoPlaySlide, 6000);
};


