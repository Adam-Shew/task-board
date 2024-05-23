// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const modal = document.getElementById("taskModal");
const taskForm = document.getElementById("taskForm");
const addTaskBtn = document.getElementById("addTaskBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

// Todo: create a function to generate a unique task id
function generateTaskId() {
  nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  let newTask = document.createElement("div");


}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
  event.preventDefault();

  let taskTitle = document.getElementById("taskTitle").value;
  let taskDescription = document.getElementById("taskDescription").value;
  let taskDeadline = document.getElementById("taskDeadline").value;

  let newTask ={
    id: generateTaskId(),
    title: taskTitle,
    description: taskDescription,
    deadline: taskDeadline
  }

  taskList.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  localStorage.setItem("nextId", JSON.stringify(nextId));

  createTaskCard(newTask);
  closeModal();
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
  event.preventDefault();


}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  event.preventDefault();


}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

addTaskBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal)



/*

GARYS NOTES

const tasks = {
  todo:{

  }
  inprogress{

  }
  done:{

  }
}

each card can be put into the tasks array
create a function to produce the cards(tasks)

function renderTasks(){
  //create 3 buckets
  //for each bucket, build a ui task iteam for each item in the array
}


*/