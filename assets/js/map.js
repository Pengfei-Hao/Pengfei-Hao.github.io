
var pos;
var map;
function fetchWithTimeout(url, timeout) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    return fetch(url, { signal: controller.signal, mode: 'no-cors' }).finally(() => clearTimeout(timeoutId));
}

function initMap(altMap = false) {
    if (altMap) {
        pos = [39.9615, 116.366];
        map = L.map('map').setView(pos, 15);
        L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
            subdomains: ['1', '2', '3', '4'],
            minZoom: 1,
            maxZoom: 19,
            attribution: '&copy; Amap'

        }).addTo(map);
    }
    else {
        pos = [39.96, 116.36];
        map = L.map('map').setView(pos, 15);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 1,
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
    var marker = L.marker(pos).addTo(map);
}

initMap(true);
var timeout = 1000;
// fetchWithTimeout('https://www.google.com/', timeout)
//     .then(response => {
//         if (response.ok) {
//             initMap();
//             console.log("ok")
//         } else {
//             initMap(true);
//             console.log("err", response)
//         }
//     })
//     .catch(error => {
//         initMap(true);
//         console.log("err2")
//     });     
