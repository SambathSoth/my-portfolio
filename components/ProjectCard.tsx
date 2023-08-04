import { HiChevronRight } from "react-icons/hi";

import Image from "next/image";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { currentMenuState } from "@/state/currentMenuState";
import GithubLogo from "@/public/images/icons8-github-64.png";

interface ProjectCardProps {
    id: number;
    title: string;
    name: string;
    image: string;
    summary: string;
    projectLink?: string;
    liveDemoLink?: string;
    githubLink?: string;
    isMobileScreenshot?: boolean;
}

function ProjectCard({
    id,
    title,
    name,
    summary,
    image,
    projectLink,
    liveDemoLink,
    githubLink,
    isMobileScreenshot,
}: ProjectCardProps) {
    const setCurrentMenu = useSetRecoilState(currentMenuState);
    const router = useRouter();

    return (
        <div
            className={`lg:w-full lg:h-96 bg-white flex flex-col items-center justify-center rounded-2xl shadow-md ${
                id % 2 === 0
                    ? "sm:flex-row rounded-l-2xl"
                    : "sm:flex-row-reverse rounded-t-2xl sm:rounded-r-2xl"
            }`}
        >
            {/* First Side - Project Image */}
            <div
                className={`w-full h-1/2 sm:w-1/2 sm:h-full py-16 bg-slate-200 flex justify-center items-center rounded-t-2xl ${
                    id % 2 === 0
                        ? "sm:rounded-l-2xl sm:rounded-tr-none"
                        : "sm:rounded-r-2xl sm:rounded-tl-none"
                }`}
            >
                <Image
                    src={image}
                    width={350}
                    height={350}
                    alt="Project Banner"
                    className="transform transition-transform duration-500 hover:scale-105 w-64 lg:w-96"
                />
            </div>
            {/* Second Side - Short Description and View Project Button */}
            <div
                className={`w-full h-1/2 sm:w-1/2 sm:h-full flex flex-col justify-center items-center sm:items-start px-5 sm:pl-8 sm:pr-10 lg:pl-12`}
            >
                {/* Project Title */}
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 text-center sm:text-start">
                    {title}
                </h1>
                {/*  Project Summary */}
                <p className="text-xs lg:text-sm ml-2 text-gray-600 text-center sm:text-justify">
                    {summary}
                </p>
                <div className="flex justify-center items-center pt-10 space-x-6">
                    {/* View Project Button */}
                    <div
                        onClick={() => {
                            setCurrentMenu("");
                            if (projectLink) {
                                window.open(projectLink, "_blank");
                            } else {
                                router.push(`/project/${name}`);
                            }
                        }}
                        className="flex justify-start items-center space-x-2"
                    >
                        <div className="relative group inline-block">
                            <div className="absolute inset-0 border-[1px] border-gray-400 rounded-md transform translate-x-1 translate-y-1  group-hover:scale-105 transition-transform duration-500"></div>
                            <button className="relative flex justify-center items-center space-x-7 bg-gradient-to-r from-[#1EBBD7] to-[#4B91F1] text-white pl-4 pr-1 py-[6px] rounded-md hover:scale-105 transition-transform duration-500 sm:py-2">
                                <span className="text-xs sm:text-sm">
                                    View Project
                                </span>
                                <HiChevronRight className="w-5 h-5 animate-bounce-x" />
                            </button>
                        </div>
                    </div>

                    {/* Github Button */}
                    {githubLink && (
                        <Image
                            onClick={() => {
                                window.open(githubLink, "_blank");
                            }}
                            src={GithubLogo}
                            width={40}
                            height={40}
                            alt="Github Logo"
                            className="transform transition-transform duration-500 hover:scale-110 hover:opacity-80 cursor-pointer"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
