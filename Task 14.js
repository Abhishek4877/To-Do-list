// Function to add a new task to the list
function addTask() {
    // Get the input value
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== "") {
        // Create a new list item
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(taskText));

        // Add the list item to the task list
        document.getElementById("taskList").appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}
