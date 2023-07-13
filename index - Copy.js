document.querySelector("#buscar").addEventListener("click", getPokemonByName)

document.querySelector("#close").addEventListener("click", cerrar)

function cerrar(e){
    document.querySelector("#contenedor").style.display = "none";
}

function lowerCaseName(string){ 
    return string.toLowerCase()
}
function getPokemonByName(e){
const name = document.querySelector("#nombre").value
const pokemonName = lowerCaseName(name)
document.querySelector("#contenedor").style.display = "flex";

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then(response => response.json())
.then(data => {
    debugger
document.querySelector("#card").innerHTML = `
<div>
<img id="pokeimg" src="${data.sprites.front_default}"/>
</div>
<div>
<h1>${data.name}</h1>
<p><b>Type:</b> ${data.types[0].type.name}</p> 
<p><b>Weight:</b> ${data.weight}</p> 
<p><b>Experience:</b> ${data.base_experience}</p>
<p><b>Abilities:</b></p>
<ul>
<li>${data.abilities[0].ability.name}</li>
<li>${data.abilities[1].ability.name}</li>
</ul>
<p><b>Move:</b> ${data.moves[0].move.name}<p>
</div>
`;
})
.catch((err) => {
document.querySelector("#card").innerHTML= `<span><h2>Lo sentimos, no se encontró el pokemón que buscas😢</h2></span>`;
console.log("Pokemon not found", err);
})
e.preventDefault();
}
