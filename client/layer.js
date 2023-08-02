import * as route from './data.js'


export var layers = [

L.geoJSON(route.c12d, { color: 'magenta' }).openPopup(),
L.geoJSON(route.c12l, { color: 'cyan' }).openPopup(),
L.geoJSON(route.c12g, { color: 'black' }).openPopup(),
L.geoJSON(route.c03a, { color: 'red' }).openPopup(),
L.geoJSON(route.c02b, { color: 'blue' }).openPopup(),
L.geoJSON(route.c01c, { color: 'orange' }).openPopup(),
L.geoJSON(route.c10h, { color: 'green' }).openPopup(),
L.geoJSON(route.c44, {color :'brown'}).openPopup()

]
