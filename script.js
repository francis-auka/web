// 1. Grab the elements
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

// 2. When Add is clicked...
addBtn.addEventListener("click", function () {
  const text = taskInput.value;

  // 3. Don't allow an empty task
  if (text === "") {
    alert("Please type a task first!");
  } else {
    // 4. NEW: create a new <li> element in memory
    const li = document.createElement("li");

    // 5. Put the task text inside it
    li.textContent = text;

    // 6. NEW: add the <li> into the <ul> so it appears on the page
    taskList.appendChild(li);

    // 7. Clear the input box
    taskInput.value = "";
  }
});
