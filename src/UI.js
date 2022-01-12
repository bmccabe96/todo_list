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
        const titleElement = document.createElement("span");
        titleElement.textContent = task.title;
        const descriptionElement = document.createElement("span");
        descriptionElement.textContent = task.description;
        const dueDateElement = document.createElement("span");
        dueDateElement.textContent = task.dueDate;
        const priorityElemnent = document.createElement("span");
        priorityElemnent.textContent = task.priority;
    
        const newRow = document.createElement("li");
        newRow.appendChild(titleElement);
        newRow.appendChild(descriptionElement);
        newRow.appendChild(dueDateElement);
        newRow.appendChild(priorityElemnent);

        content.appendChild(newRow);
    });
    
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export {loadProjects, loadProjectContent};


