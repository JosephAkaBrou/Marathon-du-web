var element = document.getElementById('reload-btn');

list = [1034, 3, 3947, 934]
list2 = ['toto', 'bonjour', 'aurevoir', 'soulage']

function loadData(){
  xhttp = new XMLHttpRequest();
  //xhttp.onreadystatechange = drawLines;
  xhttp.open("GET", "data/data.json", true);
  xhttp.responseType = 'json';
  xhttp.send();
}


element.onclick = function() {
    elem = document.getElementById('main-indicator')
    children = elem.children
    //console.log(children)
	$.each( children, function( key, value ) {
	  	children[key].children[0].children[1].innerHTML = list[key];
	  	children[key].children[0].children[2].innerHTML = list2[key];
	});
};


