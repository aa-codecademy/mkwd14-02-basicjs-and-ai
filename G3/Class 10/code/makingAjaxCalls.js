$(document).ready(function() {

    //Example 1

    let myButton = $("#btn");

    myButton.click(function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            success: function(result){ //this function runs if the call is successful
                console.log(result);
            },
            error: function(error){ //this function runs if there is an error
                console.log("Error:", error);
            }
        })
    });


    //Example 2

    function showName(name){
        $("#pokemonResult").text("The pokemon we found is: " + name);
    }

    function callPokemonApi(id) {
        $.ajax({
            // url: "https://pokeapi.co/api/v2/pokemon/" + id
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            success: function (result) {
                console.log(result);
                showName(result.name);
            },
            error: function (error) {
                console.log("Error:", error);
            }
        })
    }

    $("#getPokemonBtn").click(function() {
        callPokemonApi(3);
    });
});