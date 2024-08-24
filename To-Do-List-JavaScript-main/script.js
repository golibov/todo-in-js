
function createTodoElement(inputData) {
  const todo_el = document.createElement('div');
  todo_el.classList.add('todo-item');

  const todo_content_el = document.createElement('div');
  todo_el.appendChild(todo_content_el);

  const todo_input_el = document.createElement('input');
  todo_input_el.classList.add('text');
  todo_input_el.type = 'text';
  todo_input_el.value = inputData;
  todo_input_el.setAttribute('readonly', 'readonly');

  todo_content_el.appendChild(todo_input_el);

  const todo_actions_el = document.createElement('div');
  todo_actions_el.classList.add('action-items');

  const todo_done_el = document.createElement('i');
  todo_done_el.classList.add('fa-solid', 'fa-check');

  const todo_edit_el = document.createElement('i');
  todo_edit_el.classList.add('fa-solid', 'fa-pen-to-square', 'edit');

  const todo_delete_el = document.createElement('i');
  todo_delete_el.classList.add('fa-solid', 'fa-trash');

  todo_actions_el.appendChild(todo_done_el);
  todo_actions_el.appendChild(todo_edit_el);
  todo_actions_el.appendChild(todo_delete_el);

  todo_el.appendChild(todo_actions_el);

 
  addEventListeners(todo_done_el, todo_edit_el, todo_delete_el, todo_input_el, todo_el);

  return todo_el;
}


function addEventListeners(doneEl, editEl, deleteEl, inputEl, todoEl) {

  doneEl.addEventListener('click', () => {
    inputEl.classList.add('done');
    todoEl.removeChild(doneEl.parentNode);
  });


  editEl.addEventListener('click', () => {
    if (editEl.classList.contains('edit')) {
      editEl.classList.remove('edit', 'fa-pen-to-square');
      editEl.classList.add('save', 'fa-x');
      inputEl.removeAttribute('readonly');
      inputEl.focus();
    } else {
      editEl.classList.remove('save', 'fa-x');
      editEl.classList.add('edit', 'fa-pen-to-square');
      inputEl.setAttribute('readonly', 'readonly');
    }
  });


  deleteEl.addEventListener('click', () => {
    document.querySelector('.todo-lists').removeChild(todoEl);
  });
}


document.querySelector('#submit').addEventListener('click', () => {
  const input = document.querySelector('#todo-input');
  const inputData = input.value;
  input.value = "";

  const newTodo = createTodoElement(inputData);
  document.querySelector('.todo-lists').appendChild(newTodo);
});
