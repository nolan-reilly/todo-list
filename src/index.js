import "./styles/main.css"
import project from "./project.js";
import loadProjects from "./loadProjects.js";

// Store an array of project objects, for each project object let it store
// an array of todo objects

// Dummy Data
const projects = [];

const projectObject = project("Another title", "A project description...");
projects.push(projectObject);

const projectObject1 = project("Yet Another title", "This is a project description...");
projects.push(projectObject1);

loadProjects(projects);