
import * as route from './data.js'
import { layers } from './layer.js'
import { showSearch } from './connect.js';
var code = ["12d", "12l", "12g", "03a", "02b", "01c", "10h", "44"]
//get the keys
// var keys =Object.keys(Alllayers);  

var count; // for the overlap method in scan

var showLayers={

  
}

var baseLayer = {
  "Scan 1km around Destination" : osm
}

 class Scan {

  constructor (lng, lat){

    this.lng = lng;
    this.lat = lat;
    
  };

  async scan1km(){
        for (let i =0; i < route.geo.length; i++) {
        count = i;
        var check = this.overlap();
        if(check){
          showLayers[await showSearch(code[i])] = layers[i];
      }
    }
    L.control.layers(baseLayer, showLayers).addTo(map);
  }

  overlap(){

    var circle = turf.circle([this.lng , this.lat], 1, {units :'kilometers'});
    var lstring = route.geo[count].features[0].geometry.coordinates;
    var line = turf.lineString(lstring);
    return turf.booleanIntersects(line, circle);

  }
}

L.Control.geocoder({
  defaultMarkGeocode: false
})
  .on('markgeocode', function(e) {
      var bbox = e.geocode.bbox; 
      var center = bbox.getCenter();
      
      L.marker(center).addTo(map);
      const scan = new Scan(center.lng, center.lat);
      scan.scan1km();
  })
  .addTo(map);

 
