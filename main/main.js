const addPreload = (elem) => {
    elem.classList.add('preload')
};

const removePreload = (elem) => {
    elem.classList.remove('preload');
};

const startSlider = () => {
    const sliderItems = document.querySelectorAll('.slider__itemm');
    const sliderList = document.querySelector('.slider__listt');
    const btnPrevSlider = document.querySelector('.slider__arroww_left');
    const btnNextSlider = document.querySelector('.slider__arroww_right');

    let activeSlider = 1;
    let position = 0;

    const checkSlider = () => {
     if ((activeSlider + 2 === sliderItems.length && 
        document.documentElement.offsetWidth > 560) || 
        activeSlider === sliderItems.length) {
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
        sliderItems[activeSlider]?.classList.remove('slider__itemm_active');
        position = -sliderItems[0].clientWidth * activeSlider;
        
        sliderList.style.transform = `translateX(${position}px)`;
        activeSlider += 1;
        sliderItems[activeSlider]?.classList.add('slider__itemm_active');
        checkSlider();
    };
    const prevSlider = () => {
        sliderItems[activeSlider]?.classList.remove('slider__itemm_active');
        position = -sliderItems[0].clientWidth * (activeSlider - 2);
        
        sliderList.style.transform = `translateX(${position}px)`;
        activeSlider -= 1;
        sliderItems[activeSlider]?.classList.add('slider__itemm_active');
        checkSlider();
    };
    btnPrevSlider.addEventListener('click', prevSlider);
    btnNextSlider.addEventListener('click', nextSlider);
    

    window.addEventListener('resize', () => {
        if (activeSlider + 2 > sliderItems.length && 
            document.documentElement.offsetWidth > 560) {
                activeSlider = sliderItems.length - 2;
                sliderItems[activeSlider]?.classList.add('slider__itemm_active');
        }


        position = -sliderItems[0].clientWidth * (activeSlider - 1);
        sliderList.style.transform = `translateX(${position}px)`;
        checkSlider();
    });
};

const initSlider = () => {
    const slider = document.querySelector('.sliderr');
    const sliderContainer = document.querySelector('.sliderr__container');

    sliderContainer.style.display = 'none';
    addPreload(slider);

    window.addEventListener('load', () => {
        sliderContainer.style.display = '';
        removePreload(slider);
        startSlider(slider);
    });
};

window.addEventListener('DOMContentLoaded', initSlider);




// // counter

// window.addEventListener("load", windowLoad);

// function windowLoad() {
//     function digitsCountersInit(digitsCountersItems) {
//         let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
//         if (digitsCounters) {
//             digitsCounters.forEach(digitsCounter => {
//                 digitsCountersAnimate(digitsCounter);
//             });
//         }
//     }

//     function digitsCountersAnimate(digitsCounter) {
//         let startTimestamp = null;
//         const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
//         const startValue = parseInt(digitsCounter.innerHTML);
//         const startPosition = 0;
//         const step = (timestamp) => {
//             if (!startTimestamp) startTimestamp = timestamp;
//             const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//             digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
//             if (progress < 1) {
//                 window.requestAnimationFrame(step);
//             }
//         };
//         window.requestAnimationFrame(step);
//     }
//     digitsCountersInit();
// }

