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
    
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}






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
const task = (title, description, dueDate, priority="medium", project="default") => {
    return {
        title, 
        description, 
        dueDate,
        priority,
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




const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__.project)("default");
const testTask1 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.task)("brush", "gotta brush my teeth", "1/11/22");
const testTask2 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.task)("change", "gotta change my clothes", "1/11/22", "high");
defaultProject.addTask(testTask1);
defaultProject.addTask(testTask2);

//loadProjectContent(defaultProject);

console.log(defaultProject.getTasks());

defaultProject.removeTask(testTask2);

console.log(defaultProject.getTasks());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUljOzs7Ozs7OztVQ1pkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ040QjtBQUMwQjtBQUNwQjs7QUFFbEMsdUJBQXVCLGlEQUFPO0FBQzlCLGtCQUFrQiwyQ0FBSTtBQUN0QixrQkFBa0IsMkNBQUk7QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbi8vIGNvbnN0IGFkZFRvRGVmYXVsdCA9ICh0YXNrKSA9PiB7XG4vLyAgICAgY29uc3QgZGVmYXVsdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZmF1bHQtbGlzdFwiKTtcblxuLy8gICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuLy8gICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4vLyAgICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4vLyAgICAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbi8vICAgICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuLy8gICAgIGR1ZURhdGVFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuLy8gICAgIGNvbnN0IHByaW9yaXR5RWxlbW5lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbi8vICAgICBwcmlvcml0eUVsZW1uZW50LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuLy8gICAgIGNvbnN0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbi8vICAgICBuZXdSb3cuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbi8vICAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbi8vICAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZUVsZW1lbnQpO1xuLy8gICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChwcmlvcml0eUVsZW1uZW50KTtcblxuLy8gICAgIGRlZmF1bHRMaXN0LmFwcGVuZENoaWxkKG5ld1Jvdyk7XG5cbi8vIH07XG5cbmNvbnN0IGxvYWRQcm9qZWN0cyA9ICgpID0+IHtcblxufTtcblxuY29uc3QgbG9hZFByb2plY3RDb250ZW50ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRlbnRcIik7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcbiAgICBjb25zdCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcbiAgICBcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQge2xvYWRQcm9qZWN0cywgbG9hZFByb2plY3RDb250ZW50fTtcblxuXG4iLCJcbmNvbnN0IHByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH07XG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICE9PSB0YXNrO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBnZXRUYXNrcyxcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgcmVtb3ZlVGFza1xuICAgIH1cbn07XG5cbmV4cG9ydCB7cHJvamVjdH07IiwiY29uc3QgdGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5PVwibWVkaXVtXCIsIHByb2plY3Q9XCJkZWZhdWx0XCIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSwgXG4gICAgICAgIGRlc2NyaXB0aW9uLCBcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIHByb2plY3RcbiAgICB9O1xufTtcblxuXG5cbmV4cG9ydCB7dGFza307XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt0YXNrfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQge2xvYWRQcm9qZWN0cywgbG9hZFByb2plY3RDb250ZW50fSBmcm9tIFwiLi9VSVwiO1xuaW1wb3J0IHtwcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdChcImRlZmF1bHRcIik7XG5jb25zdCB0ZXN0VGFzazEgPSB0YXNrKFwiYnJ1c2hcIiwgXCJnb3R0YSBicnVzaCBteSB0ZWV0aFwiLCBcIjEvMTEvMjJcIik7XG5jb25zdCB0ZXN0VGFzazIgPSB0YXNrKFwiY2hhbmdlXCIsIFwiZ290dGEgY2hhbmdlIG15IGNsb3RoZXNcIiwgXCIxLzExLzIyXCIsIFwiaGlnaFwiKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sodGVzdFRhc2sxKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sodGVzdFRhc2syKTtcblxuLy9sb2FkUHJvamVjdENvbnRlbnQoZGVmYXVsdFByb2plY3QpO1xuXG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5nZXRUYXNrcygpKTtcblxuZGVmYXVsdFByb2plY3QucmVtb3ZlVGFzayh0ZXN0VGFzazIpO1xuXG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5nZXRUYXNrcygpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==