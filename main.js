/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects),
/* harmony export */   "loadProjectContent": () => (/* binding */ loadProjectContent),
/* harmony export */   "populateProjectsDropdown": () => (/* binding */ populateProjectsDropdown),
/* harmony export */   "refreshProjectListener": () => (/* binding */ refreshProjectListener)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _leftNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leftNav */ "./src/leftNav.js");




const loadProjects = (obj) => {
    const projectList = document.querySelector(".project-list");
    removeAllChildNodes(projectList);
    const projects = obj.getProjects();
    projects.forEach(project => {
        const projElement = document.createElement("div");
        projElement.textContent = obj.getProject(project).projectName;
        projElement.className = `project ${project.projectName}`;
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






/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTaskFromInput": () => (/* binding */ getTaskFromInput)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



const getTaskFromInput = () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const project = document.getElementById("project-select").value;
    return (0,_task__WEBPACK_IMPORTED_MODULE_0__.task)(title, description, date, project);
};




/***/ }),

/***/ "./src/leftNav.js":
/*!************************!*\
  !*** ./src/leftNav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leftNav": () => (/* binding */ leftNav)
/* harmony export */ });

const leftNav = () => {
    let projects = [];

    const getProject = (project) => {
        for (let i=0; i<projects.length; i++) {
            if (projects[i] === project) {
                return projects[i];
            }
        }
    };

    const getProjectByString = (projectString) => {
        for (let i=0; i<projects.length; i++) {
            if (projects[i].projectName === projectString) {
                return projects[i];
            }
        }
    };

    const getProjects = () => {
        return projects;
    };

    const addProject = (project) => {
        projects.push(project);
    };

    return {
        getProject, getProjects, addProject, getProjectByString
    };
};



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });

const project = (projectName) => {
    let tasks = [];
    const getTasks = () => {
        return tasks;
    };
    const addTask = (task) => {
        tasks.push(task);
    };
    const removeTask = (task) => {
        tasks = tasks.filter(function(obj) {
            return obj !== task;
        });
    };
    return {
        projectName,
        getTasks,
        addTask,
        removeTask
    }
};



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
const task = (title, description, dueDate, project="default") => {
    return {
        title, 
        description, 
        dueDate,
        project
    };
};





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _leftNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leftNav */ "./src/leftNav.js");
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");






/*
Initialize the leftNavObject which will be a dynamic list of projects that store tasks
Additionally, load up a couple dummy tasks right off the bat
*/
const leftNavObj = (0,_leftNav__WEBPACK_IMPORTED_MODULE_3__.leftNav)();
const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__.project)("Default Project");
leftNavObj.addProject(defaultProject);
const testTask1 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.task)("brush", "gotta brush my teeth", "1/11/22");
const testTask2 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.task)("change", "gotta change my clothes", "1/11/22");
defaultProject.addTask(testTask1);
defaultProject.addTask(testTask2);

(0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjectContent)(defaultProject);
(0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjects)(leftNavObj);
document.querySelector(".Default").classList.add("selected");


/*
When a new project is added, it needs to be appended to the leftHandNav
Additionally, the node list listeners need to be refreshed
*/
const addProject = document.querySelector(".add-project");
addProject.addEventListener("click", () => {
    const newProjName = prompt("New project name: ");
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__.project)(newProjName);
    leftNavObj.addProject(newProject);
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjects)(leftNavObj);
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.refreshProjectListener)(leftNavObj);
    document.querySelector(`.${newProjName}`).classList.add("selected");
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjectContent)(newProject);
});

const modal = document.getElementById("myModal"); // Get the modal
const addTaskButton = document.querySelector(".add-task"); // Get the button that opens the modal
const span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
const addTaskForm = document.querySelector("#add-task-form"); //Get form
//Open modal when use clicks add
addTaskButton.addEventListener("click", () => {
    modal.style.display = "block";
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.populateProjectsDropdown)(leftNavObj.getProjects());
});
//Prevent form from refreshing window on submit and also store new task 
function handleForm(event) { event.preventDefault(); } 
addTaskForm.addEventListener('submit', handleForm);
addTaskForm.addEventListener("submit", () => {
    let newTask = (0,_addTask__WEBPACK_IMPORTED_MODULE_4__.getTaskFromInput)();
    modal.style.display = "none";
    addTaskForm.reset();
    leftNavObj.getProjectByString(newTask.project).addTask(newTask);
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjectContent)(defaultProject);
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9hZGRUYXNrLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9sZWZ0TmF2LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb2plY3R9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7bGVmdE5hdn0gZnJvbSBcIi4vbGVmdE5hdlwiO1xuXG5cbmNvbnN0IGxvYWRQcm9qZWN0cyA9IChvYmopID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocHJvamVjdExpc3QpO1xuICAgIGNvbnN0IHByb2plY3RzID0gb2JqLmdldFByb2plY3RzKCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvakVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qRWxlbWVudC50ZXh0Q29udGVudCA9IG9iai5nZXRQcm9qZWN0KHByb2plY3QpLnByb2plY3ROYW1lO1xuICAgICAgICBwcm9qRWxlbWVudC5jbGFzc05hbWUgPSBgcHJvamVjdCAke3Byb2plY3QucHJvamVjdE5hbWV9YDtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvakVsZW1lbnQpO1xuICAgIH0pO1xufTtcblxuY29uc3QgbG9hZFByb2plY3RDb250ZW50ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRlbnRcIik7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcbiAgICBjb25zdCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXG4gICAgICAgIGNvbnN0IG91dGVyVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG91dGVyVGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSBcIm91dGVyLXRhc2stY29udGFpbmVyXCI7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2hlY2tib3guY2xhc3NOYW1lID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjb25zdCBpbm5lclRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbm5lclRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gXCJpbm5lci10YXNrLWNvbnRhaW5lclwiO1xuICAgICAgICBjb25zdCBpbm5lclRhc2tDb250YWluZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5uZXJUYXNrQ29udGFpbmVyTGVmdC5jbGFzc05hbWUgPSBcImlubmVyLXRhc2stY29udGFpbmVyLWxlZnRcIjtcblxuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICByZW1vdmUuY2xhc3NOYW1lID0gXCJyZW1vdmUtdGFzayBidG5cIjtcbiAgICAgICAgcmVtb3ZlLnRleHRDb250ZW50ID0gXCJSZW1vdmVcIjtcblxuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0YXNrLXRpdGxlXCI7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGR1ZURhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZHVlRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICBcbiAgICAgICAgaW5uZXJUYXNrQ29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICBpbm5lclRhc2tDb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG4gICAgICAgIGlubmVyVGFza0NvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZUVsZW1lbnQpO1xuXG4gICAgICAgIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lclRhc2tDb250YWluZXJMZWZ0KTtcbiAgICAgICAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgICAgICAgb3V0ZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgb3V0ZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVGFza0NvbnRhaW5lcik7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChvdXRlclRhc2tDb250YWluZXIpO1xuICAgIH0pO1xuICAgIFxufTtcblxuY29uc3QgcG9wdWxhdGVQcm9qZWN0c0Ryb3Bkb3duID0gKHByb2plY3RzKSA9PiB7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3Qtc2VsZWN0XCIpKTtcbiAgICBjb25zdCBwcm9qZWN0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXNlbGVjdFwiKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0ID0gcHJvamVjdHNbaV0ucHJvamVjdE5hbWU7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBvcHQ7XG4gICAgICAgIGVsLnZhbHVlID0gb3B0O1xuICAgICAgICBwcm9qZWN0c0VsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG59O1xuXG5jb25zdCByZWZyZXNoUHJvamVjdExpc3RlbmVyID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0Q29udGVudChvYmouZ2V0UHJvamVjdHMoKVtpbmRleF0pO1xuICAgICAgICAgICAgLy9nZXQgcmlkIG9mIHNlbGVjdGVkIGZyb20gcHJpb3JcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtsb2FkUHJvamVjdHMsIGxvYWRQcm9qZWN0Q29udGVudCwgXG4gICAgcG9wdWxhdGVQcm9qZWN0c0Ryb3Bkb3duLCByZWZyZXNoUHJvamVjdExpc3RlbmVyfTtcblxuXG4iLCJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgZ2V0VGFza0Zyb21JbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1zZWxlY3RcIikudmFsdWU7XG4gICAgcmV0dXJuIHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcm9qZWN0KTtcbn07XG5cblxuZXhwb3J0IHtnZXRUYXNrRnJvbUlucHV0fTsiLCJcbmNvbnN0IGxlZnROYXYgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdHNbaV0gPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdEJ5U3RyaW5nID0gKHByb2plY3RTdHJpbmcpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdHNbaV0ucHJvamVjdE5hbWUgPT09IHByb2plY3RTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFByb2plY3QsIGdldFByb2plY3RzLCBhZGRQcm9qZWN0LCBnZXRQcm9qZWN0QnlTdHJpbmdcbiAgICB9O1xufTtcblxuZXhwb3J0IHtsZWZ0TmF2fTsiLCJcbmNvbnN0IHByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH07XG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICE9PSB0YXNrO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBnZXRUYXNrcyxcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgcmVtb3ZlVGFza1xuICAgIH1cbn07XG5cbmV4cG9ydCB7cHJvamVjdH07IiwiY29uc3QgdGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3Q9XCJkZWZhdWx0XCIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSwgXG4gICAgICAgIGRlc2NyaXB0aW9uLCBcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJvamVjdFxuICAgIH07XG59O1xuXG5leHBvcnQge3Rhc2t9O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7dGFza30gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHtsb2FkUHJvamVjdHMsIGxvYWRQcm9qZWN0Q29udGVudCwgcmVmcmVzaFByb2plY3RMaXN0ZW5lciwgcG9wdWxhdGVQcm9qZWN0c0Ryb3Bkb3dufSBmcm9tIFwiLi9VSVwiO1xuaW1wb3J0IHtwcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBsZWZ0TmF2IH0gZnJvbSBcIi4vbGVmdE5hdlwiO1xuaW1wb3J0IHsgZ2V0VGFza0Zyb21JbnB1dH0gZnJvbSBcIi4vYWRkVGFza1wiO1xuXG4vKlxuSW5pdGlhbGl6ZSB0aGUgbGVmdE5hdk9iamVjdCB3aGljaCB3aWxsIGJlIGEgZHluYW1pYyBsaXN0IG9mIHByb2plY3RzIHRoYXQgc3RvcmUgdGFza3NcbkFkZGl0aW9uYWxseSwgbG9hZCB1cCBhIGNvdXBsZSBkdW1teSB0YXNrcyByaWdodCBvZmYgdGhlIGJhdFxuKi9cbmNvbnN0IGxlZnROYXZPYmogPSBsZWZ0TmF2KCk7XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIik7XG5sZWZ0TmF2T2JqLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuY29uc3QgdGVzdFRhc2sxID0gdGFzayhcImJydXNoXCIsIFwiZ290dGEgYnJ1c2ggbXkgdGVldGhcIiwgXCIxLzExLzIyXCIpO1xuY29uc3QgdGVzdFRhc2syID0gdGFzayhcImNoYW5nZVwiLCBcImdvdHRhIGNoYW5nZSBteSBjbG90aGVzXCIsIFwiMS8xMS8yMlwiKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sodGVzdFRhc2sxKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sodGVzdFRhc2syKTtcblxubG9hZFByb2plY3RDb250ZW50KGRlZmF1bHRQcm9qZWN0KTtcbmxvYWRQcm9qZWN0cyhsZWZ0TmF2T2JqKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuRGVmYXVsdFwiKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cblxuLypcbldoZW4gYSBuZXcgcHJvamVjdCBpcyBhZGRlZCwgaXQgbmVlZHMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIGxlZnRIYW5kTmF2XG5BZGRpdGlvbmFsbHksIHRoZSBub2RlIGxpc3QgbGlzdGVuZXJzIG5lZWQgdG8gYmUgcmVmcmVzaGVkXG4qL1xuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvak5hbWUgPSBwcm9tcHQoXCJOZXcgcHJvamVjdCBuYW1lOiBcIik7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QobmV3UHJvak5hbWUpO1xuICAgIGxlZnROYXZPYmouYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICBsb2FkUHJvamVjdHMobGVmdE5hdk9iaik7XG4gICAgcmVmcmVzaFByb2plY3RMaXN0ZW5lcihsZWZ0TmF2T2JqKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuZXdQcm9qTmFtZX1gKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgbG9hZFByb2plY3RDb250ZW50KG5ld1Byb2plY3QpO1xufSk7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpOyAvLyBHZXQgdGhlIG1vZGFsXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTsgLy8gR2V0IHRoZSBidXR0b24gdGhhdCBvcGVucyB0aGUgbW9kYWxcbmNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07IC8vIEdldCB0aGUgPHNwYW4+IGVsZW1lbnQgdGhhdCBjbG9zZXMgdGhlIG1vZGFsXG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stZm9ybVwiKTsgLy9HZXQgZm9ybVxuLy9PcGVuIG1vZGFsIHdoZW4gdXNlIGNsaWNrcyBhZGRcbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bihsZWZ0TmF2T2JqLmdldFByb2plY3RzKCkpO1xufSk7XG4vL1ByZXZlbnQgZm9ybSBmcm9tIHJlZnJlc2hpbmcgd2luZG93IG9uIHN1Ym1pdCBhbmQgYWxzbyBzdG9yZSBuZXcgdGFzayBcbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSBcbmFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm0pO1xuYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG4gICAgbGV0IG5ld1Rhc2sgPSBnZXRUYXNrRnJvbUlucHV0KCk7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGFkZFRhc2tGb3JtLnJlc2V0KCk7XG4gICAgbGVmdE5hdk9iai5nZXRQcm9qZWN0QnlTdHJpbmcobmV3VGFzay5wcm9qZWN0KS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgIGxvYWRQcm9qZWN0Q29udGVudChkZWZhdWx0UHJvamVjdCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmV3VGFzay5wcm9qZWN0fWApLmNsaWNrKCk7XG59KTtcbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIDxzcGFuPiAoeCksIGNsb3NlIHRoZSBtb2RhbFxuc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn1cblxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5nZXRUYXNrcygpKTtcblxuLy8gZGVmYXVsdFByb2plY3QucmVtb3ZlVGFzayh0ZXN0VGFzazIpO1xuXG4vLyBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5nZXRUYXNrcygpKTtcblxuXG5cblxuXG5cblxuXG5cbi8vbG9hZFByb2plY3RDb250ZW50KHByb2plY3QyKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9