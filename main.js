const input = document.querySelector("input");
const addButton = document.querySelector(".save__button");
const boxList = document.querySelector(".list__box");

// let taskIndex = 1;

function saveNoteButton() {
  const newDiv = document.createElement("div");
  const text = input.value;
  if (text === "") return;
  newDiv.innerHTML = `
  <p class="number"> </p>
  <p class="text__input">${text}</p>
  <button class="delete">Usuń</button>
  <button class="checked">V</button>
`;

  boxList.appendChild(newDiv);
  input.value = "";
  // taskIndex++;

  //checked task
  const doneButton = newDiv.querySelector(".checked");
  doneButton.addEventListener("click", doneNoteButton);

  //delete task
  const deleteButton = newDiv.querySelector(".delete");
  deleteButton.addEventListener("click", deleteNoteButton);
}

function deleteNoteButton(e) {
  const div = e.target.parentNode;
  boxList.removeChild(div);

  //initial function recalculating index task
  // recaltulatingIndexTask();
  // boxList.childElementCount;
}

function doneNoteButton(e) {
  const pText = e.target.parentNode.querySelector("p.text__input");
  pText.classList.toggle("done");
}

addButton.addEventListener("click", saveNoteButton);
