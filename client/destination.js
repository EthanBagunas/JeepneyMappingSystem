
import * as route from './data.js'
import { layers } from './layer.js'
import { showSearch } from './connect.js';
var code = ["12d", "12l", "12g", "03a", "02b", "01c", "10h", "44"]
//get the keys
// var keys =Object.keys(Alllayers);  

var count; // for the overlap method in scan
var list;

var showLayers={

  
}

var baseLayer = {
  "Available Routes" : osm
}

L.Control.geocoder({
  defaultMarkGeocode: false
})
  .on('markgeocode', function(e) {
      var bbox = e.geocode.bbox; 
      var center = bbox.getCenter();
      setAllPropertiesToNull(showLayers);
      L.marker(center).addTo(map);
      const scan = new Scan(center.lng, center.lat);
      scan.check();
  })
  .addTo(map);

  function setAllPropertiesToNull(obj) {
    
    Object.keys(obj).forEach(key => delete obj[key]);
    console.log(obj);
  }
 

  class Scan {

    constructor (lng, lat){
  
      this.lng = lng;
      this.lat = lat;
      
    };
  
    async check(){
      var obj= await this.scan1km()
      if (Object.keys(obj).length >0) {
        list =L.control.layers(baseLayer, showLayers).addTo(map);
      } else {
      
      alert("No nearby routes 1km from the desctination !!!")
      }
    }
  
    async scan1km(){
          for (let i =0; i < route.geo.length; i++) {
          count = i;
          var check = this.overlap();
          if(check){
            showLayers[await showSearch(code[i])] = layers[i];
        }
      }
  
      return showLayers
    }
  
    overlap(){
  
      var circle = turf.circle([this.lng , this.lat], 1, {units :'kilometers'});
      var lstring = route.geo[count].features[0].geometry.coordinates;
      var line = turf.lineString(lstring);
      return turf.booleanIntersects(line, circle);
  
    }
  }
