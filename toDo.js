const inputElement = document.getElementById("task");
const saveBtn = document.getElementById("save-btn");
const tasks = document.getElementById("to-do-list");

//List items array
const toDoList = [];

//Add event listener to save button
saveBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  const inputElementValue = inputElement.value;
  if (inputElementValue === "") {
    alert("Please enter a task!");
  } else {
    if (toDoList.length < 4) {
    //Create new li element
      const list = document.createElement('li');
      list.className = "list-group-item p-1";
      list.appendChild(document.createTextNode(inputElementValue));
      tasks.appendChild(list);
      toDoList.push(list);
      inputElement.value = "";

    //Create delete and success buttons
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "float-right", "ml-1");
      deleteBtn.innerHTML = "×";
      list.appendChild(deleteBtn);

      const successBtn = document.createElement("button");
      successBtn.classList.add("btn", "btn-success", "btn-sm", "float-right");
      successBtn.innerHTML = "√";
      list.appendChild(successBtn);
    }
   else {
     alert("You can only enter a maximum of 4 tasks.");
   }
}
})
//Add event listener to delete and success buttons.
tasks.addEventListener("click", (e)=>{
  if (e.target.classList.contains("btn-danger")) {
     if (confirm("Are you sure you want to delete this task?")) {
       tasks.removeChild(e.target.parentElement);
       toDoList.pop(e.target.parentElement);
      } 
     }
    });
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-success")){
    if (confirm("Task complete?")) {      
    const listElement = (e.target.parentElement);
    listElement.style.textDecoration = "line-through";    
 }
  }
});