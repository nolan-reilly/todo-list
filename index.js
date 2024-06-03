const content = document.getElementById("content");

const todoList = []

const form = document.getElementById("form");

form.addEventListener("submit", (e)=> {
    // Important piece of code right here never forget what hero he is
    e.preventDefault();

    // Grab all the values from the form, store them in a object to be put in
    // the todo list
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    const todoObject = { title, description, dueDate, priority }
    todoList.push(todoObject);
    
    form.reset();

    displayTodoList();
})

function displayTodoList() {
    content.innerHTML = "" // Clear the projects before creating them again

    // Loop through the todo list adding all todo's to the page
    for (let i = 0; i < todoList.length; i++) {
        const todo = document.createElement("div");

        todo.innerHTML = `
            <div class="todoContainer">
                <h2>${todoList[i].title}</h2>
                <p>${todoList[i].description}</p>
                <p>${todoList[i].dueDate}</p>
                <p>${todoList[i].priority}</p>
            </div>
        `

        content.appendChild(todo);
    }
}