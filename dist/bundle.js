/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/*\n    Project Overview:\n        - Start by building a form to create projects\n            - The form should only contain a title input and an add button\n        - Display all the projects that are in an array called projectsList\n\n        - Each project should have an key containing an array of todo's\n        - Whenever the user clicks on a project, the page should be reset and\n        display only that projects todo's as well as containing a form to add\n        new todo elements\n\n        - We should be able to edit each todo's elements\n\n        - If we've gotten here we should worry about deleting elements\n*/\n\n\n\nconst content = document.getElementById(\"content\");\n\nconst projects = [\n    { \n        title: \"Project title\",\n        todoList: [\n            {\n                title: \"yes\",\n                description : \"The best description\",\n                dueDate: \"12/20/22\",\n            },\n            {\n                title: \"no\",\n                description : \"Not the best description\",\n                dueDate: \"9/11/23\",\n            }\n        ]\n    },\n    { \n        title: \"Other Project\",\n        todoList: [\n            {\n                title: \"not\",\n                description : \"The best description\",\n                dueDate: \"12/20/22\",\n            },\n            {\n                title: \"me\",\n                description : \"Not the best description\",\n                dueDate: \"9/11/23\",\n            }\n        ]\n    }\n]\n\nfunction createProjectForm() {\n    const form = document.createElement(\"form\");\n\n    form.innerHTML = `\n        <h1>Add Project</h1>\n        <label for=\"title\">Title</label>\n        <input id=\"title\" type=\"text\">\n        <button type=\"submit\">Add Project</button>\n    `\n    form.addEventListener(\"submit\", (e) => {\n        e.preventDefault(); // God tier line of code right here\n\n        const titleValue = document.getElementById(\"title\").value;\n\n        projects.push((0,_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(titleValue));\n\n        displayProjects();\n    })\n\n    content.appendChild(form);\n}\n\nfunction displayProjects() {\n    content.innerHTML = \"\"; // Clear the content div\n\n    createProjectForm();\n\n    // Display all projects in the projects array\n    for (let i = 0; i < projects.length; i++) {\n        const projectCard = document.createElement(\"div\");\n\n        projectCard.innerHTML = `\n            <h2 id=\"projectLink${i}\" data-value=\"${i}\">${projects[i].title}</h2>\n            <button id=\"removeBtn${i}\" data-value=\"${i}\">Remove Project</button>\n        `\n\n        content.appendChild(projectCard);\n\n        // Add functionality to open up the projects todo list\n        const projectLink = document.getElementById(`projectLink${i}`); // When getting element by it only grabs the first element found\n        projectLink.addEventListener(\"click\", (e) => {\n            // When making custom values use data-value and dataset.value to\n            // get the values that you want\n            displayTodoList(e.target.dataset.value);\n        })\n\n        // ---- Need to get the remove button to work ----\n        const removeBtn = document.getElementById(`removeBtn${i}`);\n        removeBtn.addEventListener(\"click\", (e) => {\n            projects.splice(e.target.dataset.value, 1);\n            displayProjects();\n        })\n    }\n}\n\n// ------- Left of here --------\n// Created projects links that clear the page and show the contents of just todo list title\n// We currently should be working on the function below here displayTodoList to now show\n// an actual todo list object, and be able to delete the todo list elements\n\nfunction displayTodoList(index) {\n    content.innerHTML = \"\"; // Clear the content div\n\n    // Need to create a back button to go back to the projects page\n    const backBtn = document.createElement(\"button\");\n    backBtn.textContent = \"Back to Projects\"\n    backBtn.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n\n        displayProjects();\n    })\n\n    content.appendChild(backBtn);\n\n    createTodoForm(index);\n\n    for (let i = 0; i < projects[index].todoList.length; i++) {\n        const todo = document.createElement(\"div\");\n\n        todo.innerHTML = `\n            <h2>${projects[index].todoList[i].title}</h2>\n            <button id=\"removeBtn${i}\" data-value=\"${i}\">Remove Todo</button>\n            <p>Description: ${projects[index].todoList[i].description}</p>\n            <p>Due: ${projects[index].todoList[i].dueDate}</p>\n        `\n    \n        content.appendChild(todo);\n\n        const removeBtn = document.getElementById(`removeBtn${i}`);\n        removeBtn.addEventListener(\"click\", (e) => {\n            projects[index].todoList.splice(e.target.dataset.value, 1);\n            displayTodoList(index);\n        })\n    }\n}\n\n// Create to the todo list form to create new todo's into the projects todo list\nfunction createTodoForm(projectIndex) {\n    const form = document.createElement(\"form\");\n\n    form.innerHTML = `\n        <h1>Add Todo</h1>\n        <label for=\"title\">Title</label>\n        <input id=\"title\" type=\"text\">\n\n        <label for=\"description\">Description</label>\n        <input id=\"description\" type=\"text\">\n\n        <label for=\"dueDate\">Due Date</label>\n        <input id=\"dueDate\" type=\"text\">\n\n        <button type=\"submit\">Add Project</button>\n    `;\n\n    form.addEventListener(\"submit\", (e) => {\n        e.preventDefault(); // God tier line of code right here\n        \n        const titleValue = document.getElementById(\"title\").value;\n        const descriptionValue = document.getElementById(\"description\").value;\n        const dueDateValue = document.getElementById(\"dueDate\").value;\n        \n        projects[projectIndex].todoList.push((0,_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(titleValue, descriptionValue, dueDateValue));\n        \n        displayTodoList(projectIndex);\n    })\n    \n    content.appendChild(form);\n}\n\ndisplayProjects();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Function to create an object to represent a project to be pushed into the\n// projects array\nfunction project(_title) {\n    const title = _title;\n    const todoList = []\n\n    return { title, todoList }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction todo(_title, _description, _dueDate) {\n    const title = _title;\n    const description = _description;\n    const dueDate = _dueDate;\n\n    return { title, description, dueDate};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;