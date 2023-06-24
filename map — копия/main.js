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

