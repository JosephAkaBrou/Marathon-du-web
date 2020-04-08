      
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
icone = ["./icone/biberon.svg","./icone/habitants.svg","./icone/habitants2.svg",
"./icone/hlm.svg","./icone/Médecin.svg","./icone/pollution.svg","./icone/recherche_emploi.svg",
"./icone/revenus.svg","./icone/under18.svg"]
indic = "<br><br>"
for (var i = 0; i < 9; i++) {
next_indic = "<div class='col-sm-4 ' style='margin-bottom:15px;margin-top:15px;'>"+
                     "<div class='card-img-top d-flex align-items-center border-secondary rounded shadow-sm' style='background-color: #D8D8D8' '>"+
            "<div>"+
                "<img class='img-fluid' src="+ icone[i]+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
            "</div>"+
            "<p class='col p-2 m-0' text-center> Indicateur "+ i + "</p>"+
       " </div>"+
                        "</div>"

      /*  next_indic =      "<div class='card col-sm-4 w-25' style='margin:15px'>"+
        "<div class='card-img-top d-flex align-items-center bg-light style='background-color: #D8D8D8' '>"+
            "<div>"+
                "<img class='img-fluid' src="+ icone[i]+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
            "</div>"+
            "<p class='col p-2 m-0'>Indicateur "+ i + "</p>"+
       " </div>"+
 " </div>" */



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


  next_pred =  "<div class='row'>"+
                    "<div class='card col-md-' style='margin-bottom:15px'>" +
                          "<div class='card-body'>"+
                                "This is some text within a card body.</div></div>"+
                                "<span class='text-center col-6 ' style='padding-top: 15px;'> "+
                                  "Attention ceci est une mise en garde ! Problems are coming !"+
                                "</span>"+
                          "</div>"+
                      "<div>"+
                "</div>"

  pred = pred + next_pred
}

document.getElementById("main2").innerHTML = pred
 top = document.getElementById("main2");

  top.innerHTML += "<br><div class='text-center'><br>"+
    	"<h1> ALLEZ PLUS LOIN AVEC CARTOSANTE </h1><br>"+
    	"<a href='https://sirse.atlasante.fr/#c=indicator' target='_blank'>"+
    	"<img src='https://media.giphy.com/media/BM0NZ2IUusz8NsAIFj/giphy.gif' /></a></div>"



	}




