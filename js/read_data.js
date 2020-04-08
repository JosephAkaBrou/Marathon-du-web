function getXMLHttpRequest() {
    var xhr = null;
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest(); 
        }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }
    return xhr;
}

catalogue = []

function loadData() {
      var xhr = getXMLHttpRequest();
      // on réagit à l'événement onreadystatechange
      xhr.onreadystatechange = function() {
        // test du statut de retour de la requête AJAX
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          // on désérialise le catalogue et on le sauvegarde dans une variable
          catalogue = JSON.parse(xhr.responseText.replace(/\bNaN\b/g, null));
          // on lance la fonction de callback avec le catalogue récupéré
          //callback();
        }
      }
      xhr.open("GET", "Stats/data.json", true);
      xhr.send();
      return catalogue
}

