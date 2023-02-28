const timeForm = document.getElementById("form");

const startTimeInput = document.getElementById("from");

const endTimeInput = document.getElementById("to");

var map = L.map('map').setView([51.0448, -114.064], 11);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);

var houseIcon = L.icon({
    iconUrl: 'assets/home.png',

    iconSize: [50, 50], // size of the icon
    iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -30] // point from which the popup should open relative to the iconAnchor
});

var oms = new OverlappingMarkerSpiderfier(map);

var pop = new L.Popup();
var popup = new L.Popup();

oms.addListener('click', function (marker) {
    pop.setContent(marker.desc);
    pop.setLatLng(marker.getLatLng());
    map.openPopup(pop);
});

oms.addListener('spiderfy', function (markers) {
    map.closePopup();
});

const markers = L.markerClusterGroup();

timeForm.addEventListener("submit", function updateTimeRange(e) {
    markers.clearLayers();

    var geojsonUrl = "https://data.calgary.ca/resource/c2es-76ed.geojson?$where=issueddate > '"+startTimeInput.value+"' and issueddate < '"+endTimeInput.value+"'";
    fetch(geojsonUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Add GeoJSON layer with markers and popups
        L.geoJSON(data, {
          pointToLayer: function (feature, latlng) {
            var properties = feature.properties;
            var popupContent = '<h3><b>Issued Date: </b>' + properties.issueddate + '</h3>' +
                               '<p><b>Work Class Group: </b>' + properties.workclassgroup + '</p>'+
                               '<p><b>Contractor Name: </b>' + properties.contractorname + '</p>'+
                               '<p><b>Community Name: </b>' + properties.communityname + '</p>'+
                               '<p><b>Original Address: </b>' + properties.originaladdress + '</p>';
            return markers.addLayer(L.marker(latlng, {
                icon: houseIcon
            }).bindPopup(popupContent));
          },
        }).addTo(map);
      });
    e.preventDefault();
});

map.addLayer(markers);
oms.addMarker(markers);