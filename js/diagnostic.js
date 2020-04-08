 function check_input(){
  input = document.getElementById('research').value
  console.log(input)
    if(input.length > 1 | input.value == "undefined"){
      getDiagnost(input)
    }else{
     
        alert("ENTRER UN NOM DE VILLE ! ")
    }

 }           
	function getDiagnost(input){
		var top = document.getElementById("main1");
      var nested = document.getElementById("form1");

       top.removeChild(nested); 
       top.innerHTML = "<br><h1 style='text-align: center'>Diagnostic de "+ input +"</h1><br><br>"
       var node = document.createElement("div");                 // Create a <li> node
		node.setAttribute("class","row container-fluid bg-light")
		node.setAttribute("id","diagno")         // Create a text node
                              // Append the text to <li>
document.getElementById("main1").appendChild(node);   
  
indic = "<br><br>"
i = 0
condition_tab = [5,1,2,-4,5,-7,9,0,1,4,0,-7]
var warning_map = new Map();

indicators.forEach(function(elem) { 
      list = []
        statut = "grey"
      condition = condition_tab[i]
      if (condition >  0) {
        statut = "green"
        } else if ( condition < 0){
          statut = "red"
          } else {
            statut = "orange"
      }
      id = "id"+i
      if (statut == 'red' | statut == 'orange') {
        list = [statut,icones.get(elem)]
        warning_map.set(ind_names.get(elem),list)
      }



next_indic = 

  "<div class='col-sm-4 ' style='margin-bottom:15px;margin-top:15px;'>"+
    "<div class='card-img-top d-flex align-items-center border-secondary rounded shadow-sm' style='background-color: #D8D8D8' '>"+
        "<div>"+
          "<img class='img-fluid' src="+ icones.get(elem)+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
        "</div>"+
        "<p class='col p-2 m-0' text-center> "+ ind_names.get(elem) + "</p>"+
                  "<svg height='50' width='80'><circle id="+ 'id'+i+" cx='50' cy='25' r='10'  stroke-width='3' fill="+ statut +" /></svg>"+
    "</div>"+
  "</div>"
;

      /*  next_indic =      "<div class='card col-sm-4 w-25' style='margin:15px'>"+
        "<div class='card-img-top d-flex align-items-center bg-light style='background-color: #D8D8D8' '>"+
            "<div>"+
                "<img class='img-fluid' src="+ icone[i]+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
            "</div>"+
            "<p class='col p-2 m-0'>Indicateur "+ i + "</p>"+
       " </div>"+
 " </div>" */



	indic = indic + next_indic
  i++;
});

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
    warning_map.forEach(function(valeur, clé) {
      

      console.log(warning_map.size)

      next_pred =  "<div class='row'>"+
                                        "<div class='card-img-top d-flex align-items-center border-secondary rounded shadow-sm col-sm-4' style='margin:10px;background-color: #D8D8D8' '>"+
                "<div>"+
                    "<img class='img-fluid' src="+ valeur[1]+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
                "</div>"+
                "<span class='dot' style ='background-color:green'></span>"+
                "<p class='col p-2 m-0' text-center>  "+ clé + "</p>"+
                "<svg height='50' width='100'><circle id="+ 'id'+i+" cx='50' cy='25' r='10'  stroke-width='3' fill="+ valeur[0] +" /></svg>"+"</div>"+
                                    "<span class='text-center col-6 ' style='padding-top: 45px;'> "+
                                      "Attention ceci est une mise en garde ! Problems are coming !"+
                                    "</span>"+
                              "</div>"+
                          "<div>"+
                    "</div>"




      pred = pred + next_pred
    })

document.getElementById("main2").innerHTML = pred
 top = document.getElementById("main2");

  top.innerHTML += "<br><div class='text-center'><br>"+
    	"<h1> ALLEZ PLUS LOIN AVEC CARTOSANTE </h1><br>"+
    	"<a href='https://sirse.atlasante.fr/#c=indicator' target='_blank'>"+
    	"<img src='https://media.giphy.com/media/BM0NZ2IUusz8NsAIFj/giphy.gif' /></a></div><br><br>"



	}




