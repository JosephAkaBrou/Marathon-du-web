




function style(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'orange',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: "white",
        "fillOpacity": 0
    };
}



function init(map){
    
    img = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlby1vcmlvbCIsImEiOiJjazhvYTQ1YWgwMGc1M21sbTVjM3BqeWM4In0.BB4gDDk54hPCKi_FfpOXtw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);
    region(map)
}



function goback(map,geojson){
    geojson.clearLayers();
    map.setView([46.83 ,3.642  ], 4.83);
    region(map);
}





function region(map){
    ///////////////////////////////////////////////////////////////
    var info = L.control();
    
    info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};
        
    info.update = function (props) {
		this._div.innerHTML = (props ? '<b> Nom : ' + props.nom+'':'');
	};
    
    info.addTo(map);
    ///////////////////////////////////////////////////////////////
    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: 'white',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
        info.update(layer.feature.properties);
    };

    function resetHighlight(e) {
            geojson.resetStyle(e.target);
            info.update();
    }
    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
        console.log(e.target.feature.properties.nom)
        geojson.clearLayers()
        commune(map,e.target.feature.properties.nom)
    }
    ///////////////////////////////////////////////////////////////
    geojson = L.geoJson(dep, {
		onEachFeature: onEachFeature,
        style: style
	}).addTo(map);
    
    function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}
    ///////////////////////////////////////////////////////////////
}
function commune(map,name){
        name = name.toLowerCase();
        name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        console.log("departements/"+name+"/communes")
        fetch("departements/"+name+"/communes")
              .then((response) => {
                return response.json();
              })
              .then((data) => {
            ///////////////////////////////////////////////////////////////
            var info = L.control();

            info.onAdd = function (map) {
                this._div = L.DomUtil.create('div', 'info');
                this.update();
                return this._div;
            };

            info.update = function (props) {
                this._div.innerHTML = (props ? '<b> Nom : ' + props.nom+'':'');
            };

            info.addTo(map);
            ///////////////////////////////////////////////////////////////
                
            
            function highlightFeature(e) {
                    var layer = e.target;

                    layer.setStyle({
                        weight: 5,
                        color: 'white',
                        dashArray: '',
                        fillOpacity: 0.7
                    });

                    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                        layer.bringToFront();
                    }
                    info.update(layer.feature.properties);
                };

                function resetHighlight(e) {
                        geojson.resetStyle(e.target);
                        info.update();
                }
                function zoomToFeature(e) {
                    map.fitBounds(e.target.getBounds());
                    console.log(e.target.feature.properties.nom)
                }
                ///////////////////////////////////////////////////////////////
                

                geojson = L.geoJson(data, {
                    onEachFeature: onEachFeature,
                    style: style
                }).addTo(map);

                function onEachFeature(feature, layer) {
                    layer.on({
                        mouseover: highlightFeature,
                        mouseout: resetHighlight,
                        click: zoomToFeature
                    });
                }


            });
         };
var map = L.map('map').setView([46.83 ,3.642  ], 4.83);
var geojson;
init(map);
