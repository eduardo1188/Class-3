
const saveButton = document.querySelector('#saveButton')
const todoInput = document.querySelector('#todoInput')
const taskList = document.getElementById('taskList')
console.log(todoInput)

// todoInput.addEventListener('keydown', () => console.log(todoInput))

saveButton.addEventListener('click', function(event) {
    event.preventDefault()
    const task = document.createElement('li')
    task.innerHTML = todoInput.value
    const doneButton = document.createElement('button')
    doneButton.classList.add('btn')
    doneButton.classList.add('btn-danger')
    doneButton.innerHTML = 'Delete'
    taskList.appendChild(task).appendChild(doneButton)
    doneButton.addEventListener('click', () => task.remove())


}) 

// TODO 
//Hacer una calculadora que haga las 4 operaciones sencillas
//funcion eval evalua dos trings
