/* 
Copilot: I want to create a simple jQuery example that calls the public PokeAPI 
to fetch information about a Pokémon by its ID. When I click a button on the page, 
the code should make an AJAX request to "https://pokeapi.co/api/v2/pokemon/{id}" 
and then display the Pokémon's name inside an element with the ID "pokemonName".

Please write clean, easy-to-understand code suitable for beginners. 
Use functions to separate responsibilities, such as one function for calling the API 
and another for updating the page with the result. Include basic error handling and 
use jQuery's document.ready to make sure the DOM is loaded before attaching event listeners.
*/
$(document).ready(function(){

    function showName(name){
        $("#pokemonName").text(`The name of the first pokemon is: ${name}`);
    }                   
    function callPokemonApi(id){
        debugger
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            success: function(pokemonResult){
                debugger;
                showName(pokemonResult.name);
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    $("#getPokemonBtn").click(function(){
            debugger
            callPokemonApi(1);
    });
})