$(document).ready(function(){
    //excercise 1
    let div = $("#firstWrapper");
    let paragraph = $("p").first();
    let h3 = $("h3").first();
    let h1 = $("h1").last();
    let button = $("button");

    //ex 2
    $("h1").first().text("JQuery is awesome");
    $("h1").first().after("<p>A new paragraph</p>");
    button.css("background-color", "red");

    //ex 3
    button.first().click(function(){
        $("#secondWrapper").hide();
        $("p").css("color", "green");
        $(this).text("Don't click me!");
        // $(this).css("display","none");
        $(this).prop("disabled", true).css("background-color","gray") // for disable button after click
    })
});