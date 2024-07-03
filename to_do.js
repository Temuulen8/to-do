// DOM ELEMEMTS
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("save-btn");
const taskInput = document.getElementById("task-input");
const taskStatus = document.getElementById("status");
const toDoEl = document.getElementById("toDo");
const inProgressEl = document.getElementById("inProgress");
const doneEl = document.getElementById("done");
const blockedEl = document.getElementById("blocked");

// VARIABLES FOR TASK
let isEdited = false;
let editedIndex = -1;
const tasks = [
  {
    name: "Task one",
    status: "INPROGRESS",
  },
  {
    name: "Task two",
    status: "BLOCKED",
  },
  {
    name: "Task Three",
    status: "BLOCKED",
  },
];

function zurah() {
  taskTodoList.innerHTML = "";
  taskProgressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";
  let toDoCount = 0;
  let inProgressCount = 0;
  let doneCount = 0;
  let blockedCount = 0;

  "Hello" + "World";
  5 + 5;
  const a = 100;
  // Welcome - 100 - city - 100 - "world"
  "Welcome - " + a + " - city - " + a + '"world"';
  `Welcome 
  - ${a} - city - 100 - "world"`;

  for (let i = 0; i < tasks.length; i++) {
    console.log("TASKS", tasks);
    const newTaskCard = `
    <div class="d-flex justify-content-between align-items-center border border-1 border-danger rounded p-2">
    <span>${tasks[i].name} - ${i}</span>
    <div>
        <button class="btn"  data-bs-toggle="modal" data-bs-target="#taskModal" onclick="taskEdit(${i})">
        <i class="bi bi-pencil"></i>
        </button>
        <button class="btn">
        <i class="bi bi-trash" onclick="deleteTask(${i})"></i>
        </button>
    </div>
    </div>
 `;

    switch (tasks[i].status) {
      case "TODO": {
        taskTodoList.innerHTML += newTaskCard;
        toDoCount++;
        break;
      }
      case "INPROGRESS": {
        taskProgressList.innerHTML += newTaskCard;
        inProgressCount++;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newTaskCard;
        doneCount++;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newTaskCard;
        blockedCount++;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }

  // blocked iig -> html ruu haruulah
  toDoEl.textContent = toDoCount;
  inProgressEl.textContent = inProgressCount;
  doneEl.textContent = doneCount;
  blockedEl.textContent = blockedCount;
}

zurah();

saveBtn.addEventListener("click", function () {
  if (isEdited) {
    tasks[editedIndex].name = taskInput.value;
    tasks[editedIndex].status = taskStatus.value;
    isEdited = false;
  } else {
    const newTask = {
      name: taskInput.value,
      status: taskStatus.value,
    };
    tasks.push(newTask);
  }
  taskInput.value = "";
  taskStatus.value = "TODO";
  zurah();
});

const deleteTask = (taskIndex) => {
  tasks.splice(taskIndex, 1);
  zurah();
};

const taskEdit = (taskIndex) => {
  console.log(taskIndex);
  taskInput.value = tasks[taskIndex].name;
  taskStatus.value = tasks[taskIndex].status;

  isEdited = true;
  editedIndex = taskIndex;
};

// const list = document.querySelectorAll(".item");

// console.log(list);

// list.forEach((s) => {
//   console.log("o", s);
// });
