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
document.querySelector(".Default-Project").classList.add("selected");


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
    document.querySelector(`.${newProjName.replace(/\s/g , "-")}`).classList.add("selected");
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjectContent)(newProject);
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
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjectContent)(leftNavObj.getProjectByString(newTask.project));
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





// console.log(defaultProject.getTasks());

// defaultProject.removeTask(testTask2);

// console.log(defaultProject.getTasks());









//loadProjectContent(project2);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNEO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxrQkFBa0IsMERBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWtCO0FBQ3RCLG9CQUFvQixnQkFBZ0I7QUFDcEMsK0JBQStCLHFDQUFxQztBQUNwRSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2xlZnROYXYuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHtsZWZ0TmF2fSBmcm9tIFwiLi9sZWZ0TmF2XCI7XG5cblxuY29uc3QgbG9hZFByb2plY3RzID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhwcm9qZWN0TGlzdCk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBvYmouZ2V0UHJvamVjdHMoKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2pFbGVtZW50LnRleHRDb250ZW50ID0gb2JqLmdldFByb2plY3QocHJvamVjdCkucHJvamVjdE5hbWU7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZURhc2hlZCA9IHByb2plY3QucHJvamVjdE5hbWUucmVwbGFjZSgvXFxzL2cgLCBcIi1cIik7XG4gICAgICAgIHByb2pFbGVtZW50LmNsYXNzTmFtZSA9IGBwcm9qZWN0ICR7Y2xhc3NOYW1lRGFzaGVkfWA7XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2pFbGVtZW50KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGxvYWRQcm9qZWN0Q29udGVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250ZW50XCIpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XG4gICAgY29uc3QgdGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblxuICAgICAgICBjb25zdCBvdXRlclRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdXRlclRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gXCJvdXRlci10YXNrLWNvbnRhaW5lclwiO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgY29uc3QgaW5uZXJUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5uZXJUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW5uZXItdGFzay1jb250YWluZXJcIjtcbiAgICAgICAgY29uc3QgaW5uZXJUYXNrQ29udGFpbmVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlubmVyVGFza0NvbnRhaW5lckxlZnQuY2xhc3NOYW1lID0gXCJpbm5lci10YXNrLWNvbnRhaW5lci1sZWZ0XCI7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTmFtZSA9IFwicmVtb3ZlLXRhc2sgYnRuXCI7XG4gICAgICAgIHJlbW92ZS50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG5cbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9IFwidGFzay10aXRsZVwiO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGR1ZURhdGVFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgICAgXG4gICAgICAgIGlubmVyVGFza0NvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgaW5uZXJUYXNrQ29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgICAgICBpbm5lclRhc2tDb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKGR1ZURhdGVFbGVtZW50KTtcblxuICAgICAgICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrQ29udGFpbmVyTGVmdCk7XG4gICAgICAgIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgICAgIG91dGVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgIG91dGVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lclRhc2tDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3V0ZXJUYXNrQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgICBjb25zdCByZW1vdmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZW1vdmUtdGFza1wiKTtcbiAgICBjb25zdCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKTtcblxuICAgIHJlbW92ZUJ1dHRvbnMuZm9yRWFjaCgocmVtb3ZlLCBpbmRleCkgPT4ge1xuICAgICAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlVGFzayhwcm9qZWN0LmdldFRhc2tzKClbaW5kZXhdKVxuICAgICAgICAgICAgbG9hZFByb2plY3RDb250ZW50KHByb2plY3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC5nZXRUYXNrcygpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjaGVja0JveGVzLmZvckVhY2goKGNoZWNrQm94KSA9PiB7XG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihjaGVja0JveC50ZXh0Q29udGVudCAhPT0gXCI6KVwiKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3gudGV4dENvbnRlbnQgPSBcIjopXCI7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIilcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBjaGVja0JveC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5cblxuY29uc3QgcG9wdWxhdGVQcm9qZWN0c0Ryb3Bkb3duID0gKHByb2plY3RzKSA9PiB7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3Qtc2VsZWN0XCIpKTtcbiAgICBjb25zdCBwcm9qZWN0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXNlbGVjdFwiKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0ID0gcHJvamVjdHNbaV0ucHJvamVjdE5hbWU7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBvcHQ7XG4gICAgICAgIGVsLnZhbHVlID0gb3B0O1xuICAgICAgICBwcm9qZWN0c0VsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG59O1xuXG5cbmNvbnN0IHJlZnJlc2hQcm9qZWN0TGlzdGVuZXIgPSAob2JqKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbG9hZFByb2plY3RDb250ZW50KG9iai5nZXRQcm9qZWN0cygpW2luZGV4XSk7XG4gICAgICAgICAgICAvL2dldCByaWQgb2Ygc2VsZWN0ZWQgZnJvbSBwcmlvclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQge2xvYWRQcm9qZWN0cywgbG9hZFByb2plY3RDb250ZW50LCBcbiAgICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24sIHJlZnJlc2hQcm9qZWN0TGlzdGVuZXJ9O1xuXG5cbiIsImltcG9ydCB7IHRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBnZXRUYXNrRnJvbUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXNlbGVjdFwiKS52YWx1ZTtcbiAgICByZXR1cm4gdGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByb2plY3QpO1xufTtcblxuXG5leHBvcnQge2dldFRhc2tGcm9tSW5wdXR9OyIsIlxuY29uc3QgbGVmdE5hdiA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c1tpXSA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0QnlTdHJpbmcgPSAocHJvamVjdFN0cmluZykgPT4ge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c1tpXS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdFN0cmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UHJvamVjdCwgZ2V0UHJvamVjdHMsIGFkZFByb2plY3QsIGdldFByb2plY3RCeVN0cmluZ1xuICAgIH07XG59O1xuXG5leHBvcnQge2xlZnROYXZ9OyIsIlxuY29uc3QgcHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGxldCB0YXNrcyA9IFtdO1xuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfTtcbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcihmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogIT09IHRhc2s7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgIGdldFRhc2tzLFxuICAgICAgICBhZGRUYXNrLFxuICAgICAgICByZW1vdmVUYXNrXG4gICAgfVxufTtcblxuZXhwb3J0IHtwcm9qZWN0fTsiLCJjb25zdCB0YXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdD1cImRlZmF1bHRcIikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLCBcbiAgICAgICAgZGVzY3JpcHRpb24sIFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcm9qZWN0XG4gICAgfTtcbn07XG5cbmV4cG9ydCB7dGFza307XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt0YXNrfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQge2xvYWRQcm9qZWN0cywgbG9hZFByb2plY3RDb250ZW50LCByZWZyZXNoUHJvamVjdExpc3RlbmVyLCBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd259IGZyb20gXCIuL1VJXCI7XG5pbXBvcnQge3Byb2plY3R9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGxlZnROYXYgfSBmcm9tIFwiLi9sZWZ0TmF2XCI7XG5pbXBvcnQgeyBnZXRUYXNrRnJvbUlucHV0fSBmcm9tIFwiLi9hZGRUYXNrXCI7XG5cbi8qXG5Jbml0aWFsaXplIHRoZSBsZWZ0TmF2T2JqZWN0IHdoaWNoIHdpbGwgYmUgYSBkeW5hbWljIGxpc3Qgb2YgcHJvamVjdHMgdGhhdCBzdG9yZSB0YXNrc1xuQWRkaXRpb25hbGx5LCBsb2FkIHVwIGEgY291cGxlIGR1bW15IHRhc2tzIHJpZ2h0IG9mZiB0aGUgYmF0XG4qL1xuY29uc3QgbGVmdE5hdk9iaiA9IGxlZnROYXYoKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdChcIkRlZmF1bHQgUHJvamVjdFwiKTtcbmxlZnROYXZPYmouYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG5jb25zdCB0ZXN0VGFzazEgPSB0YXNrKFwiYnJ1c2hcIiwgXCJnb3R0YSBicnVzaCBteSB0ZWV0aFwiLCBcIjEvMTEvMjJcIik7XG5jb25zdCB0ZXN0VGFzazIgPSB0YXNrKFwiY2hhbmdlXCIsIFwiZ290dGEgY2hhbmdlIG15IGNsb3RoZXNcIiwgXCIxLzExLzIyXCIpO1xuZGVmYXVsdFByb2plY3QuYWRkVGFzayh0ZXN0VGFzazEpO1xuZGVmYXVsdFByb2plY3QuYWRkVGFzayh0ZXN0VGFzazIpO1xuXG5sb2FkUHJvamVjdENvbnRlbnQoZGVmYXVsdFByb2plY3QpO1xubG9hZFByb2plY3RzKGxlZnROYXZPYmopO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5EZWZhdWx0LVByb2plY3RcIikuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuXG5cbi8qXG5XaGVuIGEgbmV3IHByb2plY3QgaXMgYWRkZWQsIGl0IG5lZWRzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBsZWZ0SGFuZE5hdlxuQWRkaXRpb25hbGx5LCB0aGUgbm9kZSBsaXN0IGxpc3RlbmVycyBuZWVkIHRvIGJlIHJlZnJlc2hlZFxuKi9cbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2pOYW1lID0gcHJvbXB0KFwiTmV3IHByb2plY3QgbmFtZTogXCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KG5ld1Byb2pOYW1lKTtcbiAgICBsZWZ0TmF2T2JqLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgbG9hZFByb2plY3RzKGxlZnROYXZPYmopO1xuICAgIHJlZnJlc2hQcm9qZWN0TGlzdGVuZXIobGVmdE5hdk9iaik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmV3UHJvak5hbWUucmVwbGFjZSgvXFxzL2cgLCBcIi1cIil9YCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIGxvYWRQcm9qZWN0Q29udGVudChuZXdQcm9qZWN0KTtcbn0pO1xuXG5cblxuXG5cbi8qXG5NT0RBTCBTVFVGRiBCRUxPV1xuKi9cblxuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTsgLy8gR2V0IHRoZSBtb2RhbFxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7IC8vIEdldCB0aGUgYnV0dG9uIHRoYXQgb3BlbnMgdGhlIG1vZGFsXG5jb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdOyAvLyBHZXQgdGhlIDxzcGFuPiBlbGVtZW50IHRoYXQgY2xvc2VzIHRoZSBtb2RhbFxuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWZvcm1cIik7IC8vR2V0IGZvcm1cbi8vT3BlbiBtb2RhbCB3aGVuIHVzZSBjbGlja3MgYWRkXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24obGVmdE5hdk9iai5nZXRQcm9qZWN0cygpKTtcbn0pO1xuLy9QcmV2ZW50IGZvcm0gZnJvbSByZWZyZXNoaW5nIHdpbmRvdyBvbiBzdWJtaXQgYW5kIGFsc28gc3RvcmUgbmV3IHRhc2sgXG5mdW5jdGlvbiBoYW5kbGVGb3JtKGV2ZW50KSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IH0gXG5hZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtKTtcbmFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgIGxldCBuZXdUYXNrID0gZ2V0VGFza0Zyb21JbnB1dCgpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBhZGRUYXNrRm9ybS5yZXNldCgpO1xuICAgIGxlZnROYXZPYmouZ2V0UHJvamVjdEJ5U3RyaW5nKG5ld1Rhc2sucHJvamVjdCkuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBsb2FkUHJvamVjdENvbnRlbnQobGVmdE5hdk9iai5nZXRQcm9qZWN0QnlTdHJpbmcobmV3VGFzay5wcm9qZWN0KSk7XG4gICAgY29uc29sZS5sb2coYC4ke25ld1Rhc2sucHJvamVjdH1gKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuZXdUYXNrLnByb2plY3QucmVwbGFjZSgvXFxzL2cgLCBcIi1cIil9YCkuY2xpY2soKTtcbn0pO1xuLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG5zcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG4gIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufVxuXG5cblxuXG5cbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LmdldFRhc2tzKCkpO1xuXG4vLyBkZWZhdWx0UHJvamVjdC5yZW1vdmVUYXNrKHRlc3RUYXNrMik7XG5cbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LmdldFRhc2tzKCkpO1xuXG5cblxuXG5cblxuXG5cblxuLy9sb2FkUHJvamVjdENvbnRlbnQocHJvamVjdDIpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=