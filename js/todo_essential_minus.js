const toDoFormSecond = document.getElementById('todo-form-second');
const toDoInputSecond = document.querySelector('#todo-form-second input');
const toDoListSecond = document.getElementById('todo-list-second');

const TODOS_KEY_SECOND = 'todosSecond';

let toDosSecond = [];

function saveToDosSecond() {
  localStorage.setItem(TODOS_KEY_SECOND, JSON.stringify(toDosSecond));
}

function deleteToDo(event) {
  const liSecond = event.target.parentElement;
  liSecond.remove();
  toDosSecond = toDosSecond.filter((toDoSecond) => toDoSecond.id !== parseInt(liSecond.id));
  saveToDosSecond();
}

function paintToDoSecond(newTodoSecond) {
  const checkSecond = document.createElement('input');
  checkSecond.setAttribute('type','checkbox');
  checkSecond.setAttribute('value','secondCheck');
  checkSecond.setAttribute('class','checkbox');
  const liSecond = document.createElement('li');
  liSecond.id = newTodoSecond.id;
  const spanSecond = document.createElement('span')
  spanSecond.innerText = newTodoSecond.text;
  spanSecond.setAttribute('class','out essentialminus');
  const buttonSecond = document.createElement('button');
  buttonSecond.innerText = 'x';
  buttonSecond.addEventListener('click', deleteToDo)
  liSecond.appendChild(checkSecond);
  liSecond.appendChild(spanSecond);
  liSecond.appendChild(buttonSecond);
  toDoListSecond.appendChild(liSecond);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodoSecond = toDoInputSecond.value;
  toDoInputSecond.value = '';
  const newTodoSecondObj = {
    text: newTodoSecond,
    id: Date.now(),
  }
  toDosSecond.push(newTodoSecondObj);
  paintToDoSecond(newTodoSecondObj);
  saveToDosSecond();
}

toDoFormSecond.addEventListener('submit', handleToDoSubmit);

const savedToDosSecond = localStorage.getItem(TODOS_KEY_SECOND);

if(savedToDosSecond !== null) {
  const parsedToDosSecond = JSON.parse(savedToDosSecond);
  toDosSecond = parsedToDosSecond;
  parsedToDosSecond.forEach(paintToDoSecond);
}
