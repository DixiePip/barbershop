// MAP

let center = [54.00431499257548,27.67886365756741];

function init() {
    let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 16,
        // controls: ['routePanelControl'] //маршрут
    });

    // let control = map.controls.get('routePanelControl');

    // let barber = 'Боровляны';

    // control.routePanel.state.set({
    //     type: 'masstransit',
    //     fromEnabled: false, 
    //     from: `$(barber), Лесной 25`,
    //     toEnabled: true
    // })

    let placemark = new ymaps.Placemark(center, {
        balloonContentHeader: 'Барбершоп "Mushket"',
        balloonContentBody: '+375 (25) 725-50-00',
        balloonContentFooter: 'Стрижки & бритье'

    }, {
        // iconLayout: 'default#image',
        // iconImageHref: 'https://www.clker.com/cliparts/P/6/W/m/y/Q/red-pin.svg',
        // iconImageSize: [20, 20],
        // iconImageOffset: [-9, -22]
    });

    map.geoObjects.add(placemark);
};


ymaps.ready(init);




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