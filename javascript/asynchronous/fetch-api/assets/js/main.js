document.addEventListener('click', event => {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        loadPage(element);
    }
});

// Async/Await Method
async function loadPage(element) {
    try {
        const href = element.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('ERROR 404');
    
        const html = await response.text();
        loadResult(html);
    } catch (error) {
        console.error(error);
    }
};


// Promise Method
/* function loadPage(element) {
    const href = element.getAttribute('href');

    fetch(href)
    .then(response => {
        if (response.status !== 200) throw new Error('ERROR 404');
        return response.text();
    })
    .then(html => loadResult(html))
    .catch(error => console.error(error));
};*/

function loadResult(response) {
    const result = document.querySelector('.result');
    result.innerHTML = response;
}