let tasks = ["task01", "task02", "task03", "task04", "task05"];
function addTaskForArray(array) {
  for (let index = 0; index < array.length; index++) {
    addNewTask(array[index]);
  }
}
addTaskForArray(tasks);

function addNewTask(text) {
  let ulNode = document.querySelector("#myTaskList");
  let liNode = document.createElement("li");
  ulNode.appendChild(liNode);
  liNode.innerText = text;

  //   liNode.innerText = "The new list item";
  //   ulNode.appendChild(liNode);
  //   console.log(typeof ulNode);
  //   console.log(liNode);

  //console.log(ulNode);
  //   for (liNode = 1; liNode <= liNode.length; index++) {
  //     // ulNode.appendChild(liNode[liNode]);

  //     ulNode.appendChild(liNode);
  //   }
}
addNewTask("this is new li list");

// function removeLast() {
//   let liNode = document.querySelectorAll("li");
//   liNode.removeLast();
//   //   for (let index = 0; index < liNode.length; index++) {
//   //     liNode[index];
//   //   }
// }
// removeLast();

// function removeFirst() {
//   let liNode = document.querySelectorAll("#myTaskList li");
//   liNode.removeFirst();
//   //   for (let index = 0; index < liNode.length; index++) {
//   //     liNode[index];
//   //   }
// }
// removeFirst();
