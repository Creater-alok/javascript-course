const todoList = [{name: 'make dinner', dueDate:'2022-12-22'},{name: 'make dinner', dueDate:'2022-12-22'}];//empty array

renderTodoList();

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

  todoList.forEach(function(todoObject,index){
    const { name , dueDate} = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" onclick="
          todoList.splice(${index},1);
          renderTodoList();
        ">Delete</button>
      `;//Generating the HTML
    todoListHTML += html;
  });

  list.innerHTML = todoListHTML;
}