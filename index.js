      
	function getDiagnost(){
		var top = document.getElementById("main1");
      var nested = document.getElementById("form1");

       top.removeChild(nested); 
       top.innerHTML = "<h1 style='text-align: center'>Diagnostic</h1><br><br>"
       var node = document.createElement("div");                 // Create a <li> node
		node.setAttribute("class","row container-fluid bg-light")
		node.setAttribute("id","diagno")         // Create a text node
                              // Append the text to <li>
document.getElementById("main1").appendChild(node);   

indic = "<br><br>"
for (var i = 0; i < 9; i++) {
	next_indic = "<div class='col-sm-4 ' style='margin-bottom:15px;margin-top:15px;'><div class='card shadow' style='background-color: #D8D8D8;'>"+
	"<div class='card-body rounded border-secondary' >"+
"<span class='card-text'>Indicateur "+ i +"</p></div></div></div>"
	indic = indic + next_indic
}

downl = "<br><br><div class='col-sm-4 text-center'style='width: 21.5em;margin:15px auto;'>"+
"<button type='button' class='btn btn-lg btn-success'>Télécharger l'export PDF </button></div>"

document.getElementById("diagno").innerHTML = indic + downl
top.innerHTML += "<br><br><h2 style='text-align: center'>Prédiction</h1><br><br>"
var node2 = document.createElement("div");  
var node3 = document.createElement("div")
node2.setAttribute("class","row")
node3.setAttribute("id","predict")
node3.setAttribute("class","card")               // Create a <li> node
         // Create a text node
                              // Append the text to <li>
node2.appendChild(node3);  
document.getElementById("main1").appendChild(node2); 

   // Append <li> to <ul> with id="myList"

       


pred = ""
for (var i = 0; i < 3; i++) {
	/*next_pred = "<div class='card border-warning mb-4' style='max-width: 18rem;margin: 15px''>"+
  "<div class='card-body'>"+
    "<p class='card-text'> Indicateur "+ i +" !  | Attention dans quelques jours les problemes vont arriver ! </p>"+
  "</div></div>" */


  next_pred =  "<div class='row'><div class='card col-md-' style='margin-bottom:15px'><div class='card-body'>"+
        "This is some text within a card body.</div></div>"+
        "<span class='text-center col-6 ' style='padding-top: 15px;'> Attention ceci est une mise en garde ! Problems are coming ! </span></div><div></div>"

	pred = pred + next_pred
}
console.log(pred)
//https://giphy.com/gifs/BM0NZ2IUusz8NsAIFj/html5
document.getElementById("main2").innerHTML = pred
 top = document.getElementById("main2");
top.innerHTML += "<br><div class='text-center'><br>"+
    	"<h1> ALLEZ PLUS LOIN AVEC CARTOSANTE </h1><br>"+
    	"<a href='https://sirse.atlasante.fr/#c=indicator' target='_blank'>"+
    	"<img src='https://media.giphy.com/media/BM0NZ2IUusz8NsAIFj/giphy.gif' /></a></div>"

//top.innerHTML = "<div class='d-flex justify-content-between'>"+indic+"</div>"
	}
                                // Append the text to <li>
//document.getElementById("id1").appendChild(node);     // Append <li> to <ul> with id="myList

//document.getElementById("id1").innerHTML= "<div class='card'><div class='card-body'>This is some text within a card body.</div></div>"

top.innerHTML += "<div class='card flex-row flex-wrap'>"+
        "<div class='card-header border-0'>"+
            "<img src='https://media.giphy.com/media/BM0NZ2IUusz8NsAIFj/giphy.gif'>"+
        "</div>"+
        "<div class='card-block px-2'>"+
            "<h4 class='card-title'>Title</h4>"+
            "<p class='card-text'>Description</p>"+
            "<a href='#' class='btn btn-primary'>BUTTON</a>"+
        "</div><div class='w-100'></div>"+
        "<div class='card-footer w-100 text-muted'>FOOTER</div></div>"


