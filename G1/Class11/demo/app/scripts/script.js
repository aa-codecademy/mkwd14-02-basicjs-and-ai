let peopleUrl = 'https://swapi.dev/api/people/';

let loadDataBtn = document.getElementById('load-data');
let container = document.getElementById('container');
let tbody = document.querySelector('tbody');
let pagingBtns = document.querySelector('#paging-btns');

loadDataBtn.addEventListener('click', function() {
    fetchData(peopleUrl);
});

function fetchData(url) {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let swapiPeople = new SwapiPeopleResponse(
                data.count, data.next, data.previous, data.results);
            console.log(swapiPeople);

            generatePeopleTable(swapiPeople.results, tbody);
            generatePagingButtons(swapiPeople, pagingBtns);
        })
        .catch(function(error) {
            console.log(error);
        })
}


function generatePeopleTable(people, element) {
    let html = '';
    for(let person of people) {
        html += `
            <tr>
                <th>${person.name}</th>
                <td>${person.birth_year}</td>
                <td>${person.films.length}</td>
                <td><button type='button' value='${person.name}'>More details</button></td>
            </tr>
        `;
    }
    element.innerHTML = '';
    element.innerHTML = html;
}


function generatePagingButtons(swapiResponse, element) {
    let buttons = `
        <button id='prev' type='button' 
            ${swapiResponse.hasPrevPage() ? '' : 'disabled'}
            value='${swapiResponse.prevPage}'>Previous page</button>
        <button id='next' type='button' 
            ${swapiResponse.hasNextPage() ? '' : 'disabled'}
            value='${swapiResponse.nextPage}'>Next page</button>
    `;

    element.innerHTML = '';
    element.innerHTML = buttons;
    addPagingButtonsEventListeners(element);
}

function addPagingButtonsEventListeners(element) {
    let btns= element.getElementsByTagName('button');

    for(let btn of btns) {
        btn.addEventListener('click', function(event) {
            let pageUrl = event.target.value;
            fetchData(pageUrl);
        });
    }
}