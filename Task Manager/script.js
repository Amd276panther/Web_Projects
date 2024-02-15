document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Function to add a task
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
          <span>${taskText}</span>
          <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        addDeleteTaskListener(taskItem);
      }
    }
  
    // Function to delete a task
    function deleteTask() {
      this.parentElement.remove();
    }
  
    // Function to add click event listener to delete button of a task
    function addDeleteTaskListener(taskItem) {
      const deleteBtn = taskItem.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', deleteTask);
    }
  
    // Event listener for adding a task
    addTaskBtn.addEventListener('click', addTask);
  });
  