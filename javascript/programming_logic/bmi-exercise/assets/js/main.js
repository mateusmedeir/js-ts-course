const form = document.querySelector('#form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const inputWeight = event.target.querySelector('#weight');
    const inputHeight = event.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight){
        setResult('Invalid Weight', false);
        return;
    }
    if (!height){
        setResult('Invalid Weight', false);
        return;
    }

    setResult(`Your BMI is (${getBmi(calculateBmi(weight, height))})`, true);
});

function calculateBmi(weight, height) {
    const bmi = weight / height ** 2;
    console.log(bmi);
    return bmi.toFixed(2);
}

function getBmi(bmi) {
    const level = ['Under weight', 'Normal weight', 'Overweight','Grade 1 obesity', 'Grade 2 obesity', 'Grade 3 obesity'];
    if (bmi < 18.5) return level[0];
    if (bmi < 25) return level[1];
    if (bmi < 30) return level[2];
    if (bmi < 35) return level[3];
    if (bmi < 40) return level[4];
    if (bmi >= 40) return level[5];
}

function createP () {
    const p = document.createElement('p');
    return p;
}

function setResult (msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = createP();
    p.classList.add('result-paragraph');

    if (isValid) {
        p.classList.add('valid-result');
    } else {
        p.classList.add('invalid-result');
    }

    p.innerHTML = msg;
    result.appendChild(p);
}