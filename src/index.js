document.addEventListener("DOMContentLoaded", () => {
  // ✅ Select elements AFTER the DOM has fully loaded
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  // ✅ Check if elements exist before adding event listeners
  if (!form || !taskInput || !taskList) {
    console.error("❌ Missing form elements in the DOM.");
    return; // Stop execution if elements are missing
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing page

    // ✅ Ensure the input field has a value
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("⚠️ Please enter a task!"); // Prevent empty tasks
      return;
    }

    // ✅ Create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // ✅ Append to task list
    taskList.appendChild(taskItem);

    // ✅ Clear input field after submission
    taskInput.value = "";
  });
});
//what the herrooo