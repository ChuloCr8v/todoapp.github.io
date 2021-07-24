const btn = document.querySelector('.submit');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');
const filterTodo = document.querySelector('.filter-todo');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  //IF INPUT FIELD IS EMPTY, DO NOTHING
  const checkField = todoInput.value
  if (checkField == '') return;

  // CREATE ORDERED LIST ELEMENT
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo-div')

  //CREATE LIST ELEMENT
  const li = document.createElement('li')
  li.classList.add('todo-item')

  //UPDATE LIST
  li.innerText = todoInput.value

  //UPDATE TODODIV
  todoDiv.appendChild(li)

  //UPDATE TODO LIST TO SHOW TASK IN DOM
  todoList.appendChild(todoDiv)

  //CREATE CHECK BUTTON
  const check = document.createElement('button')
  check.innerHTML = `<i class="fa fa-check">`
  check.classList.add('check-btn')

  //ADD CHECK BUTTON TO TODODIV
  todoDiv.appendChild(check)

  //CREATE DELETE BUTTON
  const trash = document.createElement('button')
  trash.innerHTML = `<i class="fa fa-trash">`
  trash.classList.add('trash-btn')

  //ADD CHECK BUTTON TO TODODIV
  todoDiv.appendChild(trash)

  //UPDATE TODO LIST ON DOM

  todoList.appendChild(todoDiv)

  //CLEAR TODOITEM
  todoInput.value = ''


})


todoList.addEventListener('click', (e) => {
  const item = e.target
  if (item.classList[0] === "check-btn") {
    const todo = item.parentElement
    todo.classList.toggle('completed')
  } else if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement
    todo.classList.add("delete")
    todo.addEventListener('transitionend', ()=> {
      todo.remove()
    })
  }
})


filterTodo.addEventListener('click', (e) => {
  const todos = todoList.childNodes
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex"
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex"
        } else {
          todo.style.display = "none"
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex"
        } else {
          todo.style.display = "none"
        }
    }
  })
})