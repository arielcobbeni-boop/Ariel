// To-Do List Application with Local Storage Functionality

// Function to add a task to local storage
function addTask(task) {
    let tasks = getTasks();
    tasks.push({ task: task, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to delete a task from local storage
function deleteTask(taskToDelete) {
    let tasks = getTasks();
    tasks = tasks.filter(task => task.task !== taskToDelete);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to mark a task as complete
function markComplete(taskToMark) {
    let tasks = getTasks();
    tasks = tasks.map(task => {
        if (task.task === taskToMark) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to retrieve tasks from local storage
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Example usage
addTask('Learn JavaScript');
addTask('Build a To-Do List');
delTask('Learn JavaScript');
markComplete('Build a To-Do List');