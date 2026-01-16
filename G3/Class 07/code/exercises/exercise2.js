//weightInChickens
function weightInChickens(weight){
    return weight / 0.5;
}

let resultDiv = document.getElementById("result");
let input = parseFloat(prompt("Please enter how much you weigh:"));

if(!isNaN(input)){
    let resultChicken = weightInChickens(input);
    resultDiv.innerHTML = `<h2>${input}KG is ${resultChicken} <img src="https://png.pngtree.com/png-clipart/20211013/ourmid/pngtree-chicken-male-png-image_3982403.png" style="height:2vh" /></h2>`
}
else{
    resultDiv.innerHTML = "<h2>Sorry! Wrong input!</h2>"
}