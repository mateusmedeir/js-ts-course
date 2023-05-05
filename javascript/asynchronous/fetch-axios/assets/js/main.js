/* fetch('assets/json/people.json')
.then(response => response.json())
.then(json => loadElementsOnPage(json)); */

axios('assets/json/people.json')
.then(response => loadElementsOnPage(response.data));

function loadElementsOnPage(json) {
    const result = document.querySelector('.result');
    const table = document.createElement('table');
    const keys = ['name', 'age', 'salary'];

    for (let person of json) {
        const tr = document.createElement('tr');

        for (let key of keys) {
            const td = document.createElement('td');
            td.innerHTML = person[key];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    result.appendChild(table);
}