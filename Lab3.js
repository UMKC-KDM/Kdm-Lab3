$("#ClickButton").on("click", function () { 
    
      var City = document.getElementById("Uname1").value;

var geocodingAPI="http://api.openweathermap.org/data/2.5/weather?q="+City+"";

$.getJSON(geocodingAPI, function (json) {

  var   WeatherInfo = json.weather[0].description;
   var lat = json.coord.lat;
   var lang =json.coord.lon
   
    localStorage.setItem("WeatherInfo22", WeatherInfo);
   localStorage.setItem("lat22", lat);
 localStorage.setItem("lang22", lang);

    
    
$('#address').text(WeatherInfo);

    initialize();
    
});



function initialize() {
   
    var lat1=localStorage.getItem("lat22");
    var lang1=localStorage.getItem("lang22");
    var myLatlng = new google.maps.LatLng(lat1,lang1);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var contentString = localStorage.getItem("WeatherInfo22");;

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Weather'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
    
    
   });
    