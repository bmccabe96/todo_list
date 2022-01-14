import { task } from "./task";
import { project } from "./project";

const getTaskFromInput = () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const project = document.getElementById("project-select").value;
    return task(title, description, date, project);
};


export {getTaskFromInput};