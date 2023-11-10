const textNote = document.querySelector("input");
const saveButton = document.querySelector(".save__button");
const noteList = document.querySelector(".note__list");

function saveNote() {
  const newDiv = document.createElement("div");
  const text = textNote.value;
  if (text === "") return;
  newDiv.innerHTML = `
  <p class="number"> </p>
  <p class="text__input">${text}</p>
  <button class="delete">Usuń</button>
  <button class="checked">V</button>
`;

  noteList.appendChild(newDiv);
  textNote.value = "";

  //add to localstorage and add unique ID to div
  const noteKey = Date.now().toString();
  localStorage.setItem(noteKey, text);
  newDiv.id = noteKey;

  //checked task button
  const doneButton = newDiv.querySelector(".checked");
  doneButton.addEventListener("click", doneNote);

  //delete task button
  const deleteButton = newDiv.querySelector(".delete");
  deleteButton.addEventListener("click", deleteNote);
}

function deleteNote(e) {
  //delete from page
  const div = e.target.parentNode;
  noteList.removeChild(div);
  //delete from localstorage
  const noteID = div.id;
  localStorage.removeItem(noteID);

  //initial function recalculating index task
  // recaltulatingIndexTask();
  // boxList.childElementCount;
}

function doneNote(e) {
  const pText = e.target.parentNode.querySelector("p.text__input");
  pText.classList.toggle("done");
}

//initialization from localStorage
function init() {
  Object.keys(localStorage).forEach((keyNote) => {
    const textNote = localStorage.getItem(keyNote);
    console.log(keyNote);
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <p class="number"> </p>
    <p class="text__input">${textNote}</p>
    <button class="delete">Usuń</button>
    <button class="checked">V</button>
  `;
    const doneButton = newDiv.querySelector(".checked");
    doneButton.addEventListener("click", doneNote);

    const deleteButton = newDiv.querySelector(".delete");
    deleteButton.addEventListener("click", deleteNote);
    noteList.appendChild(newDiv);
    newDiv.id = keyNote;
  });
}

init();

saveButton.addEventListener("click", saveNote);
