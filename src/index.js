console.log("Hello from src/index.js!");

// Data
const todos = [
  'Learn JavaScript',
  'Build an Amazing Product'
];

// Functions
const logInnerText = element => console.log(element.innerText);

const renderTodo = (title, index) => {
  htmlString = `<li id="todo-${index}" class="list-item">
                  <span class="label">${title}</span>
                  <span class="actions">
                    <button type="button"
                            aria-label="Delete"
                            title="Delete"
                            class="btn-picto">
                            <i class="fas fa-trash" id="${index}"></i>
                    </button>
                  </span>
                </li>`
  return htmlString;
};

const renderTodos = () => {
  todos.forEach((todo, index) => {
    console.log(todosList)
    todosList.insertAdjacentHTML('beforeend', renderTodo(todo, index));
  });
};

const removeTodo = todo => todo.remove();


// Run out Program
const todosList = document.querySelector('#todos-list');

// array.forEach(callback)

renderTodos();
const todoItems = document.querySelectorAll('#todos-list li');

// array.forEach((el) => {})
// todos.forEach(todo => console.log(todo.innerText));


// document.querySelector('#newitem').value


// Event Listeners
todoItems.forEach((todo) => {
  button = todo.querySelector('button');
  button.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    removeTodo(todo);
  });
});








