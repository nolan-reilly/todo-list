function todo(_title, _description, _dueDate, _priority) {
    const title = _title;
    const description = _description;
    const dueDate = _dueDate;
    const priority = _priority;

    return { title, description, dueDate, priority };
}

export default todo;