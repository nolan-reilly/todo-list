/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/*\n    Project Overview:\n        - Start by building a form to create projects\n            - The form should only contain a title input and an add button\n        - Display all the projects that are in an array called projectsList\n\n        - Each project should have an key containing an array of todo's\n        - Whenever the user clicks on a project, the page should be reset and\n        display only that projects todo's as well as containing a form to add\n        new todo elements\n\n        - If we've gotten here we should worry about deleting elements\n*/\nconst content = document.getElementById(\"content\");\n\nconst projects = [\n    { \n        title: \"Project title\",\n        todoList: [\n            {title: \"yes\"},\n            {title: \"no\"}\n        ]\n    },\n    { \n        title: \"Other Project\",\n        todoList: [\n            {title: \"not\"},\n            {title: \"me\"}\n        ]\n    }\n]\n\n// Function to create an object to represent a project to be pushed into the\n// projects array\nfunction project(_title) {\n    const title = _title;\n    const todoList = []\n\n    return { title, todoList }\n}\n\nfunction createProjectForm() {\n    const form = document.createElement(\"form\");\n\n    form.innerHTML = `\n        <h1>Add Project</h1>\n        <label for=\"title\">Title</label>\n        <input id=\"title\" type=\"text\">\n        <button type=\"submit\">Add Project</button>\n    `\n    form.addEventListener(\"submit\", (e) => {\n        e.preventDefault(); // God tier line of code right here\n\n        const titleValue = document.getElementById(\"title\").value;\n\n        projects.push(project(titleValue));\n\n        displayProjects();\n    })\n\n    content.appendChild(form);\n}\n\nfunction displayProjects() {\n    content.innerHTML = \"\"; // Clear the content div\n\n    createProjectForm();\n\n    // Display all projects in the projects array\n    for (let i = 0; i < projects.length; i++) {\n        const projectCard = document.createElement(\"div\");\n\n        projectCard.innerHTML = `\n            <h2 id=\"projectLink${i}\" data-value=\"${i}\">${projects[i].title}</h2>\n        `\n\n        content.appendChild(projectCard);\n\n        // Add functionality to open up the projects todo list\n        const projectLink = document.getElementById(`projectLink${i}`); // When getting element by it only grabs the first element found\n        projectLink.addEventListener(\"click\", (e) => {\n            // When making custom values use data-value and dataset.value to\n            // get the values that you want\n            displayTodoList(e.target.dataset.value);\n        })\n    }\n}\n\n// ------- Left of here --------\n// Created projects links that clear the page and show the contents of just todo list title\n// We currently should be working on the function below here displayTodoList to now show\n// an actual todo list object, and be able to delete the todo list elements\n\nfunction displayTodoList(index) {\n    content.innerHTML = \"\"; // Clear the content div\n\n    for (let i = 0; i < projects[index].todoList.length; i++) {\n        const todo = document.createElement(\"p\");\n    \n        todo.textContent = projects[index].todoList[i].title;\n    \n        content.appendChild(todo);\n    }\n}\n\ndisplayProjects();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;