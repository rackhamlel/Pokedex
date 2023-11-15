// Execute la requete vers l'api et retourne la réponse
function appelleAPI(url) {

    return fetch(url)

    .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de réseau');
        }
        return response.json();
    })
    .catch(error => {
        //console.error('Erreur :', error);
        throw error;
    });
}
function AfficherTout(){
    appelleAPI("http://127.0.0.1:5001/")
    .then(pokemonData => {

  














    let addcolonne = "<tbody>";
    let numImage = 0
    let imagePoke = "";
    for (let index = 0; index < pokemonData.length; index++) {
        numImage++

        /*let typepoke = "";
    switch (pokemonData[index].type){
        case (pokemonData[index].type = "steel"):
            typepoke = "http://127.0.0.1:5001/images/Icône_Type_Acier_EV.png";
    }*/
        if (numImage<10){
            imagePoke="00"; 
        }else if(numImage>9 && numImage<100){
            imagePoke="0";
        }else{
            imagePoke="";
        }
        let index2 = index+1;
        addcolonne += "<tr>";
        addcolonne += "<td>" + pokemonData[index].id + "</td>";
        addcolonne += "<td>" + pokemonData[index].name.french + "</td>";
        addcolonne += "<td>" + pokemonData[index].type.join(", ") + "</td>";
        addcolonne += "<td>" + "<img class='image'src='http://127.0.0.1:5001/images/"+imagePoke +index2+ ".png'</td>";
        //addcolonne += "<td>" + "<img class='image'src='"+typepoke+"'</td>";
        addcolonne += "</tr>";
    }
    addcolonne += "</tbody>";
    document.getElementById("tableau").innerHTML += addcolonne;

});
}