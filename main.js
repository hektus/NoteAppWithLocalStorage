const input = document.querySelector("input");
const addButton = document.querySelector(".save__button");
const boxList = document.querySelector(".list__box");

let taskIndex = 1;

function noteSave(e) {
  const newDiv = document.createElement("div");
  const text = input.value;
  if (text === "") return;
  newDiv.innerHTML = `
  <p class="number">${taskIndex}. </p>
  <p>${text}</p>
  <button class="delete">Usuń</button>
  <button class="checked">V</button>
`;

  boxList.appendChild(newDiv);
  //   newDiv.classList.add("task");
  input.value = "";
  taskIndex++;
  const deleteButton = newDiv.querySelector(".delete");
  deleteButton.addEventListener("click", deleteNote);
}

function deleteNote(e) {
  const div = e.target.parentNode;
  boxList.removeChild(div);
  //   const deleteButton = e.target;
  //   console.log(deleteButton);
  //   const taskDiv = deleteButton.closest(".task");
  //   boxList.removeChild(taskDiv);
}

addButton.addEventListener("click", noteSave);
