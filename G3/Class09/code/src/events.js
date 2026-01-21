$(document).ready(function(){
    let ourButton = $("button").first();

    //first way
    ourButton.on("click", function(){
        console.log("Hello from the first click handler!");
    });

    //second way
    ourButton.click(function(){
        $(this).text("Click me"); //this-> button (DOM ELEMENT) change text to Click me
        // let paragraphs = $("p");
        // paragraphs.hide();
        $("p").hide();
    });

    ourButton.click(greeting);
    ourButton.on("click", greeting);
    // ourButton.off("click"); //remove all click event handlers
    ourButton.off("click", greeting)
});

function greeting(){
    console.log("HI!");
}