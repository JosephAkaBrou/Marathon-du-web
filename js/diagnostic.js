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

      var navbar = document.getElementById('')

       top.removeChild(nested); 
      top.innerHTML = "<br><a href='index.html'><img src='https://www.atlasante.fr/media/site/gen/atlasante/logo-atla-sant-long@2x.png' ></a><h1 style='text-align: center'>Diagnostic de "+ input +"</h1><br><br>"
  
  console.log(" LOL " + Math.random() + Math.random())
indic = "<br><br>"
i = 0
condition_tab = [Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),
Math.random(),Math.random(),Math.random(),Math.random(),
Math.random(),Math.random(),Math.random()]
//condition_tab = [5,1,2,-4,5,-7,9,0,1,4,0,-7]
var warning_map = new Map();
var good_map = new Map();
indicators.forEach(function(elem) { 
      list = []
      statut = "grey"
      condition = condition_tab[i]
      if (condition >  0.3) {
        statut = "green"
        } else {
            statut = "orange"
      }
      
      if (statut == 'red' | statut == 'orange') {
        list = [statut,icones.get(elem)]
        warning_map.set(ind_names.get(elem),list)
      }      
      if (statut == "green") {
        list = [statut,icones.get(elem)]
        good_map.set(ind_names.get(elem),list)
      }

/*

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
; */

      /*  next_indic =      "<div class='card col-sm-4 w-25' style='margin:15px'>"+
        "<div class='card-img-top d-flex align-items-center bg-light style='background-color: #D8D8D8' '>"+
            "<div>"+
                "<img class='img-fluid' src="+ icone[i]+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
            "</div>"+
            "<p class='col p-2 m-0'>Indicateur "+ i + "</p>"+
       " </div>"+
 " </div>" */
	//indic = indic + next_indic
  i++; 
});

console.log(warning_map.size)
console.log(good_map.size)
 //top.innerHTML += 
    var good_node = document.createElement("div");                 // Create a <li> node
    good_node.setAttribute("class","container-fluid bg-light")
    good_node.setAttribute("id","good_diagno")         // Create a text node
                              // Append the text to <li>
document.getElementById("main1").appendChild(good_node); 

indic = "<br><h3> L'essentiel </h3><br>"
indic += "<div class='row' >"

good_map.forEach(function(valeur, clé) {

          next_indic = 
            "<div class='col-md-6 col-lg-6 col-12' style='margin-bottom:15px;margin-top:15px;'>"+
              "<div class='card-img-top d-flex align-items-center border-secondary rounded shadow-sm' style='background-color: #D8D8D8' '>"+
                  "<div>"+
                    "<img class='img-fluid' src="+  valeur[1]+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
                  "</div>"+
                  "<p class='col p-2 m-0' text-center> "+ clé  + "</p>"+
                            "<svg height='50' width='70'><circle id="+ 'id'+i+" cx='40' cy='25' r='10'  stroke-width='3' fill="+ valeur[0] +" /></svg>"+
              "</div>"+
            "</div>"
          console.log("MDR")

  indic = indic + next_indic
  i++;
})

indic += "<div/>"

document.getElementById("good_diagno").innerHTML = indic 

    var warning_diagno = document.createElement("div");                 // Create a <li> node
    warning_diagno.setAttribute("class","container-fluid bg-light")
    warning_diagno.setAttribute("id","warning_diagno")         // Create a text node
                              // Append the text to <li>

document.getElementById("main1").appendChild(warning_diagno);



indic = "<br><br><h3> Mes pistes d'action </h3><br>"
indic += "<div class='row' >"

warning_map.forEach(function(valeur, clé) {
          next_indic = 
            "<div class='col-md-6 col-lg-6 col-12' style='margin-bottom:15px;margin-top:15px;'>"+
              "<div class='card-img-top d-flex align-items-center border-secondary rounded shadow-sm' style='background-color: #D8D8D8' '>"+
                  "<div>"+
                    "<img class='img-fluid' src="+  valeur[1]+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
                  "</div>"+
                  "<p class='col p-2 m-0' text-center> "+ clé  + "</p>"+
                            "<svg height='50' width='70'><circle id="+ 'id'+i+" cx='40' cy='25' r='10'  stroke-width='3' fill="+ valeur[0] +" /></svg>"+
              "</div>"+
            "</div>"
  indic = indic + next_indic
  i++;
})

indic += "<div/>"


document.getElementById("warning_diagno").innerHTML = indic 


top.innerHTML += "<br><div class='col-sm-4 text-center'style='width: 21.5em;margin:15px auto;'>"+
"<button type='button' class='btn btn-lg btn-success'>Télécharger l'export PDF </button></div>"

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

       


 voisin = "<br><br><h2 style='text-align: center'> Quelques communes semblables </h1><br>"
    catalogue[input]['Proche_voisin'].forEach(function(valeur) {
      console.log(valeur)
      next_voisin =  
          "<div class='row justify-content-center'>"+
              "<div class='col-8 d-flex align-items-center border-secondary rounded shadow-sm' style='margin:10px;background-color: #D8D8D8' '>"+
                  "<div class='col-4'>"+
                    "<p class='p-3 m-0 font-weight-bold'>  "+ valeur + "</p>"+
                  "</div>"+
                  "<div class='col-4'>"+
                    "<p class='p-3 m-0'>  "+ catalogue[valeur]['nom_departement'] + "</p>"+
                  "</div>"+

                  "<div class='col-4'> "+
                    "<button class='col p-1 m-2 btn btn-lg btn-info' onClick='getDiagnost('"+valeur+"')'>Diagnostic</button>"+
                  "</div>"+

//<div class="col-sm-4 text-center" style="width: 21.5em;margin:15px auto;"><button type="button" class="btn btn-lg btn-success">Télécharger l'export PDF </button></div>

                  "<span class='dot' style ='background-color:green'></span>"+
              "</div>"+
          "</div>"+
      "<div>"+
    "</div>"

      voisin = voisin + next_voisin
    })

document.getElementById("main2").innerHTML = voisin
 top = document.getElementById("main2");

fetch("https://api-adresse.data.gouv.fr/search/?q="+input+"&type=street")
  .then(response => response.json())
  .then(data => {
    data = data.features[0].geometry.coordinates
  top.innerHTML += "<br><div class='text-center'><br>"+
    	"<h1> ALLEZ PLUS LOIN AVEC CARTOSANTE </h1><br>"+
    	"<a href='https://sirse.atlasante.fr/#c=indicator' target='_blank'>"+
    	"<img style='width: 60%;height:60%' src='https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/"+data[0]+","+data[1]+",13,0.00,0.00/1000x600@2x?access_token=pk.eyJ1IjoidGhlby1vcmlvbCIsImEiOiJjazhvYTQ1YWgwMGc1M21sbTVjM3BqeWM4In0.BB4gDDk54hPCKi_FfpOXtw' ><br><br>"
});
     


	}




