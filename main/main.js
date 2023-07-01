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


// plavnii scroll

const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!(animItem.classList.contains(`_anim-no-hide`))) {
                    animItem.classList.remove(`_active`)
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}