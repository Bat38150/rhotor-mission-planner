
const map = L.map('map').setView([45,2],6)

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
maxZoom:19
}).addTo(map)

const drawnItems = new L.FeatureGroup()
map.addLayer(drawnItems)
