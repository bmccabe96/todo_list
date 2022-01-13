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
/* harmony export */   "loadProjectContent": () => (/* binding */ loadProjectContent)
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
        projElement.className = "project";
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
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");


const leftNav = () => {
    let projects = [];

    const getProject = (project) => {
        for (let i=0; i<projects.length; i++) {
            if (projects[i] === project) {
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
        getProject, getProjects, addProject
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





// let projects = [];
const leftNavObj = (0,_leftNav__WEBPACK_IMPORTED_MODULE_3__.leftNav)();
const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__.project)("default");
leftNavObj.addProject(defaultProject);
const testTask1 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.task)("brush", "gotta brush my teeth", "1/11/22");
const testTask2 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.task)("change", "gotta change my clothes", "1/11/22");
defaultProject.addTask(testTask1);
defaultProject.addTask(testTask2);

(0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjectContent)(defaultProject);
(0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjects)(leftNavObj);


let projects = document.querySelectorAll(".project");
console.log(projects);


const addProject = document.querySelector(".add-project");
addProject.addEventListener("click", () => {
    const newProjName = prompt("New project name: ");
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__.project)(newProjName);
    const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__.task)("brush", "gotta brush my teeth", "1/11/22");
    newProject.addTask(newTask);
    leftNavObj.addProject(newProject);
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjects)(leftNavObj);
    projects = document.querySelectorAll(".project");
    projects.forEach((project, index) => {
        project.addEventListener("click", () => {
            (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjectContent)(leftNavObj.getProjects()[index]);
        });
    });
});





// console.log(defaultProject.getTasks());

// defaultProject.removeTask(testTask2);

// console.log(defaultProject.getTasks());









//loadProjectContent(project2);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNBOzs7OztBQUtsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRVI7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVjOzs7Ozs7OztVQ1RkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDMEI7QUFDcEI7QUFDRTs7QUFFcEM7QUFDQSxtQkFBbUIsaURBQU87QUFDMUIsdUJBQXVCLGlEQUFPO0FBQzlCO0FBQ0Esa0JBQWtCLDJDQUFJO0FBQ3RCLGtCQUFrQiwyQ0FBSTtBQUN0QjtBQUNBOztBQUVBLHVEQUFrQjtBQUNsQixpREFBWTs7O0FBR1o7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFPO0FBQzlCLG9CQUFvQiwyQ0FBSTtBQUN4QjtBQUNBO0FBQ0EsSUFBSSxpREFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFrQjtBQUM5QixTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7Ozs7OztBQU1EOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2xlZnROYXYuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHtsZWZ0TmF2fSBmcm9tIFwiLi9sZWZ0TmF2XCI7XG5cblxuXG5cbmNvbnN0IGxvYWRQcm9qZWN0cyA9IChvYmopID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocHJvamVjdExpc3QpO1xuICAgIGNvbnN0IHByb2plY3RzID0gb2JqLmdldFByb2plY3RzKCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvakVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qRWxlbWVudC50ZXh0Q29udGVudCA9IG9iai5nZXRQcm9qZWN0KHByb2plY3QpLnByb2plY3ROYW1lO1xuICAgICAgICBwcm9qRWxlbWVudC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvakVsZW1lbnQpO1xuICAgIH0pO1xufTtcblxuY29uc3QgbG9hZFByb2plY3RDb250ZW50ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRlbnRcIik7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcbiAgICBjb25zdCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXG4gICAgICAgIGNvbnN0IG91dGVyVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG91dGVyVGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSBcIm91dGVyLXRhc2stY29udGFpbmVyXCI7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2hlY2tib3guY2xhc3NOYW1lID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjb25zdCBpbm5lclRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbm5lclRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gXCJpbm5lci10YXNrLWNvbnRhaW5lclwiO1xuICAgICAgICBjb25zdCBpbm5lclRhc2tDb250YWluZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5uZXJUYXNrQ29udGFpbmVyTGVmdC5jbGFzc05hbWUgPSBcImlubmVyLXRhc2stY29udGFpbmVyLWxlZnRcIjtcblxuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICByZW1vdmUuY2xhc3NOYW1lID0gXCJyZW1vdmUtdGFza1wiO1xuICAgICAgICByZW1vdmUudGV4dENvbnRlbnQgPSBcIlJlbW92ZVwiO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSBcInRhc2stdGl0bGVcIjtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkdWVEYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICAgIFxuICAgICAgICBpbm5lclRhc2tDb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgICAgIGlubmVyVGFza0NvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICAgICAgaW5uZXJUYXNrQ29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZChkdWVEYXRlRWxlbWVudCk7XG5cbiAgICAgICAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVGFza0NvbnRhaW5lckxlZnQpO1xuICAgICAgICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgICBvdXRlclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICBvdXRlclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrQ29udGFpbmVyKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG91dGVyVGFza0NvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgXG59O1xuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtsb2FkUHJvamVjdHMsIGxvYWRQcm9qZWN0Q29udGVudH07XG5cblxuIiwiaW1wb3J0IHtsb2FkUHJvamVjdHN9IGZyb20gXCIuL1VJXCI7XG5cbmNvbnN0IGxlZnROYXYgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdHNbaV0gPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQcm9qZWN0LCBnZXRQcm9qZWN0cywgYWRkUHJvamVjdFxuICAgIH07XG59O1xuXG5leHBvcnQge2xlZnROYXZ9OyIsIlxuY29uc3QgcHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGxldCB0YXNrcyA9IFtdO1xuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfTtcbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcihmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogIT09IHRhc2s7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgIGdldFRhc2tzLFxuICAgICAgICBhZGRUYXNrLFxuICAgICAgICByZW1vdmVUYXNrXG4gICAgfVxufTtcblxuZXhwb3J0IHtwcm9qZWN0fTsiLCJjb25zdCB0YXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdD1cImRlZmF1bHRcIikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLCBcbiAgICAgICAgZGVzY3JpcHRpb24sIFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcm9qZWN0XG4gICAgfTtcbn07XG5cbmV4cG9ydCB7dGFza307XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt0YXNrfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQge2xvYWRQcm9qZWN0cywgbG9hZFByb2plY3RDb250ZW50fSBmcm9tIFwiLi9VSVwiO1xuaW1wb3J0IHtwcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBsZWZ0TmF2IH0gZnJvbSBcIi4vbGVmdE5hdlwiO1xuXG4vLyBsZXQgcHJvamVjdHMgPSBbXTtcbmNvbnN0IGxlZnROYXZPYmogPSBsZWZ0TmF2KCk7XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoXCJkZWZhdWx0XCIpO1xubGVmdE5hdk9iai5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbmNvbnN0IHRlc3RUYXNrMSA9IHRhc2soXCJicnVzaFwiLCBcImdvdHRhIGJydXNoIG15IHRlZXRoXCIsIFwiMS8xMS8yMlwiKTtcbmNvbnN0IHRlc3RUYXNrMiA9IHRhc2soXCJjaGFuZ2VcIiwgXCJnb3R0YSBjaGFuZ2UgbXkgY2xvdGhlc1wiLCBcIjEvMTEvMjJcIik7XG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKHRlc3RUYXNrMSk7XG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKHRlc3RUYXNrMik7XG5cbmxvYWRQcm9qZWN0Q29udGVudChkZWZhdWx0UHJvamVjdCk7XG5sb2FkUHJvamVjdHMobGVmdE5hdk9iaik7XG5cblxubGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG5cbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2pOYW1lID0gcHJvbXB0KFwiTmV3IHByb2plY3QgbmFtZTogXCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KG5ld1Byb2pOYW1lKTtcbiAgICBjb25zdCBuZXdUYXNrID0gdGFzayhcImJydXNoXCIsIFwiZ290dGEgYnJ1c2ggbXkgdGVldGhcIiwgXCIxLzExLzIyXCIpO1xuICAgIG5ld1Byb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBsZWZ0TmF2T2JqLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgbG9hZFByb2plY3RzKGxlZnROYXZPYmopO1xuICAgIHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0Q29udGVudChsZWZ0TmF2T2JqLmdldFByb2plY3RzKClbaW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5nZXRUYXNrcygpKTtcblxuLy8gZGVmYXVsdFByb2plY3QucmVtb3ZlVGFzayh0ZXN0VGFzazIpO1xuXG4vLyBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5nZXRUYXNrcygpKTtcblxuXG5cblxuXG5cblxuXG5cbi8vbG9hZFByb2plY3RDb250ZW50KHByb2plY3QyKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9