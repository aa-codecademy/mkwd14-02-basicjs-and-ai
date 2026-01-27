let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users") //returns a promise
        .then(response => //if the call is successful
        {
            console.log("Response received: ", response); //object of type Response
            response.json() //return Promise that resolves with the result of parsing the body text as JSON
            //for each Promise we have then and catch options
                .then(data => { //if response.json() is successful
                    console.log("Data: ", data); //the actual data from the response
                })
                .catch(function(err){
                    console.log("Error parsing JSON: ", err); //if an error occurs during response.json()
                })
        }
        )
        .catch(error => { //if an error occurs during the call of the url
            console.log("Error fetching data: ", error);
        })
});

//then is the success handler, catch is the error handler