// Create a module or object to represent a todo for a project

function todo(_title, _description, _dueDate, _priority) {
    let title = _title;
    let description = _description;
    let dueDate = _dueDate;
    let priority = _priority;

    changeTitle = (newTitle) => title = newTitle;
    changeDescription = (newDescription) => description = newDescription;
    changeDueDate = (newDueDate) => dueDate = newDueDate;
    changePriority = (newPriority) => priority = newPriority;

    getTitle = () => title;
    getDescription = () => description;
    getDueDate = () => dueDate;
    getPriority = () => priority;

    return { changeTitle, changeDescription, changeDueDate, changePriority,
             getTitle, getDescription, getDueDate, getPriority }
}

export default todo;