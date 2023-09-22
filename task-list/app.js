// Define all selectors
let takForm = document.querySelector('#task_form');
let taskInput = document.querySelector('#task_input');

let taskList = document.querySelector('#task_list');
let filterTask = document.querySelector('#task_filter');
let removeTask = document.querySelector('#clear_task');


// Add event listener
takForm.addEventListener('submit', addTaskFunc);
taskList.addEventListener('click', removeTaskFunc);
removeTask.addEventListener('click', removeAllTaskFunc);