const todoList = [{name: 'make dinner', dueDate:'2022-12-22'},{name: 'make dinner', dueDate:'2022-12-22'}];//empty array

renderTodoList();

document.querySelector('.js-add-todo-button').addEventListener('click',()=>addTodo());

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

  todoList.forEach((todoObject,index)=>{
    const { name , dueDate} = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
      `;//Generating the HTML
    todoListHTML += html;
  });

  list.innerHTML = todoListHTML;

  //since the delete button code comes after this we add event listener also after it comes on the webpage

  //console.log(document.querySelectorAll('.js-delete-todo-button'));//NodeList(2) we need to loop through this list
  
  document.querySelectorAll('.js-delete-todo-button').forEach(
    (deleteButton,index)=>{
      deleteButton.addEventListener('click',()=>{  
      console.log(index);
      todoList.splice(index,1);
      renderTodoList();
      })
  });
}