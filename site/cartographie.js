




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
		id: 'mapbox/streets-v9',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);
    region(map)
}



function goback(map,geojson){
    geojson.clearLayers();
    try { 
        geojson2.clearLayers()
    }
    catch{}
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
        //map.fitBounds(e.target.getBounds());
        try { 
            geojson2.clearLayers()
        }
        catch{}
        map.fitBounds(e.target.getBounds());
        region(map)
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
        name = name.replace("'","-");
        name = name.split(' ').join('-');
        name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        var data = function () {
                var jsonTemp = null;
                $.ajax({
                    'async': false,
                    'url': "departements/"+name+"/communes",
                    'success': function (data) {
                        jsonTemp = data;
                    }
                });
                return jsonTemp;
            }(); 
            data = JSON.parse(data);
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
                }
                ///////////////////////////////////////////////////////////////
                

                geojson2 = L.geoJson(data, {
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
         };


function search(map,geojson){
    var keys = [];
    var s = "Valeins";
    for(var k in dep.features) keys.push(dep.features[k].properties.nom);
    var departement = rummage(keys,s);
    if(departement.localeCompare("None") != 0){
        try { 
            geojson2.clearLayers();
        }
        catch{}
        var layer;
        commune(map,departement);
        for( var sub in geojson2._layers){
            if(geojson2._layers[sub].feature.properties.nom == s){
                layer = geojson2._layers[sub]._bounds
                break;
            }
        }
        console.log("region",layer)
        map.fitBounds(layer);
    }
}
    

function rummage(keys,s){
        for(var k in keys){
            keys[k] = keys[k].toLowerCase();
            keys[k] = keys[k].replace("'","-");
            keys[k] = keys[k].split(' ').join('-');
            keys[k] = keys[k].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            var data = function () {
                var jsonTemp = null;
                $.ajax({
                    'async': false,
                    'url': "departements/"+keys[k]+"/communes",
                    'success': function (data) {
                        jsonTemp = data;
                    }
                });
                return jsonTemp;
            }(); 
            data = JSON.parse(data);
            data = data.features
            for(var sub in data){
                if( s.localeCompare(data[sub].properties.nom) == 0){
                    return keys[k]
                };
            }
            return "None"
                    
                
           
        }
        
}

var map = L.map('map').setView([46.83 ,3.642  ], 4.83);
var geojson;
var geojson2;
init(map);
