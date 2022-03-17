const form = document.querySelector("#new-todo-form");
const todoInput = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoName = todoInput.value;
  todoInput.value = "";
  renderTodo(todoName);
});
function renderTodo(todoName) {
  const templateClone = template.textContent.cloneNode(true);
  const textElement = templateClone.querySelector("[data-list-item-text]");
  textElement.innerText = todoName;
  list.appendChild(textElement);
}
