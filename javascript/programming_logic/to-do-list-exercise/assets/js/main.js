function toDoList() {
    const tasks = document.querySelector('#tasks');
    const taskInput = document.querySelector('#input-task');
    const newTaskBtn = document.querySelector('.add-new-task');

    function clearInput() {
        taskInput.value = '';
        taskInput.focus();
    }

    function createDeleteBtn(li) {
        li.innerText += ' ';
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        //deleteBtn.classList.add('delete-task');
        deleteBtn.setAttribute('class', 'delete-task');
        li.appendChild(deleteBtn);
    }

    function createTask(inputText) {
        const newTask = document.createElement('li');
        newTask.classList.add('task');
        newTask.innerHTML =  inputText;
        tasks.appendChild(newTask);
        createDeleteBtn(newTask);
        clearInput();
        saveTasks();
    }

    taskInput.addEventListener('keypress', event => {
        if (event.keyCode === 13 && taskInput.value) createTask(taskInput.value);
    });

    newTaskBtn.addEventListener('click', () => {
        if (taskInput.value) createTask(taskInput.value);
    });

    document.addEventListener('click', event => {
        const element = event.target;

        if (element.classList.contains('delete-task')) {
            element.parentElement.remove();
            saveTasks()
        }
    });

    function saveTasks() {
        const taskElements = tasks.querySelectorAll('li');
        const toDoList = [];

        for (let task of taskElements) {
            let textTask = task.innerText;
            textTask = textTask.replace(' Delete', '');
            toDoList.push(textTask);
        }

        const tasksJSON = JSON.stringify(toDoList);
        localStorage.setItem('tasks', tasksJSON);
    }

    function addSaveTasks() {
        const tasksJSON = localStorage.getItem('tasks');
        const toDoList = JSON.parse(tasksJSON);
        for(let taskText of toDoList) {
            createTask(taskText);
        }
    }

    addSaveTasks();

}

toDoList();