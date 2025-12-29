let groceries = [];

function addGrocerie(item) {
    if(typeof(item) === 'string') {
        groceries.push(item);
        console.log(`You have added ${item} to the list!`);
    } else {
        console.log(`The item ${item} was not adde to the list. Sorry.`);
    }
}

function removeItemFromGroceries(item) {
    for(let i = 0; i < groceries.length; i++) {
        let element = groceries[i];
        if(element.toLowerCase() === item.toLowerCase()) {
            groceries[i] = null;
            break;
        }
    }

    let tempGroceries = [];
    for(let grocerie of groceries) {
        if (!grocerie) {
            continue;
        }
        tempGroceries.push(grocerie);
    }

    groceries = tempGroceries;
}


function showGroceriesList() {
    let i = 0;
    let listNum = 1;

    while(i < groceries.length) {
        let str = `${listNum}. ${groceries[i]}`;
        console.log(str);

        i +=1;
        listNum +=1;
    }
}