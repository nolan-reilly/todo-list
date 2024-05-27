// Loads all the project objects to the page

function loadProjects(projects) {
    const content = document.getElementById("content");

    // Create a projects container
    const projectsContainer = document.createElement("div");
    projectsContainer.classList.add("projects");

    // Load each project onto the page as a card
    for (let i = 0; i < projects.length; i++) {
        // Create the project card div
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        // Create the title row
        const titleRow = document.createElement("div");
        titleRow.classList.add("title-row");

        // Add title row elements
        const projectTitle = document.createElement("h2");
        projectTitle.classList.add("bold");
        projectTitle.textContent = projects[i].getTitle();

        titleRow.appendChild(projectTitle);

        const projectRemoveButton = document.createElement("button");
        projectRemoveButton.classList.add("project-remove-btn");
        projectRemoveButton.innerHTML = "&#10006";

        titleRow.appendChild(projectRemoveButton);

        projectCard.appendChild(titleRow);

        // Add project description
        const projectDescription = document.createElement("p");
        projectDescription.textContent = projects[i].getDescription();

        projectCard.appendChild(projectDescription);

        // Add project creation date
        const projectCreationDate = document.createElement("p");
        projectCreationDate.classList.add("project-date");
        projectCreationDate.textContent = "Created: " + projects[i].getDateCreated();

        projectCard.appendChild(projectCreationDate);

        // Add load button
        const loadButton = document.createElement("button");
        loadButton.classList.add("project-load-btn");
        loadButton.textContent = "Load Project";

        projectCard.appendChild(loadButton);

        projectsContainer.appendChild(projectCard);
    }

    content.appendChild(projectsContainer);
}

export default loadProjects;