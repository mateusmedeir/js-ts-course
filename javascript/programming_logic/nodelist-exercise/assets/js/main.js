const div = document.querySelector('.paragraphs');
const paragraphs = div.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of paragraphs) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}