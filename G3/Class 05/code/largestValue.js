let numbers = [35, 1, 12, 8, 25, 78, 56, 99, 43, 2];
let anotherArray = [36, 11, 112, 5, 24, 7, 6, 9, 41, 21];
let negativeArray = [-1, -5, -3, -9, -2];

//we want the same logic for different arrays
function findLargestValue(array){
    let index = 0;
    let maxValue = array[0]; //this is the initial value of maxValue. We need to put this outside of the while loop

    //array is the parameter of our function
    while(index < array.length){
       // maxValue = array[0] we MUST NOT put this logic here because in each iteratio9n we would reset the value of the maxValue to the value of the first element
        console.log("Index value " +index)
        console.log("Current item "+ array[index]);

        //logic here
        if(maxValue < array[index]){
            maxValue = array[index];
        }
        index++;
    }
}

findLargestValue(numbers);
findLargestValue(anotherArray);
findLargestValue(negativeArray);