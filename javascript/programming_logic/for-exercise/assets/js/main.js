const elements = [
    {tag: 'p', text: 'Sentence 1'},
    {tag: 'div', text: 'Sentence 2'},
    {tag: 'footer', text: 'Sentence 3'},
    {tag: 'section', text: 'Sentence 4'},
];

const section = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    const element = document.createElement(elements[i].tag);
    // element.innerText = elements[i].text;
    const text = document.createTextNode(elements[i].text);
    element.appendChild(text);
    div.appendChild(element);
}

section.appendChild(div);
