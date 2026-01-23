let p = document.getElementById("myParagraph");
let btn = document.getElementById("myBtn");

function changeElement(element){
    element.style.color = "red";
    element.style.backgroundColor = "blue";
    element.style.fontSize = "20px";
}

btn.addEventListener("click", function(){
    changeElement(p);
});
