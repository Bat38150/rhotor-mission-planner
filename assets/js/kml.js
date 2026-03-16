
function exportKML(){

let layers = drawnItems.getLayers()

let kml=""

layers.forEach(layer=>{

let coords=""

if(layer instanceof L.Polyline){

layer.getLatLngs().forEach(p=>{
coords+=p.lng+","+p.lat+",0 "
})

kml+=`
<Placemark>
<LineString>
<coordinates>
${coords}
</coordinates>
</LineString>
</Placemark>
`

}

if(layer instanceof L.Polygon){

layer.getLatLngs()[0].forEach(p=>{
coords+=p.lng+","+p.lat+",0 "
})

kml+=`
<Placemark>
<Polygon>
<outerBoundaryIs>
<LinearRing>
<coordinates>
${coords}
</coordinates>
</LinearRing>
</outerBoundaryIs>
</Polygon>
</Placemark>
`

}

})

let finalKML=`<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
${kml}
</Document>
</kml>`

let blob=new Blob([finalKML])

let a=document.createElement("a")

a.href=URL.createObjectURL(blob)

a.download="mission_DJIpilot.kml"

a.click()

}
