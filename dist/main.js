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


        if (task.isChecked === true) {
            checkbox.textContent = ":)";
            checkbox.classList.add("checked");
        }
        else {
            checkbox.textContent = "";
            checkbox.classList.remove("checked");
        }


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

    checkBoxes.forEach((checkBox, index) => {
        checkBox.addEventListener("click", () => {
            if(checkBox.textContent !== ":)") {
                checkBox.textContent = ":)";
                checkBox.classList.add("checked");
                project.getTasks()[index].isChecked = true;
                console.log(project.getTasks()[index]);
            }else {
                checkBox.textContent = "";
                checkBox.classList.remove("checked");
                project.getTasks()[index].isChecked = false;
                console.log(project.getTasks()[index]);
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

    const removeProject = (project) => {
        projects = projects.filter(function(obj) {
            return obj !== project;
        });
    };

    return {
        getProject, getProjects, addProject, 
        getProjectByString, removeProject
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
const task = (title, description, dueDate, project) => {
    let isChecked = false;
    return {
        title, 
        description, 
        dueDate,
        project,
        isChecked
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







const leftNavObj = (0,_leftNav__WEBPACK_IMPORTED_MODULE_3__.leftNav)();

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
if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    if (localStorage.tasks !== undefined && localStorage.projects !== undefined) {
        console.log("Testing localstorage available");
        const loadedProjects = JSON.parse(localStorage.getItem("projects"));
        const loadedTasks = JSON.parse(localStorage.getItem("tasks"));
        loadedProjects.forEach(proj => {
            let currentProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__.project)(proj.projectName);
            leftNavObj.addProject(currentProject);
            console.log(currentProject);
            for (let i = 0; i < loadedTasks.length; i++) {
                if(loadedTasks[i].project === currentProject.projectName) {
                    currentProject.addTask(loadedTasks[i]);
                }
            }
        });
        console.log(leftNavObj.getProjects()[0].getTasks());
        (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjects)(leftNavObj);
        (0,_UI__WEBPACK_IMPORTED_MODULE_1__.populateProjectsDropdown)(leftNavObj.getProjects());
        (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjectContent)(leftNavObj.getProjects()[0]);
        (0,_UI__WEBPACK_IMPORTED_MODULE_1__.refreshProjectListener)(leftNavObj);
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
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__.project)(newProjName);
    leftNavObj.addProject(newProject);
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjects)(leftNavObj);
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.refreshProjectListener)(leftNavObj);
    document.querySelector(`.${newProjName.replace(/\s/g , "-")}`).classList.add("selected");
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjectContent)(newProject);
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



function populateDummyData() {
    const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__.project)("Default Project");
    leftNavObj.addProject(defaultProject);
    const testTask1 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.task)("brush", "gotta brush my teeth", "1/11/22", defaultProject.projectName);
    const testTask2 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.task)("change", "gotta change my clothes", "1/11/22", defaultProject.projectName);
    defaultProject.addTask(testTask1);
    defaultProject.addTask(testTask2);

    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjectContent)(defaultProject);
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjects)(leftNavObj);
    document.querySelector(".Default-Project").classList.add("selected");
}



// console.log(defaultProject.getTasks());

// defaultProject.removeTask(testTask2);

// console.log(defaultProject.getTasks());









//loadProjectContent(project2);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2xlZnROYXYuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHtsZWZ0TmF2fSBmcm9tIFwiLi9sZWZ0TmF2XCI7XG5cblxuY29uc3QgbG9hZFByb2plY3RzID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhwcm9qZWN0TGlzdCk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBvYmouZ2V0UHJvamVjdHMoKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2pFbGVtZW50LnRleHRDb250ZW50ID0gb2JqLmdldFByb2plY3QocHJvamVjdCkucHJvamVjdE5hbWU7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZURhc2hlZCA9IHByb2plY3QucHJvamVjdE5hbWUucmVwbGFjZSgvXFxzL2cgLCBcIi1cIik7XG4gICAgICAgIHByb2pFbGVtZW50LmNsYXNzTmFtZSA9IGBwcm9qZWN0ICR7Y2xhc3NOYW1lRGFzaGVkfWA7XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2pFbGVtZW50KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGxvYWRQcm9qZWN0Q29udGVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250ZW50XCIpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XG4gICAgY29uc3QgdGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblxuICAgICAgICBjb25zdCBvdXRlclRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdXRlclRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gXCJvdXRlci10YXNrLWNvbnRhaW5lclwiO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgY29uc3QgaW5uZXJUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5uZXJUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW5uZXItdGFzay1jb250YWluZXJcIjtcbiAgICAgICAgY29uc3QgaW5uZXJUYXNrQ29udGFpbmVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlubmVyVGFza0NvbnRhaW5lckxlZnQuY2xhc3NOYW1lID0gXCJpbm5lci10YXNrLWNvbnRhaW5lci1sZWZ0XCI7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTmFtZSA9IFwicmVtb3ZlLXRhc2sgYnRuXCI7XG4gICAgICAgIHJlbW92ZS50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG5cbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9IFwidGFzay10aXRsZVwiO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGR1ZURhdGVFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgICAgXG4gICAgICAgIGlubmVyVGFza0NvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgaW5uZXJUYXNrQ29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgICAgICBpbm5lclRhc2tDb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKGR1ZURhdGVFbGVtZW50KTtcblxuICAgICAgICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrQ29udGFpbmVyTGVmdCk7XG4gICAgICAgIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgICAgIG91dGVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgIG91dGVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lclRhc2tDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3V0ZXJUYXNrQ29udGFpbmVyKTtcblxuXG4gICAgICAgIGlmICh0YXNrLmlzQ2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2hlY2tib3gudGV4dENvbnRlbnQgPSBcIjopXCI7XG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrYm94LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkXCIpO1xuICAgICAgICB9XG5cblxuICAgIH0pO1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlbW92ZS10YXNrXCIpO1xuICAgIGNvbnN0IGNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94XCIpO1xuXG4gICAgcmVtb3ZlQnV0dG9ucy5mb3JFYWNoKChyZW1vdmUsIGluZGV4KSA9PiB7XG4gICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5yZW1vdmVUYXNrKHByb2plY3QuZ2V0VGFza3MoKVtpbmRleF0pXG4gICAgICAgICAgICBsb2FkUHJvamVjdENvbnRlbnQocHJvamVjdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmdldFRhc2tzKCkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNoZWNrQm94ZXMuZm9yRWFjaCgoY2hlY2tCb3gsIGluZGV4KSA9PiB7XG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihjaGVja0JveC50ZXh0Q29udGVudCAhPT0gXCI6KVwiKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3gudGV4dENvbnRlbnQgPSBcIjopXCI7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpW2luZGV4XS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFza3MoKVtpbmRleF0pO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNoZWNrQm94LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKClbaW5kZXhdLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFza3MoKVtpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cblxuXG5jb25zdCBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24gPSAocHJvamVjdHMpID0+IHtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1zZWxlY3RcIikpO1xuICAgIGNvbnN0IHByb2plY3RzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3Qtc2VsZWN0XCIpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBvcHQgPSBwcm9qZWN0c1tpXS5wcm9qZWN0TmFtZTtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IG9wdDtcbiAgICAgICAgZWwudmFsdWUgPSBvcHQ7XG4gICAgICAgIHByb2plY3RzRWwuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbn07XG5cblxuY29uc3QgcmVmcmVzaFByb2plY3RMaXN0ZW5lciA9IChvYmopID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2FkUHJvamVjdENvbnRlbnQob2JqLmdldFByb2plY3RzKClbaW5kZXhdKTtcbiAgICAgICAgICAgIC8vZ2V0IHJpZCBvZiBzZWxlY3RlZCBmcm9tIHByaW9yXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7bG9hZFByb2plY3RzLCBsb2FkUHJvamVjdENvbnRlbnQsIFxuICAgIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93biwgcmVmcmVzaFByb2plY3RMaXN0ZW5lcn07XG5cblxuIiwiaW1wb3J0IHsgdGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IGdldFRhc2tGcm9tSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Qtc2VsZWN0XCIpLnZhbHVlO1xuICAgIHJldHVybiB0YXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJvamVjdCk7XG59O1xuXG5cbmV4cG9ydCB7Z2V0VGFza0Zyb21JbnB1dH07IiwiXG5jb25zdCBsZWZ0TmF2ID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RzW2ldID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByb2plY3RCeVN0cmluZyA9IChwcm9qZWN0U3RyaW5nKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RzW2ldLnByb2plY3ROYW1lID09PSBwcm9qZWN0U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICE9PSBwcm9qZWN0O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UHJvamVjdCwgZ2V0UHJvamVjdHMsIGFkZFByb2plY3QsIFxuICAgICAgICBnZXRQcm9qZWN0QnlTdHJpbmcsIHJlbW92ZVByb2plY3RcbiAgICB9O1xufTtcblxuZXhwb3J0IHtsZWZ0TmF2fTsiLCJcbmNvbnN0IHByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH07XG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICE9PSB0YXNrO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBnZXRUYXNrcyxcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgcmVtb3ZlVGFza1xuICAgIH1cbn07XG5cbmV4cG9ydCB7cHJvamVjdH07IiwiY29uc3QgdGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QpID0+IHtcbiAgICBsZXQgaXNDaGVja2VkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsIFxuICAgICAgICBkZXNjcmlwdGlvbiwgXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIGlzQ2hlY2tlZFxuICAgIH07XG59O1xuXG5leHBvcnQge3Rhc2t9O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7dGFza30gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHtsb2FkUHJvamVjdHMsIGxvYWRQcm9qZWN0Q29udGVudCwgcmVmcmVzaFByb2plY3RMaXN0ZW5lciwgcG9wdWxhdGVQcm9qZWN0c0Ryb3Bkb3dufSBmcm9tIFwiLi9VSVwiO1xuaW1wb3J0IHtwcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBsZWZ0TmF2IH0gZnJvbSBcIi4vbGVmdE5hdlwiO1xuaW1wb3J0IHsgZ2V0VGFza0Zyb21JbnB1dH0gZnJvbSBcIi4vYWRkVGFza1wiO1xuXG5cbmNvbnN0IGxlZnROYXZPYmogPSBsZWZ0TmF2KCk7XG5cbi8qXG4gICAgVE8gRE9PT09PXG5cbiAgICBJTiBUSEUgQUJPVkUsIEkgQU0gQVVUTyBMT0FESU5HIFNPTUUgREVGQVVMVCBTVFVGRi4gXG4gICAgTkVFRCBUTyBXT1JLIE9OIExPQ0FMIFNUT1JBR0VcbiAgICBJRiBMT0NBTCBTVE9SQUdFIEVYSVNUUywgVEhFTiBQVUxMIFRIQVQgXG4gICAgRUxTRSwgVVNFIFRIQVQgREVGQVVMVCBTRVRVUCBBQk9WRVxuLypcblxuLypcbiAgICBUZXN0IGZvciBMb2NhbCBzdG9yYWdlIGFuZCB1c2UgaWYgYXZhaWxhYmxlIC0tIElmIG5vdCwgdGhlbiBqdXN0IHBvcHVsYXRlXG4gICAgc29tZSBkZWZhdWx0IHN0dWZmXG4qL1xuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICB2YXIgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbn1cbmlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIC8vIFlpcHBlZSEgV2UgY2FuIHVzZSBsb2NhbFN0b3JhZ2UgYXdlc29tZW5lc3NcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRhc2tzICE9PSB1bmRlZmluZWQgJiYgbG9jYWxTdG9yYWdlLnByb2plY3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUZXN0aW5nIGxvY2Fsc3RvcmFnZSBhdmFpbGFibGVcIik7XG4gICAgICAgIGNvbnN0IGxvYWRlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICAgICAgY29uc3QgbG9hZGVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgICAgICBsb2FkZWRQcm9qZWN0cy5mb3JFYWNoKHByb2ogPT4ge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdChwcm9qLnByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGxlZnROYXZPYmouYWRkUHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvYWRlZFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYobG9hZGVkVGFza3NbaV0ucHJvamVjdCA9PT0gY3VycmVudFByb2plY3QucHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QuYWRkVGFzayhsb2FkZWRUYXNrc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cobGVmdE5hdk9iai5nZXRQcm9qZWN0cygpWzBdLmdldFRhc2tzKCkpO1xuICAgICAgICBsb2FkUHJvamVjdHMobGVmdE5hdk9iaik7XG4gICAgICAgIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bihsZWZ0TmF2T2JqLmdldFByb2plY3RzKCkpO1xuICAgICAgICBsb2FkUHJvamVjdENvbnRlbnQobGVmdE5hdk9iai5nZXRQcm9qZWN0cygpWzBdKTtcbiAgICAgICAgcmVmcmVzaFByb2plY3RMaXN0ZW5lcihsZWZ0TmF2T2JqKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLkRlZmF1bHQtUHJvamVjdGApLmNsaWNrKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwb3B1bGF0ZUR1bW15RGF0YSgpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUb28gYmFkLCBubyBsb2NhbFN0b3JhZ2UgZm9yIHVzXG4gICAgcG9wdWxhdGVEdW1teURhdGEoKTtcbiAgfVxuXG5cblxuLypcbldoZW4gYSBuZXcgcHJvamVjdCBpcyBhZGRlZCwgaXQgbmVlZHMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIGxlZnRIYW5kTmF2XG5BZGRpdGlvbmFsbHksIHRoZSBub2RlIGxpc3QgbGlzdGVuZXJzIG5lZWQgdG8gYmUgcmVmcmVzaGVkXG4qL1xuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvak5hbWUgPSBwcm9tcHQoXCJOZXcgcHJvamVjdCBuYW1lOiBcIik7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QobmV3UHJvak5hbWUpO1xuICAgIGxlZnROYXZPYmouYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICBsb2FkUHJvamVjdHMobGVmdE5hdk9iaik7XG4gICAgcmVmcmVzaFByb2plY3RMaXN0ZW5lcihsZWZ0TmF2T2JqKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuZXdQcm9qTmFtZS5yZXBsYWNlKC9cXHMvZyAsIFwiLVwiKX1gKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgbG9hZFByb2plY3RDb250ZW50KG5ld1Byb2plY3QpO1xufSk7XG5cblxuLy9zYXZlIGZ1bmN0aW9uYWxpdHlcbmNvbnN0IHNhdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNhdmVcIik7XG5zYXZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHNhdmVkUHJvamVjdHMgPSBbXTtcbiAgICBsZXQgc2F2ZWRUYXNrcyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZWZ0TmF2T2JqLmdldFByb2plY3RzKCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2F2ZWRQcm9qZWN0cy5wdXNoKGxlZnROYXZPYmouZ2V0UHJvamVjdHMoKVtpXSk7XG4gICAgICAgIGxlZnROYXZPYmouZ2V0UHJvamVjdHMoKVtpXS5nZXRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBzYXZlZFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzYXZlZFByb2plY3RzKTtcbiAgICBjb25zb2xlLmxvZyhzYXZlZFRhc2tzKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRUYXNrcykpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHNhdmVkUHJvamVjdHMpKTtcbn0pO1xuXG5cbi8qXG5NT0RBTCBTVFVGRiBCRUxPV1xuKi9cblxuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTsgLy8gR2V0IHRoZSBtb2RhbFxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7IC8vIEdldCB0aGUgYnV0dG9uIHRoYXQgb3BlbnMgdGhlIG1vZGFsXG5jb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdOyAvLyBHZXQgdGhlIDxzcGFuPiBlbGVtZW50IHRoYXQgY2xvc2VzIHRoZSBtb2RhbFxuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWZvcm1cIik7IC8vR2V0IGZvcm1cbi8vT3BlbiBtb2RhbCB3aGVuIHVzZSBjbGlja3MgYWRkXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24obGVmdE5hdk9iai5nZXRQcm9qZWN0cygpKTtcbn0pO1xuLy9QcmV2ZW50IGZvcm0gZnJvbSByZWZyZXNoaW5nIHdpbmRvdyBvbiBzdWJtaXQgYW5kIGFsc28gc3RvcmUgbmV3IHRhc2sgXG5mdW5jdGlvbiBoYW5kbGVGb3JtKGV2ZW50KSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IH0gXG5hZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtKTtcbmFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgIGxldCBuZXdUYXNrID0gZ2V0VGFza0Zyb21JbnB1dCgpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBhZGRUYXNrRm9ybS5yZXNldCgpO1xuICAgIGxlZnROYXZPYmouZ2V0UHJvamVjdEJ5U3RyaW5nKG5ld1Rhc2sucHJvamVjdCkuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBsb2FkUHJvamVjdENvbnRlbnQobGVmdE5hdk9iai5nZXRQcm9qZWN0QnlTdHJpbmcobmV3VGFzay5wcm9qZWN0KSk7XG4gICAgY29uc29sZS5sb2coYC4ke25ld1Rhc2sucHJvamVjdH1gKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuZXdUYXNrLnByb2plY3QucmVwbGFjZSgvXFxzL2cgLCBcIi1cIil9YCkuY2xpY2soKTtcbn0pO1xuLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG5zcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG4gIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufVxuXG5cblxuZnVuY3Rpb24gcG9wdWxhdGVEdW1teURhdGEoKSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KFwiRGVmYXVsdCBQcm9qZWN0XCIpO1xuICAgIGxlZnROYXZPYmouYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG4gICAgY29uc3QgdGVzdFRhc2sxID0gdGFzayhcImJydXNoXCIsIFwiZ290dGEgYnJ1c2ggbXkgdGVldGhcIiwgXCIxLzExLzIyXCIsIGRlZmF1bHRQcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICBjb25zdCB0ZXN0VGFzazIgPSB0YXNrKFwiY2hhbmdlXCIsIFwiZ290dGEgY2hhbmdlIG15IGNsb3RoZXNcIiwgXCIxLzExLzIyXCIsIGRlZmF1bHRQcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRUYXNrKHRlc3RUYXNrMSk7XG4gICAgZGVmYXVsdFByb2plY3QuYWRkVGFzayh0ZXN0VGFzazIpO1xuXG4gICAgbG9hZFByb2plY3RDb250ZW50KGRlZmF1bHRQcm9qZWN0KTtcbiAgICBsb2FkUHJvamVjdHMobGVmdE5hdk9iaik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5EZWZhdWx0LVByb2plY3RcIikuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5cblxuLy8gY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QuZ2V0VGFza3MoKSk7XG5cbi8vIGRlZmF1bHRQcm9qZWN0LnJlbW92ZVRhc2sodGVzdFRhc2syKTtcblxuLy8gY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QuZ2V0VGFza3MoKSk7XG5cblxuXG5cblxuXG5cblxuXG4vL2xvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0Mik7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==