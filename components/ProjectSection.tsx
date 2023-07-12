import ProjectCard from "./ProjectCard";
import projectData from "../data/projects.js";

function ProjectSection() {
    return (
        <div className="mx-auto max-w-5xl mt-20 px-4 lg:px-0">
            <div className="flex items-center space-x-10 mb-8 sm:mb-12 lg:mb-16">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                    My Projects
                </h1>
                <p className="text-xs sm:text-sm ml-2 text-gray-600">
                    What I&apos;ve been working on
                </p>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 mb-14 sm:mb-16 lg:mb-20">
                {projectData.map(project => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        title={project.title}
                        summary={project.summary}
                        image={project.image}
                        projectLink={project.projectLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectSection;
