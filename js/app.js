const input = document.querySelector("input");

const button = document.querySelector("button");

const list = document.getElementById("tasks");

let tasks = [];

const savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
}

/** 
 * Event listener that adds a new task to the list when the button is clicked.
 * It reads the value from the input field, creates a new list item,
 * appends it to the task list, and clears the input field.
 */
button.addEventListener("click", () => {
    addTask();
});

/**
 * Adds a new task to the list.
 * It reads the text from the input element, returns early if empty,
 * creates a new list item, appends it to the unordered list,
 * and clears the input element.
 * 
 * @returns {void}
 */
function addTask() {

    const text = input.value;

    if (text.trim() === "") return;

    tasks.push(text);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();

    input.value = ""

}

function renderTasks() {
    list.innerHTML = "";
    tasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        list.appendChild(listItem);
    });
}


/**
 * Deletes the last task from the list.
 * It removes the last child element from the tasks element.
 * 
 * @returns {void}
 */
function deleteTask() {
    tasks.pop();
    renderTasks();
}
