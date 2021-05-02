var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

buttonEl.addEventListener("click", function () {
    alert("button clicked");
});

var taskItemEl = document.createElement("li");
taskItemEl.textContent = "hello"
// tasksToDoEl.appendChild(taskItemEl);