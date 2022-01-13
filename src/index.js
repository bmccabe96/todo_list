import {task} from "./task";
import {loadProjects, loadProjectContent} from "./UI";
import {project} from "./project";
import { leftNav } from "./leftNav";

// let projects = [];
const leftNavObj = leftNav();
const defaultProject = project("default");
leftNavObj.addProject(defaultProject);
const testTask1 = task("brush", "gotta brush my teeth", "1/11/22");
const testTask2 = task("change", "gotta change my clothes", "1/11/22");
defaultProject.addTask(testTask1);
defaultProject.addTask(testTask2);

loadProjectContent(defaultProject);
loadProjects(leftNavObj);


let projects = document.querySelectorAll(".project");
console.log(projects);


const addProject = document.querySelector(".add-project");
addProject.addEventListener("click", () => {
    const newProjName = prompt("New project name: ");
    const newProject = project(newProjName);
    const newTask = task("brush", "gotta brush my teeth", "1/11/22");
    newProject.addTask(newTask);
    leftNavObj.addProject(newProject);
    loadProjects(leftNavObj);
    projects = document.querySelectorAll(".project");
    projects.forEach((project, index) => {
        project.addEventListener("click", () => {
            loadProjectContent(leftNavObj.getProjects()[index]);
        });
    });
});





// console.log(defaultProject.getTasks());

// defaultProject.removeTask(testTask2);

// console.log(defaultProject.getTasks());









//loadProjectContent(project2);

