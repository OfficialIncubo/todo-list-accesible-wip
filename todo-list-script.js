const TodoList = [];


function renderTodoList()
{
let todoListHTML = '';
    TodoList.forEach((todoObject, index) =>
    {
        const {name, dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div> 
        <button class="js-delete-button delete-button">Delete
        </button>`;
        todoListHTML += html;
    })
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            TodoList.splice(index, 1);
            renderTodoList();
        })
    })
}

document.querySelector('.js-add-button').addEventListener('click', () => {
    addTodo();
})

function addTodo()
{
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-date-selector');
    const dueDate = dateInputElement.value;

    TodoList.push(
        { name,
        dueDate}
        );

    //console.log(TodoList);

    renderTodoList();

    inputElement.value = '';
}