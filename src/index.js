import {task} from "./task";
import {loadProjects, loadProjectContent} from "./UI";
import {project} from "./project";

const defaultProject = project("default");
const testTask1 = task("brush", "gotta brush my teeth", "1/11/22");
const testTask2 = task("change", "gotta change my clothes", "1/11/22", "high");
defaultProject.addTask(testTask1);
defaultProject.addTask(testTask2);

//loadProjectContent(defaultProject);

console.log(defaultProject.getTasks());

defaultProject.removeTask(testTask2);

console.log(defaultProject.getTasks());
