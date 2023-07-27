document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const listTitle = document.getElementById("listTitle");
  
    addButton.addEventListener("click", addTask);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      const listItem = createTaskItem(taskText);
      taskList.appendChild(listItem);
  
      taskInput.value = "";
    }
  
    function createTaskItem(taskText) {
      const li = document.createElement("li");
      const taskTextSpan = document.createElement("span");
      taskTextSpan.textContent = taskText;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        li.remove();
      });
  
      li.appendChild(taskTextSpan);
      li.appendChild(deleteButton);
      return li;
    }
  
    // Get the user's name and update the list title
    const userName = prompt("Please enter your name:");
    listTitle.textContent = `${userName}'s To-Do List`;
  });
  