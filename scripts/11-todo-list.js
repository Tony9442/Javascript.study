const myTodoArr =[{
  name:'Learning Javascript', 
  dueDate: '2023-7-25'},
  {
   name: 'Learning javascript',
   dueDate: '2023-7-25'}
  ];

showTodoList();

function showTodoList() {


let myTodoArrHTML = '';

for (let i = 0; i < myTodoArr.length; i++) {
  const todoObject = myTodoArr[i];

  //const name = todoObject.name
  //const dueDate = todoObject.dueDate
  //shortcut to the two comment
  const{name, dueDate} = todoObject

  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
    <button onclick="
    myTodoArr.splice(${i}, 1);
    showTodoList();
    " class="delete-btn2">Delete</button>
   
  `;
  myTodoArrHTML += html;
}

//console.log(myTodoArrHTML);

document.querySelector('.js-todo-list')
.innerHTML= myTodoArrHTML;

}

function addTodo() {
  //update our add button so when we click we get the name and due date then puit in our todo list

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  const inputElement = document.querySelector('.js-input-name');
  const name = inputElement.value;
//the VALUE property represent the text in the text box.

  myTodoArr.push({
    //name:name,
    //dueDate:dueDate
    name,
    dueDate
  });
  //console.log(myTodoArr);

  //how to reset our text box when add something to our to do list.
inputElement.value = '';

showTodoList();
}