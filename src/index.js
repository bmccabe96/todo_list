import {task} from "./task";
import {loadProjects, loadProjectContent, refreshProjectListener, populateProjectsDropdown} from "./UI";
import {project} from "./project";
import { leftNav } from "./leftNav";
import { getTaskFromInput} from "./addTask";

/*
Initialize the leftNavObject which will be a dynamic list of projects that store tasks
Additionally, load up a couple dummy tasks right off the bat
*/
const leftNavObj = leftNav();
const defaultProject = project("Default Project");
leftNavObj.addProject(defaultProject);
const testTask1 = task("brush", "gotta brush my teeth", "1/11/22");
const testTask2 = task("change", "gotta change my clothes", "1/11/22");
defaultProject.addTask(testTask1);
defaultProject.addTask(testTask2);

loadProjectContent(defaultProject);
loadProjects(leftNavObj);
document.querySelector(".Default").classList.add("selected");


/*
When a new project is added, it needs to be appended to the leftHandNav
Additionally, the node list listeners need to be refreshed
*/
const addProject = document.querySelector(".add-project");
addProject.addEventListener("click", () => {
    const newProjName = prompt("New project name: ");
    const newProject = project(newProjName);
    leftNavObj.addProject(newProject);
    loadProjects(leftNavObj);
    refreshProjectListener(leftNavObj);
    document.querySelector(`.${newProjName}`).classList.add("selected");
    loadProjectContent(newProject);
});

const modal = document.getElementById("myModal"); // Get the modal
const addTaskButton = document.querySelector(".add-task"); // Get the button that opens the modal
const span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
const addTaskForm = document.querySelector("#add-task-form"); //Get form
//Open modal when use clicks add
addTaskButton.addEventListener("click", () => {
    modal.style.display = "block";
    populateProjectsDropdown(leftNavObj.getProjects());
});
//Prevent form from refreshing window on submit and also store new task 
function handleForm(event) { event.preventDefault(); } 
addTaskForm.addEventListener('submit', handleForm);
addTaskForm.addEventListener("submit", () => {
    let newTask = getTaskFromInput();
    modal.style.display = "none";
    addTaskForm.reset();
    leftNavObj.getProjectByString(newTask.project).addTask(newTask);
    loadProjectContent(defaultProject);
    document.querySelector(`.${newTask.project}`).click();
});
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
}





// console.log(defaultProject.getTasks());

// defaultProject.removeTask(testTask2);

// console.log(defaultProject.getTasks());









//loadProjectContent(project2);

