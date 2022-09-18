import Project from './project';
import './css/projects.css';

function Projects() {
    return (
        <div className="projects-menu">
            <div className="projects-menu-container">
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}

export default Projects;