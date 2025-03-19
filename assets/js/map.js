
var pos;
var map;

function initMap(altMap = false) {
    let Lmap;
    try {
        Lmap = L.map('map');
    }
    catch (e) {
        return;
    }
    if (altMap) {
        pos = [39.9615, 116.366];
        map = Lmap.setView(pos, 15);
        // 3 ~ 18
        L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
            subdomains: ['1', '2', '3', '4'],
            minZoom: 3,
            maxZoom: 18,
            attribution: '&copy; Amap'

        }).addTo(map);
    }
    else {
        pos = [39.96, 116.36];
        map = Lmap.map('map').setView(pos, 15);
        // zoom: 0 ~ 19
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 3,
            maxZoom: 18,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
    var marker = L.marker(pos).addTo(map);
}

function checkLocationInCN() {
    const timeout = 500;
    var inited = false;
    const timeoutId = setTimeout(() => {initMap(false); inited = true}, timeout);

    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            if(inited) {
                return;
            }
            clearTimeout(timeoutId);
            if(data.country === 'CN') {
                initMap(true);
            } else {
                initMap(false);
            }
        })
        .catch(() => {
            if(inited) {
                return;
            }
            clearTimeout(timeoutId);
            initMap(false);
        });
}

window.addEventListener('load', function() { 
    checkLocationInCN();
})

