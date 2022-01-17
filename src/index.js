import {task} from "./task";
import {loadProjects, loadProjectContent, refreshProjectListener, populateProjectsDropdown} from "./UI";
import {project} from "./project";
import { leftNav } from "./leftNav";
import { getTaskFromInput} from "./addTask";


const leftNavObj = leftNav();

/*
    TO DOOOOO

    IN THE ABOVE, I AM AUTO LOADING SOME DEFAULT STUFF. 
    NEED TO WORK ON LOCAL STORAGE
    IF LOCAL STORAGE EXISTS, THEN PULL THAT 
    ELSE, USE THAT DEFAULT SETUP ABOVE
/*

/*
    Test for Local storage and use if available -- If not, then just populate
    some default stuff
*/

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
//Testing if localstorage is available. If it is, need to check if we actually
//have projects and tasks
if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    if (localStorage.tasks !== undefined && localStorage.projects !== undefined) {
        console.log("Testing localstorage available");
        const loadedProjects = JSON.parse(localStorage.getItem("projects"));
        const loadedTasks = JSON.parse(localStorage.getItem("tasks"));
        loadedProjects.forEach(proj => {
            let currentProject = project(proj.projectName);
            leftNavObj.addProject(currentProject);
            console.log(currentProject);
            for (let i = 0; i < loadedTasks.length; i++) {
                if(loadedTasks[i].project === currentProject.projectName) {
                    currentProject.addTask(loadedTasks[i]);
                }
            }
        });
        console.log(leftNavObj.getProjects()[0].getTasks());
        loadProjects(leftNavObj);
        populateProjectsDropdown(leftNavObj.getProjects());
        loadProjectContent(leftNavObj.getProjects()[0]);
        refreshProjectListener(leftNavObj);
        document.querySelector(`.Default-Project`).click();
    }
    else {
        populateDummyData();
    }
  }
  else {
    // Too bad, no localStorage for us
    populateDummyData();
  }



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
    document.querySelector(`.${newProjName.replace(/\s/g , "-")}`).classList.add("selected");
    loadProjectContent(newProject);
});


//save functionality
const save = document.querySelector(".save");
save.addEventListener("click", () => {
    let savedProjects = [];
    let savedTasks = [];
    for(let i = 0; i < leftNavObj.getProjects().length; i++) {
        savedProjects.push(leftNavObj.getProjects()[i]);
        leftNavObj.getProjects()[i].getTasks().forEach(task => {
            savedTasks.push(task);
        });
    }
    console.log(savedProjects);
    console.log(savedTasks);
    window.localStorage.clear();
    window.localStorage.setItem("tasks", JSON.stringify(savedTasks));
    window.localStorage.setItem("projects", JSON.stringify(savedProjects));
});


/*
MODAL STUFF BELOW
*/


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
    loadProjectContent(leftNavObj.getProjectByString(newTask.project));
    console.log(`.${newTask.project}`);
    document.querySelector(`.${newTask.project.replace(/\s/g , "-")}`).click();
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



function populateDummyData() {
    const defaultProject = project("Default Project");
    leftNavObj.addProject(defaultProject);
    const testTask1 = task("brush", "gotta brush my teeth", "1/11/22", defaultProject.projectName);
    const testTask2 = task("change", "gotta change my clothes", "1/11/22", defaultProject.projectName);
    defaultProject.addTask(testTask1);
    defaultProject.addTask(testTask2);

    loadProjectContent(defaultProject);
    loadProjects(leftNavObj);
    document.querySelector(".Default-Project").classList.add("selected");
}



// console.log(defaultProject.getTasks());

// defaultProject.removeTask(testTask2);

// console.log(defaultProject.getTasks());









//loadProjectContent(project2);

