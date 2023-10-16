initMap();

async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, Placemark } = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [37.633113, 55.777105],
                zoom: 17
            }
        }
    );

    map.addChild(new YMapDefaultSchemeLayer());

    const placemark = new Placemark(
        [37.633113, 55.777105],
        {},
        {
            iconLayout: 'default#image',
            iconImageHref: '../images/contacts/mark.svg',
            iconImageSize: [30, 30],
            iconImageOffset: [-15, -15]
        }
    );

    map.geoObjects.add(placemark);
}