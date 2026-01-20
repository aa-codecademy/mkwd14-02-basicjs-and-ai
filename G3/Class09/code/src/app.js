$(document).ready(function(){
    let allElements = $("*"); //select all elements

    console.log(allElements);
    console.log(allElements[0]);
    console.log(allElements[5]);

    let mainTitle = $("#mainTitle");//select by id element
    console.log(mainTitle);
    console.log(mainTitle[0]);

    let innerWrapperElements = $(".innerWrapper");
    console.log(innerWrapperElements);
    console.log(innerWrapperElements[1]);

    let paragraphs = $("p");
    console.log(paragraphs);
    console.log(paragraphs[0]);

    let elementsByMultipleSelectors = $(".innerWrapper, .wrapper, #mainTitle, button");
    console.log(elementsByMultipleSelectors);

    let firstParagraph = $("p:first");
    console.log(firstParagraph);
    let lastParagraph = $("p:last");
    console.log(lastParagraph); 

    let firstChildren = $("h3:first-child");
    console.log(firstChildren);
    let lastChildren = $("h3:last-child");
    console.log(lastChildren);

    let nChildren = $("p:nth-child(2)");
    console.log(nChildren);

    //DOM vs JQUERY
    let firstParagraphDOM = paragraphs[0]; //DOM
    console.log(firstParagraphDOM.innerHTML);

    let firstParagraphJQuery = paragraphs.first(); //jquery
    console.log(firstParagraphJQuery);
    console.log(firstParagraphJQuery.text());
    firstParagraphJQuery.text("Hello! This is the new text with JQuery!");
    console.log(firstParagraphJQuery.text());

    paragraphs.last().text("Changed text of last p with jquery!");

    let lastPText = paragraphs.last().text();
    paragraphs.last().text(lastPText + " Hello from G3!");

    let prevSibling = paragraphs.last().prev(); 
    console.log(prevSibling);
    console.log(prevSibling.text());
    console.log(paragraphs.last().prev().text());

    let nextSibling = paragraphs.first().next();
    console.log(nextSibling.text());

    let headerNextSibling = $("h3").first().next().text(); 
    console.log(headerNextSibling);

    let foundParagraphText = allElements.find(".wrapper").find("p").last().text();
    console.log(foundParagraphText);

    //remove all elements in innerWrapperElements and add a new span
    innerWrapperElements.first().html("<span>Our span elements added with jquery</span>");

    //add after last paragraph new html element
    paragraphs.last().after("<h2>Added header 2</h2>");
    //add before last paragraph new html element
    paragraphs.last().before("<h4>Added header 4</h4>");

    paragraphs.last().css("color","red");
    paragraphs.last().css("background-color","green");

    paragraphs.last().hide();
    paragraphs.last().show();
});


