




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

function trt(text){
    text= text.toLowerCase();
    text = text.replace("'","-");
    text = text.split(' ').join('-');
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return text
}


function search(map,geojson){
    var keys = [];
    var s = trt("hèRault");
    var departement;
    var stop = 0;
    for(var k in dep.features){
        keys.push(dep.features[k].properties.nom)
        if(trt(dep.features[k].properties.nom) == s){
            stop = 1;
            departement = trt(dep.features[k].properties.nom);
        }
    };
    if(stop == 0){                          
        departement = rummage(keys,s);
    }
    if(stop == 1){
        try { 
            geojson2.clearLayers();
        }catch{}
        commune(map,departement);
        map.fitBounds(geojson2.getBounds());
    }
    else if(departement != "None"){
        try { 
            geojson2.clearLayers();
        }
        catch{}
        var layer;
        commune(map,departement);
        for( var sub in geojson2._layers){
            if(trt(geojson2._layers[sub].feature.properties.nom) == s){
                layer = geojson2._layers[sub]._bounds
                break;
            }
        }
        map.fitBounds(layer);
        
    }
}
    

function rummage(keys,s){
        for(var k in keys){
            keys[k] = trt(keys[k]);
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
                if( s == trt(data[sub].properties.nom)){
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
