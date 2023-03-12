# Project 3 & 4

### ENGO 651 - Adv. Topics on Geospatial Technologies


For this project I will built a web application which will show a map of City of Calgary. I'll use leafLet.js to build this web application. Will use time range filter to search geoJson data on the Map and a toggle button to turn on or off a map Mapbox layer. All the geoJson data are taken from Calgary Open API.


[leaflet](https://leafletjs.com/download.html)

#### URL

[Building Permits GeoJson URL](https://data.calgary.ca/resource/c2es-76ed.geojson)

##### Dataset

[Building Permits](https://data.calgary.ca/Business-and-Economic-Activity/Building-Permits/c2es-76ed)
[2017 Traffic Incidents dataset](https://data.calgary.ca/Transportation-Transit/Traffic-Incidents-Archive-2017/himp-urp7/data)

##### Plugins

[leaflet-ajax](https://github.com/calvinmetcalf/leaflet-ajax)<br>
[OverlappingMarkerSpiderfier-Leaflet](https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet)<br>
[Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)

#### Mapbox

[API](https://api.mapbox.com/styles/v1/sharifruman/clf59c0vo002e01pw08c580us.html?title=view&access_token=pk.eyJ1Ijoic2hhcmlmcnVtYW4iLCJhIjoiY2xmNTV5N3JqMGZ0MzNxcXJ1amJrM3U5eSJ9.o6ps2oN5TcXgMKy5ArEJWA&zoomwheel=true&fresh=true#9.1/51.0876/-113.778)<br>
Style URL: mapbox://styles/sharifruman/clf59c0vo002e01pw08c580us

##### Files:
 1. assets
    1. style.css
    2. map.js
    3. home.png
    4. home.svg
2. dist
    1. leaflet.ajax.js
    2. leaflet.ajax.min.js
    3. leaflet.markercluster-src.js
    4. MarkerCluster.css
    5. MarkerCluster.Default.css
3. calgary.json
4. index.html

##### Requirements Lab 3

- [x] Map: When a user visit the site, they should be taken to a page where they can see a map of the City of Calgary.
- [x] Search: Users should be able to search for the building permits that their issued dates are within certain date range. Users should be able to use a date range picker widget to select the date range for the search. Please feel free to choose an existing date range picker widget you like. After performing the search, your webite should display the matching results as markers on a Leaflet map.
- [x] Identify: Users should be able to click on a marker on the map, a pop-up box should appear, and showing the following details about the building permit: issueddate, workclassgroup, contractorname, communityname and originaladdress.
- [x] Sometimes there will be overlapping markers, i.e., multiple building permits located at the same location. You need to develop an intuitive way allowing users to find the information about the building permit. Here is Leaflet Plug-in example you can use: https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet. If you have other ideas, feel free to try other ways.
- [x] Sometimes at certain zoom levels the Markers can get very close to each other, and the map are not visually appealing. You need to use a clustering plug-in to solve the issue. Here is an example plug-in you can try: https://github.com/Leaflet/Leaflet.markercluster. If you have other ideas, feel free to try other ways.
- [x] When a user search for a new date range, the map should be refreshed and display the new matching result.

##### Requirements Lab 3

- [x] Map: When a user visits the site, they should be able to toggle on/off the map layer you published above.
- [x] Map Design: 50% of the grade will be evaluated by your map design. You will need to explain what you have done to design a visually appealing map layer. Factors should be considered include the Components included (from an existing style), and the Radius, Color, Blur, Opacity, etc. from your uploaded dataset.