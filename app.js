// const content = window.document.querySelector("h3");

// content.textContent="привет мир ";


const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');   


addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const taskItem = document.createElement('li');   

        taskItem.classList.add('task-item');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);   

        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value 
 = '';
    }
});
