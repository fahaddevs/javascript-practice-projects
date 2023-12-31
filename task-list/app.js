// Define all selectors
let takForm = document.querySelector('#task_form');
let taskInput = document.querySelector('#task_input');

let taskList = document.querySelector('#task_list');
let filterTask = document.querySelector('#task_filter');
let removeTask = document.querySelector('#clear_task');

let noDataMatch = document.querySelector('#no_data_match');


// Add event listener
takForm.addEventListener('submit', addTaskFunc);
taskList.addEventListener('click', removeTaskFunc);
removeTask.addEventListener('click', removeAllTaskFunc);
filterTask.addEventListener('keyup', filterTaskFunc);


/*
===========================
      All Functions
===========================
*/
// Add task
function addTaskFunc(e) {
  e.preventDefault();

  let taskInputValue = taskInput.value;

  if(taskInputValue === '') {
    alert('Please write something before adding a task');
  } else {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInputValue + ' '));

    let removeBtn = document.createElement('a');
    removeBtn.setAttribute('href', '#');
    removeBtn.innerHTML = 'X';

    li.appendChild(removeBtn);

    taskList.appendChild(li);
    taskInput.value = '';
  }
}

// Remove Task
function removeTaskFunc(e) {
  let ele = e.target;
  if(ele.hasAttribute('href')){
    if(confirm('Are you sure?')) {
      ele.parentElement.remove();
    }
  }
}

// Remove All Tasks
function removeAllTaskFunc() {
  if(confirm("Are your sure?")) {
    taskList.innerHTML = '';
  }
}

// Filter Fcuntion
function filterTaskFunc() {
  let filterText = filterTask.value.toLowerCase();
  let allHidden = true; // Assume initially that no data matches

  document.querySelectorAll('li').forEach(task => {
    let item = task.firstChild.textContent;

    if(item.toLowerCase().indexOf(filterText) !== -1){
      task.style.display = 'block';
      allHidden = false; // At least one item matches
    } else {
      task.style.display = 'none';
    }
  });

  if (allHidden) {
    noDataMatch.style.display = 'block';
  } else {
    noDataMatch.style.display = 'none';
  }
}