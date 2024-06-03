/*
    Project Overview:
        - Start by building a form to create projects
            - The form should only contain a title input and an add button
        - Display all the projects that are in an array called projectsList

        - Each project should have an key containing an array of todo's
        - Whenever the user clicks on a project, the page should be reset and
        display only that projects todo's as well as containing a form to add
        new todo elements

        - We should be able to edit each todo's elements

        - If we've gotten here we should worry about deleting elements
*/
import project from "./project.js"
import todo from "./todo.js"

const content = document.getElementById("content");

const projects = [
    { 
        title: "Project title",
        todoList: [
            {title: "yes"},
            {title: "no"}
        ]
    },
    { 
        title: "Other Project",
        todoList: [
            {title: "not"},
            {title: "me"}
        ]
    }
]

function createProjectForm() {
    const form = document.createElement("form");

    form.innerHTML = `
        <h1>Add Project</h1>
        <label for="title">Title</label>
        <input id="title" type="text">
        <button type="submit">Add Project</button>
    `
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // God tier line of code right here

        const titleValue = document.getElementById("title").value;

        projects.push(project(titleValue));

        displayProjects();
    })

    content.appendChild(form);
}

function displayProjects() {
    content.innerHTML = ""; // Clear the content div

    createProjectForm();

    // Display all projects in the projects array
    for (let i = 0; i < projects.length; i++) {
        const projectCard = document.createElement("div");

        projectCard.innerHTML = `
            <h2 id="projectLink${i}" data-value="${i}">${projects[i].title}</h2>
            <button id="removeBtn${i} data-value="${i}">Remove Project</button>
        `

        content.appendChild(projectCard);

        // Add functionality to open up the projects todo list
        const projectLink = document.getElementById(`projectLink${i}`); // When getting element by it only grabs the first element found
        projectLink.addEventListener("click", (e) => {
            // When making custom values use data-value and dataset.value to
            // get the values that you want
            displayTodoList(e.target.dataset.value);
        })

        // ---- Need to get the remove button to work ----
        // const removeBtn = document.getElementById(`removeBtn${i}`);
        // removeBtn.addEventListener("click", (e) => {
        //     projects.splice(e.target.dataset.value, 1);
        //     displayProjects();
        // })
    }
}

// ------- Left of here --------
// Created projects links that clear the page and show the contents of just todo list title
// We currently should be working on the function below here displayTodoList to now show
// an actual todo list object, and be able to delete the todo list elements

function displayTodoList(index) {
    content.innerHTML = ""; // Clear the content div

    // Need to create a back button to go back to the projects page
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back to Projects"
    backBtn.addEventListener("click", (e) => {
        e.preventDefault();

        displayProjects();
    })

    content.appendChild(backBtn);

    createTodoForm(index);

    for (let i = 0; i < projects[index].todoList.length; i++) {
        const todo = document.createElement("p");
    
        todo.textContent = projects[index].todoList[i].title;
    
        content.appendChild(todo);
    }
}

// Create to the todo list form to create new todo's into the projects todo list
function createTodoForm(projectIndex) {
    const form = document.createElement("form");

    form.innerHTML = `
        <h1>Add Todo</h1>
        <label for="title">Title</label>
        <input id="title" type="text">

        <label for="description">Description</label>
        <input id="description" type="text">

        <label for="dueDate">Due Date</label>
        <input id="dueDate" type="text">

        <label for="priority">Priority</label>
        <input id="priority" type="text">

        <button type="submit">Add Project</button>
    `;

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // God tier line of code right here
        
        const titleValue = document.getElementById("title").value;
        const descriptionValue = document.getElementById("description").value;
        const dueDateValue = document.getElementById("dueDate").value;
        const priorityValue = document.getElementById("priority").value;
        
        projects[projectIndex].todoList.push(todo(titleValue, descriptionValue, dueDateValue, priorityValue));
        
        displayTodoList(projectIndex);
    })
    
    content.appendChild(form);
}

displayProjects();