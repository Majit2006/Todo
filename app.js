let addtodobutton = document.getElementById("addToDo");
let TodoList = document.getElementById("TodoList");
let inputField = document.getElementById("inputField");
let removebtn = document.querySelector(".remove");
// addtodobutton.addEventListener("click", () => {
//   let h4 = document.createElement("h4");
//   let removebtn = document.createElement("button");
//   h4.innerText = inputField.value;
//   inputField.value = "";
//   //   removebtn
//   console.log(TodoList.appendChild(h4));
// });

addtodobutton.addEventListener("click", () => {
  if (inputField.value === "") {
    let dangerEror = document.createElement("div");
    dangerEror.className = "alert alert-danger";
    dangerEror.innerText = "Please write something";
    TodoList.appendChild(dangerEror);
  } else {
    let todoItem = document.createElement("div");
    let h4 = document.createElement("h4");
    let removebtn = document.createElement("button");
    todoItem.className = "todo-item d-flex justify-content-between mt-2";
    TodoList.appendChild(todoItem);
    todoItem.appendChild(h4);
    h4.innerText = inputField.value;
    todoItem.appendChild(removebtn);
    removebtn.className = "btn btn-sm btn-danger remove";
    removebtn.innerHTML = `
    <i class="bi bi-x"></i></button>
                          `;
    removebtn.addEventListener("click", () => {
      todoItem.remove();
    });
  }
});
