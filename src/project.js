// Create project objects in this module

// Return an object that represents a project
function project(_title, _description) {
    const title = _title;
    const description = _description;

    // Get date of when the object was created
    const dateCreated = formatDate(new Date());

    // Format the date
    function formatDate(currentDate) {
        const day = String(currentDate.getDate());
        const month = String(currentDate.getMonth());
        const year = currentDate.getFullYear();

        return month + "/" + day + "/" + year;
    }

    const getTitle = () => title;
    const getDescription = () => description;
    const getDateCreated = () => dateCreated;

    return { getTitle, getDescription, getDateCreated }
}

export default project;