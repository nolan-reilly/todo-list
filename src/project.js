// Function to create an object to represent a project to be pushed into the
// projects array
function project(_title) {
    const title = _title;
    const todoList = []

    return { title, todoList }
}

export default project;