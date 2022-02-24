mapboxgl.accessToken = 'pk.eyJ1IjoiaHVlc2l0bzAwMSIsImEiOiJja3ozaWd0c3kwNzEwMm9ueGdlZGN4dHhnIn0.We8V75TmffUtG2rAmmdlSQ';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
})