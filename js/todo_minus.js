const toDoFormThird = document.getElementById('todo-form-third');
const toDoInputThird = document.querySelector('#todo-form-third input');
const toDoListThird = document.getElementById('todo-list-third');

const TODOS_KEY_THIRD = 'todosThird';

let toDosThird = [];

function saveToDosThird() {
  localStorage.setItem(TODOS_KEY_THIRD, JSON.stringify(toDosThird));
}

function deleteToDo(event) {
  const liThird = event.target.parentElement;
  liThird.remove();
  toDosThird = toDosThird.filter((toDoThird) => toDoThird.id !== parseInt(liThird.id));
  saveToDosThird();
}

function paintToDoThird(newTodoThird) {
  const checkThird = document.createElement('input');
  checkThird.setAttribute('type','checkbox');
  checkThird.setAttribute('value','thirdCheck');
  checkThird.setAttribute('class','checkbox');
  const liThird = document.createElement('li');
  liThird.id = newTodoThird.id;
  const spanThird = document.createElement('span')
  spanThird.innerText = newTodoThird.text;
  spanThird.setAttribute('class','out minus');
  const buttonThird = document.createElement('button');
  buttonThird.innerText = 'x';
  buttonThird.addEventListener('click', deleteToDo)
  liThird.appendChild(checkThird);
  liThird.appendChild(spanThird);
  liThird.appendChild(buttonThird);
  toDoListThird.appendChild(liThird);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodoThird = toDoInputThird.value;
  toDoInputThird.value = '';
  const newTodoThirdObj = {
    text: newTodoThird,
    id: Date.now(),
  }
  toDosThird.push(newTodoThirdObj);
  paintToDoThird(newTodoThirdObj);
  saveToDosThird();
}

toDoFormThird.addEventListener('submit', handleToDoSubmit);

const savedToDosThird = localStorage.getItem(TODOS_KEY_THIRD);

if(savedToDosThird !== null) {
  const parsedToDosThird = JSON.parse(savedToDosThird);
  toDosThird = parsedToDosThird;
  parsedToDosThird.forEach(paintToDoThird);
}
