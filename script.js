const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");


function addTask() {

  if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const taskDiv = document.createElement("div");
  taskDiv.className = "task-info";

  const taskText = document.createElement("span");
  taskText.innerText = taskInput.value;

  const dateText = document.createElement("small");
  dateText.innerText = dateInput.value;

  taskDiv.appendChild(taskText);
  taskDiv.appendChild(dateText);

  const actions = document.createElement("div");
  actions.className = "actions";


  const doneBtn = document.createElement("button");
  doneBtn.innerText = "✔";
  doneBtn.className = "done";
  doneBtn.onclick = () => {
    taskText.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.innerText = "✏";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskText.innerText);
    if (newTask !== null) {
      taskText.innerText = newTask;
    }
  };


  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(doneBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskDiv);
  li.appendChild(actions);

  taskList.appendChild(li);

 
  taskInput.value = "";
  dateInput.value = "";
}