import MainLayout from "@/components/MainLayout";
import projectData from "@/data/projects";
import Image from "next/image";

type ProjectDetailProps = {
    title: string;
    summary: string;
    description: string[];
    image: string;
    projectLink?: string;
    technologies: string[];
    screenshots: string[];
};

function ProjectDetail({
    title,
    summary,
    description,
    image,
    projectLink,
    technologies,
    screenshots,
}: ProjectDetailProps) {
    return (
        <MainLayout>
            <div className="bg-slate-100 pt-10 pb-10 sm:pb-16">
                <div className="mx-auto max-w-5xl px-4 lg:px-0">
                    <div className="flex flex-col space-y-6">
                        {/* Project Title */}
                        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                            {title}
                        </h1>
                        {/* Project Descrition */}
                        {description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-xs sm:text-sm text-gray-600 sm:ml-4 lg:ml-6"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Project Image */}
                    <div className="flex flex-col items-center justify-center py-8">
                        <Image
                            src={image}
                            alt="Project Banner"
                            width={400}
                            height={400}
                            className="transform transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Project Technologies */}
                    <div className="flex flex-col space-y-6">
                        <h1 className="text-xl font-bold text-slate-900">
                            Technologies
                        </h1>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex flex-wrap items-center justify-center sm:space-x-4">
                                {technologies.map(technology => (
                                    <span
                                        key={technology}
                                        className="text-xs sm:text-sm bg-gray-200 px-4 py-2 rounded-full mr-2 mb-2 cursor-default transform transition-transform duration-500 hover:scale-105 sm:hover:scale-110 hover:bg-gray-300"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project Screenshots */}
                    <h1 className="text-xl font-bold text-slate-900 mt-10">
                        Project Screenshots
                    </h1>
                    <div className="flex flex-col items-center justify-center">
                        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {screenshots.map(screenshot => (
                                <Image
                                    key={screenshot}
                                    src={screenshot}
                                    alt="Project Screenshot"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default ProjectDetail;

// Get Static Paths
export async function getStaticPaths() {
    return {
        paths: [
            { params: { name: "jolmer" } },
            { params: { name: "napt" } },
            { params: { name: "odoo" } },
            { params: { name: "attendance-system" } },
        ],
        fallback: false,
    };
}

// Get Static Props
export async function getStaticProps(context: any) {
    const { name } = context.params;
    const project = projectData.find(project => project.name === name);

    return {
        props: project,
    };
}
