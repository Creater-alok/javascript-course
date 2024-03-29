const todoList = [];//empty array

function addTodo(){
  //To get text from input we use querySelector
  const todo = document.querySelector('.js-name-input');
  const date = document.querySelector('.js-date-selector');

  const todoObject = {
    name :todo.value,
    dueDate : date.value
  }

  todoList.push(todoObject);

  renderTodoList();

  todo.value = '';
}

function renderTodoList(){
  const list = document.querySelector('.js-todo-list');
  
  let todoListHTML = '';

  for(let i=0;i<todoList.length;i++){
    const todoObject = todoList[i];
    //Instead use destructuring
    const { name , dueDate} = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" onclick="
          todoList.splice(${i},1);
          renderTodoList();
        ">Delete</button>
      `;//Generating the HTML
    todoListHTML += html;
  }

  list.innerHTML = todoListHTML;
}