import {project} from "./project";

// const addToDefault = (task) => {
//     const defaultList = document.querySelector(".default-list");

//     const titleElement = document.createElement("span");
//     titleElement.textContent = task.title;
//     const descriptionElement = document.createElement("span");
//     descriptionElement.textContent = task.description;
//     const dueDateElement = document.createElement("span");
//     dueDateElement.textContent = task.dueDate;
//     const priorityElemnent = document.createElement("span");
//     priorityElemnent.textContent = task.priority;

//     const newRow = document.createElement("li");
//     newRow.appendChild(titleElement);
//     newRow.appendChild(descriptionElement);
//     newRow.appendChild(dueDateElement);
//     newRow.appendChild(priorityElemnent);

//     defaultList.appendChild(newRow);

// };












const loadProjects = () => {

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
        remove.className = "remove-task";
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
    
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export {loadProjects, loadProjectContent};


