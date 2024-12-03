//Seleccionar los elementos

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#taskList');

// Agregar tarea
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Por favor, agrega una tarea");
        return;
    }
    
    //Crear las tareas dentro li
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    
    taskList.appendChild(taskItem);
    
    //limpiar input
    taskInput.value='';
    
}

// Evento al boton
addTaskButton.addEventListener('click', addTask)


//Configurar las tareas

// deleteButton.textContent = "Eliminar";
// deleteButton.addEventListener('click', deleteTask);

// const taskTextNode = document.createTextNode(taskText);
// const deleteButton = document.createElement('button');

