const request = new XMLHttpRequest();

// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3;



// path to csv data
let path = "CSV/query2015_2017.csv";
// global variables
let markers = L.featureGroup();

// initialize
$( document ).ready(function() {
	createMap(lat,lon,zl);
	readCSV(path);
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

// function to read csv data
function readCSV(path){
	Papa.parse(path, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			
			// map the data
			mapCSV(data);

		}
	});
}

function panToQuake(index){
    // zoom to level 17 first
    map.setZoom(15);
    // pan to the marker
    map.panTo(markers.getLayers()[index]._latlng);
}

function mapCSV(data){
	//scaling radius
	let RMax = 15;
	let RMin = 2;

	var column = [];
    for(var i=0; i<data.data.length-2; i++){
        column.push(parseFloat(data.data[i].mag));
    }

	let Max = Math.max(...column);
	let Min = Math.min(...column);

    
	// loop through each entry
	
	data.data.forEach(function(item,index){		
		// create marker
		if(index<=1900){
			//calculate radius
			let percent = (item.mag - Min) / (Max - Min);
			let rad = percent * (RMax - RMin) + RMin;
			// circle options
			let circleOptions = {
				radius: rad,
				weight: 1,
				color: 'white',
				fillColor: 'dodgerblue',
				fillOpacity: .75
			}
			
			let marker = L.circleMarker([item.latitude,item.longitude],circleOptions).on('mouseover',function()
			{
				this.bindPopup(`<div>Location: ${item.place}</div><br><div>Time: ${item.time}</div><br><div>Magnitude: ${item.mag}</div>`).openPopup();
			})


			// add marker to featuregroup
			markers.addLayer(marker)

			// add entry to sidebar
			$('.sidebar').append(
				// `<img src="${item.thumbnail_url}" onmouseover="panToImage(${index})">`
				`<div class = "sidebartitle" onclick="panToQuake(${index})"> ${item.place}<br>${item.time}</div>`
			)
		}
	});
	

	// add featuregroup to map
	markers.addTo(map)

	// fit markers to map
	map.fitBounds(markers.getBounds())
    function panToQuake(index){
	// zoom to level 17 first
	map.setZoom(17);
	// pan to the marker
	map.panTo(markers.getLayers()[index]._latlng);
}

}