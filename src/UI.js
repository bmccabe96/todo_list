import {project} from "./project";
import {leftNav} from "./leftNav";


const loadProjects = (obj) => {
    const projectList = document.querySelector(".project-list");
    removeAllChildNodes(projectList);
    const projects = obj.getProjects();
    projects.forEach(project => {
        const projElement = document.createElement("div");
        projElement.textContent = obj.getProject(project).projectName;
        const classNameDashed = project.projectName.replace(/\s/g , "-");
        projElement.className = `project ${classNameDashed}`;
        projectList.appendChild(projElement);
    });
};

const loadProjectContent = (project) => {
    const content = document.querySelector(".project-content");
    removeAllChildNodes(content);
    const tasks = project.getTasks();
    tasks.forEach(task => {

        const outerTaskContainer = document.createElement("div");
        outerTaskContainer.className = "outer-task-container";
        const checkbox = document.createElement("div");
        checkbox.className = "checkbox";
        const innerTaskContainer = document.createElement("div");
        innerTaskContainer.className = "inner-task-container";
        const innerTaskContainerLeft = document.createElement("div");
        innerTaskContainerLeft.className = "inner-task-container-left";

        const remove = document.createElement("button");
        remove.className = "remove-task btn";
        remove.textContent = "Remove";

        const titleElement = document.createElement("div");
        titleElement.textContent = task.title;
        titleElement.className = "task-title";
        const descriptionElement = document.createElement("div");
        descriptionElement.textContent = task.description;
        const dueDateElement = document.createElement("div");
        dueDateElement.textContent = task.dueDate;
      
        innerTaskContainerLeft.appendChild(titleElement);
        innerTaskContainerLeft.appendChild(descriptionElement);
        innerTaskContainerLeft.appendChild(dueDateElement);

        innerTaskContainer.appendChild(innerTaskContainerLeft);
        innerTaskContainer.appendChild(remove);

        outerTaskContainer.appendChild(checkbox);
        outerTaskContainer.appendChild(innerTaskContainer);

        content.appendChild(outerTaskContainer);
    });
    const removeButtons = document.querySelectorAll(".remove-task");
    const checkBoxes = document.querySelectorAll(".checkbox");

    removeButtons.forEach((remove, index) => {
        remove.addEventListener("click", () => {
            project.removeTask(project.getTasks()[index])
            loadProjectContent(project);
            console.log(project.getTasks());
        });
    });

    checkBoxes.forEach((checkBox) => {
        checkBox.addEventListener("click", () => {
            if(checkBox.textContent !== ":)") {
                checkBox.textContent = ":)";
                checkBox.classList.add("checked")
            }else {
                checkBox.textContent = "";
                checkBox.classList.remove("checked")
            }
        });
    });
};



const populateProjectsDropdown = (projects) => {
    removeAllChildNodes(document.querySelector("#project-select"));
    const projectsEl = document.querySelector("#project-select");
    for(let i = 0; i < projects.length; i++) {
        const opt = projects[i].projectName;
        const el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        projectsEl.appendChild(el);
    }
};


const refreshProjectListener = (obj) => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((project, index) => {
        project.addEventListener("click", () => {
            loadProjectContent(obj.getProjects()[index]);
            //get rid of selected from prior
            for (let i = 0; i < projects.length; i++) {
                projects[i].classList.remove("selected");
            }
            project.classList.add("selected");
        });
    });
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export {loadProjects, loadProjectContent, 
    populateProjectsDropdown, refreshProjectListener};


