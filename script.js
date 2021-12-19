const newItemInput = document.getElementById('addItem');
const todoList = document.querySelector('.card-actividades');

/* INSERTAR DATOS DINAMICAMENTE  */
newItemInput.addEventListener('keypress', (e) => {
    if (e.charCode === 13 && newItemInput.value.length > 0) {
        createNewTodoItem(newItemInput.value);
        newItemInput.value = '';
    }
})
function createNewTodoItem(text) {
    const elem = document.createElement('div');
    elem.classList.add('card-actividades');

    elem.innerHTML = `
    <div class="card-actividad">
        <p id="textos">${text}</p>
        <div class="remove"></div>
    </div>
    `;
    todoList.append(elem);
}

/* ELIMINAR TAREAS INTRODUCIDAS */
function removeTodoItem(elem) {elem.remove();
}
todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        removeTodoItem(event.target.parentElement);
    }
});