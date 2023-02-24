var map = L.map('map').setView([51.0448, -114.064], 11);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);

var houseIcon = L.icon({
    iconUrl: 'assets/home.png',

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});

var oms = new OverlappingMarkerSpiderfier(map);

var popup = new L.Popup();
oms.addListener('click', function(marker) {
  popup.setContent(marker.desc);
  popup.setLatLng(marker.getLatLng());
  map.openPopup(popup);
});

oms.addListener('spiderfy', function(markers) {
    map.closePopup();
  });

const markers = L.markerClusterGroup();

var geojsonLayer = L.geoJson.ajax("https://data.calgary.ca/resource/c2es-76ed.geojson",
{
    dataType:"json",

    style: function(feature) {  
        return{
            color: '#000',
            weight: 0.5
        }
    },

    pointToLayer: function(geoJsonPoint, latlng) {
        return markers.addLayer(L.marker(latlng, {
            icon: houseIcon
        }));
    }
}).addTo(map);

map.addLayer(markers);
oms.addMarker(markers);
map.fitBounds(markers.getBounds());