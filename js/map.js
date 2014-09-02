var map;
var marker;

var myLatlng = new google.maps.LatLng(58.405000000000000, 15.64000000000000); 
var centerLatlng = new google.maps.LatLng(58.405, 15.640);


function initialize() { 
  var mapOptions = {
    zoom: 13,
    center: centerLatlng
  }

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // does not update the global variable, why???
      console.log(myLatlng.toString());

    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
  console.log(myLatlng.toString());

  marker = new google.maps.Marker({
      map: map,
      draggable:true,
      animation: google.maps.Animation.DROP,
      position: myLatlng
  });

  var contentString = '<div id="content">'+
    '<div id="bodyContent">'+
    '<p>Din bostad</p>'+
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  google.maps.event.addListener(marker, 'mouseup', updatePos);
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    console.log('Error: The Geolocation service failed.');
  } else {
    console.log('Error: Your browser doesn\'t support geolocation.');
  }
  myLatlng = new google.maps.LatLng(58.405, 15.640); 
}

function updatePos() {
  myLatlng = new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng());
}

google.maps.event.addDomListener(window, 'load', initialize);