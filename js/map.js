function initialize() {
var mapOptions = {
  center: new google.maps.LatLng(58.405, 15.640),
  zoom: 13
};
var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);