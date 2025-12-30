let groceries = ["Bread", "Milk", "Butter", "Salad"];

function addGrocerie(item) {
    let toNumber = parseInt(item);
    if (!Number.isNaN(toNumber)) {
        console.log(`The item ${item} was not adde to the list. Sorry.`);
    } else if (item === null) {
        console.log(`The item ${item} was not adde to the list. Sorry.`);
    } else {
        groceries.push(item);
        console.log(`You have added ${item} to the list!`);
    }
}

function removeItemFromGroceries(item) {
    if (item === null) {
        return;
    }

    for (let i = 0; i < groceries.length; i++) {
        let element = groceries[i];
        // case insensitive search
        if (element.toLowerCase() === item.toLowerCase()) {
            groceries[i] = null;
            break;
        }
    }

    let tempGroceries = [];
    for (let grocerie of groceries) {
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

    while (i < groceries.length) {
        let str = `${listNum}. ${groceries[i]}`;
        console.log(str);

        i += 1;
        listNum += 1;
    }
}

function searchItemInGrocerieList(item) {
    if (item !== null) {
        for (let listItem of groceries) {
            // case sensitive search
            if (listItem === item) {
                console.log(`The item ${item} was found!`);
                return listItem;
            }
        }
    }
    console.log(`There was no ${item} item in the list!`);
    return null;
}


let item = prompt('Enter grocerie item');

addGrocerie(item);
showGroceriesList();

let deleteItem = prompt('Enter grocerie item that you want to delete');

removeItemFromGroceries(deleteItem);
showGroceriesList();

let searchItem = prompt('Enter search word');

let foundItem = searchItemInGrocerieList(searchItem);
console.log(foundItem);
