/** 
 *  Serveur Backend Pokedex
 */

console.log("Hellow World!");
const fs= require('fs');

// Définir l'emplacement des fichiers bases de données

const POKEDEX = "./DATA/pokedex.json";

// Définir l'emplacement des images

const IMAGE_POKEMON = "./FILES/images";

// Définir un port 

const port = 5001;

// lancer un serveur express
const express = require('express');

const app = express();

// lancer le serveur et attendre
app.listen(port, '127.0.0.1',
    ()=>{
        console.log('Server Pokedex is listening on ' + port);
    }
);

// Crée la route qui renvoie tout

app.get('/',
    findAllPokemon
);

// fonction
function findAllPokemon(request, response)
{
    // Lecture du fichier
    let data = fs.readFileSync(POKEDEX);

    // Analyse du JSON
    let pokedex = JSON.parse(data);

    // Renvoie tout le json interprété

    //response.send(pokedex);
}

function RandomPokemon(request, response){

   
    // Lecture du fichier
    let data = fs.readFileSync(POKEDEX);

    // Analyse du JSON
    let pokedex = JSON.parse(data);
    

    let random = Math.floor(Math.random() * pokedex.length) + 1;



    // Renvoie tout le json interprété

    response.send(pokedex[random]);
}