// GET -> get content from the internet

const request = obj => {

    // Promise Method
    return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // xhr -> XmlHttpRequest
    xhr.open(obj.method, obj.url, true); 
    //(The method ex: GET, the URL, asynchronous = true, synchronous = false)
    xhr.send();
    // if the method is POST, send the data in .send()
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
        } else {
            reject(xhr.statusText);
        }
    });
});

    
    // Old Method ( Callback )
    /* const xhr = new XMLHttpRequest(); // xhr -> XmlHttpRequest
    xhr.open(obj.method, obj.url, true); 
    xhr.send();
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    }); */
};

document.addEventListener('click', event => {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault(); // Prevent the page from reloading
        loadPage(element);
    }
});

// Async/Await Method
async function loadPage(element) {
    const href = element.getAttribute('href');

    try {
        const response = await request({
            method: 'GET',
            url: href
        });
        loadResult(response);
    } catch (error) {
        console.log(error);
    }

};

// Promise and Old Method
/* function loadPage(element) {
    const href = element.getAttribute('href');

    // Promise Method
    request({
        method: 'GET',
        url: href
    }).then(response => {
        loadResult(response);
    }).catch(error => console.log(error));


    // Old Method
    // request({
    //     method: 'GET',
    //     url: href,
    //     success(response) {
    //         loadResult(response);
    //     },
    //     error(errorText) {
    //         console.log(errorText);
    //     }
    // });
}; */

function loadResult(response) {
    const result = document.querySelector('.result');

    result.innerHTML = response;
}