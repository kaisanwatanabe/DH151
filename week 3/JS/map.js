let data = [
	{
		'title':'Rome',
		'lat': 41.89,
		'lon': 12.48,
		'description':'Where Kai was born',
		'url':'https://i.natgeofe.com/n/3012ffcc-7361-45f6-98b3-a36d4153f660/colosseum-daylight-rome-italy.jpg'
	},
	{
		'title':'Albany',
		'lat': 37.89104030221305,
		'lon': -122.29525810690407,
		'description':'Kai\'s first home in the US',
		'url':'https://images1.loopnet.com/i2/BMchGLcabDN8kG3hkV3WzPY-36bYNZRdSYyQaz8zNw0/110/1398-Solano-Ave-Albany-CA-Other-1-Large.jpg'
	},
	{
		'title':'El Cerrito',
		'lat': 37.92540338602873,
		'lon': -122.30147229969775,
		'description':'Where Kai lived during elementary school',
		'url':'https://upload.wikimedia.org/wikipedia/commons/1/12/Cerrito_Theater_San_Pablo_Avenue.jpg'
	},
	{
		'title':'Tokyo',
		'lat': 35.6762,
		'lon': 139.6503,
		'description':'This is where Kai\'s relatives live. He lived there with them whenever he went back to Japan',
		'url':'https://savvytokyo.scdn3.secure.raxcdn.com/app/uploads/2017/06/iStock-625268272-e1498458014163-790x445.jpg'
	},
	{
		'title':'LA',
		'lat': 34.06427863419519,
		'lon': -118.45295907294567,
		'description':'Where Kai currently lives',
		'url':'https://ca-times.brightspotcdn.com/dims4/default/d585eaf/2147483647/strip/true/crop/2000x1125+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff5%2Fe4%2Fd3157ef381654fecf68f916e2a2e%2Fla-fi-hp-expensive-rent-westwood-pic1-20180929'
	}
]
let myMarkers = L.featureGroup();
let lineContainer = Array();

let map = L.map('map').setView([data[0].lat,data[0].lon], 17);
data.forEach(function(item, index){

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	let marker = L.marker([item.lat,item.lon]).addTo(map)
			.bindPopup(`<h2>${item.title}</h2><div>${item.description}</div><img src="${item.url}" width = "100%">`)
			.openPopup();	

	lineContainer.push(marker.getLatLng());
	myMarkers.addLayer(marker);

	$(".footingbarcontainer").append(`<div class = "footingbartitle" onclick="flytoIndex(${index})"> ${item.title}</div>`);

	let polyLine = L.polyline(lineContainer, {color: 'rgb(235, 255, 255)'}).addTo(map);

});

myMarkers.addTo(map);

let layers = {
	"My Markers": myMarkers
}

L.control.layers(null,layers).addTo(map);

map.fitBounds(myMarkers.getBounds());

function flytoIndex(index){
	map.flyTo([data[index].lat,data[index].lon], 17);
}
