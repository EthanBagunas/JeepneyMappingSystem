

var redIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  var map = L.map('map').setView([10.2945, 123.8811], 13);
  map.on('locationfound', function(e) {
    // Create a marker at the found location
    var marker = L.marker(e.latlng, {icon: redIcon}).addTo(map);
  });
  
  var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  

  L.control.locate().addTo(map);
  const button= document.getElementById('getlocation')

 function gotLocation(position ){
     const lat= position.coords.latitude
     const long= position.coords.longitude
     L.marker([lat, long]).addTo(map)
     console.log(lat, long);
     
  } 

  function notget(){
    console.log("There was no data available")
  }
  
  button.addEventListener('click', async ()=> {
    navigator.geolocation.getCurrentPosition(gotLocation, notget, {enableHighAccuracy: true})     
  })  

  



  


  
  
  
