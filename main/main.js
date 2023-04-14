const addPreload = (elem) => {
    elem.classList.add('preload')
};

const removePreload = (elem) => {
    elem.classList.remove('preload');
};

const startSlider = () => {
    const sliderItems = document.querySelectorAll('.slider__item');
    const sliderList = document.querySelector('.slider__list');
    const btnPrevSlider = document.querySelector('.slider__arrow_left');
    const btnNextSlider = document.querySelector('.slider__arrow_right');

    let activeSlider = 1;
    let position = 0;

    const checkSlider = () => {
     if (activeSlider + 2 === sliderItems.length) {
        btnNextSlider.style.display = 'none';
     }  else {
        btnNextSlider.style.display = '';
     }

     if (activeSlider === 1) {
        btnPrevSlider.style.display = 'none';
    }  else {
        btnPrevSlider.style.display = '';
    }
    };

    checkSlider();

    const nextSlider = () => {
        sliderItems[activeSlider].classList.remove('slider__item_active');
        position = -sliderItems[0].clientWidth * activeSlider;
        
        sliderList.style.transform = `translateX(${position}px)`;
        activeSlider += 1;
        sliderItems[activeSlider].classList.add('slider__item_active');
        checkSlider()
    };
    const prevSlider = () => {
        sliderItems[activeSlider].classList.remove('slider__item_active');
        position = -sliderItems[0].clientWidth * (activeSlider - 2);
        
        sliderList.style.transform = `translateX(${position}px)`;
        activeSlider -= 1;
        sliderItems[activeSlider].classList.add('slider__item_active');
        checkSlider();
    };
    btnPrevSlider.addEventListener('click', prevSlider);
    btnNextSlider.addEventListener('click', nextSlider);
    
    window.addEventListener('resize', () => {
        console.log(1);
    })
};

const initSlider = () => {
    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider__container');

    sliderContainer.style.display = 'none';
    addPreload(slider);

    window.addEventListener('load', () => {
        sliderContainer.style.display = '';
        removePreload(slider);
        startSlider(slider);
    });
};

window.addEventListener('DOMContentLoaded', initSlider);