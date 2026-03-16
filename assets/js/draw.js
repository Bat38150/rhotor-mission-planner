
const drawControl = new L.Control.Draw({

edit:{
featureGroup: drawnItems
},

draw:{
rectangle:false,
circle:false,
circlemarker:false,
marker:false,
polyline:true,
polygon:true
}

})

map.addControl(drawControl)

map.on(L.Draw.Event.CREATED,function(e){

let layer=e.layer

drawnItems.addLayer(layer)

updateMetrics(layer)

})
