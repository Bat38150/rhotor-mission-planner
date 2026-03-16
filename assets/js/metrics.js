
function updateMetrics(layer){

if(layer instanceof L.Polyline){

let coords = layer.getLatLngs().map(p=>[p.lng,p.lat])

let line = turf.lineString(coords)

let distance = turf.length(line,{units:"kilometers"})

document.getElementById("stats").innerHTML =
"Distance : "+distance.toFixed(2)+" km"

let speed = 5

let time = (distance*1000)/speed/60

document.getElementById("stats").innerHTML +=
"<br>Temps estimé : "+time.toFixed(1)+" min"

}

}
