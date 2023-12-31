import Image from "next/image";
import DevSitting from "../public/images/dev-sitting.png";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import PrimaryButton from "./PrimaryButton";
import { useSetRecoilState } from "recoil";
import { isShowContactPopupState } from "../state/isShowContactPopupState";
import { useEffect } from "react";

function HomeSection() {
    const setIsShowContactPopup = useSetRecoilState(isShowContactPopupState);

    useEffect(() => {
        // fetch data from API: http://localhost:8080/api/v1/events/user?username=yean.sovanvathana19@kit.edu.kh
        fetch("https://api.jolmer.me/api/v1/events/user?username=vathana.sovan")
            .then(res => res.json())
            .then(data => console.log(data));
    });

    return (
        <div className="relative bg-slate-100 pb-10 pt-6 shadow-sm px-4 lg:px-4 sm:pb-14 rounded-br-[30px] sm:rounded-br-[50px] lg:pb-20 lg:rounded-br-[70px]">
            <div className="flex flex-col mx-auto max-w-5xl justify-between items-center sm:flex-row">
                {/* Left Side: Self Information */}
                <div className="flex flex-col items-center justify-center space-y-2 sm:items-start">
                    <h1 className="text-xl font-bold text-slate-900 text-center sm:text-start sm:text-2xl lg:text-4xl">
                        Hi, I&apos;m Sambath Soth,
                    </h1>
                    <h1 className="text-xl font-bold text-slate-900 text-center sm:text-start sm:text-2xl lg:text-4xl">
                        I&apos;m a full-stack developer.
                    </h1>
                    <p className="text-xs pt-5 text-gray-600 text-center sm:pt-8 sm:text-start sm:text-sm">
                        I&apos;m a full-stack developer based in Phnom Penh,
                        Cambodia. I have a passion for web development and love
                        to create for web and mobile devices.
                    </p>

                    {/* Let's Talk Button */}
                    <div
                        onClick={() => {
                            document.body.style.overflow = "hidden";
                            setIsShowContactPopup(true);
                        }}
                        className="absolute bottom-24 sm:relative sm:bottom-0"
                    >
                        <PrimaryButton text="Let's Talk" />
                    </div>
                </div>

                {/* Right Side: Self Image */}
                <div>
                    <Image
                        src={DevSitting}
                        width={800}
                        height={800}
                        alt="Sambath Soth"
                        className="transform transition-transform duration-500 hover:scale-105 w-[380px] sm:w-[800px]"
                    />
                </div>
            </div>

            <div className="flex justify-center items-center mt-16 sm:space-x-7 sm:mr-6 lg:mr-20 xl:mr-24 sm:justify-between">
                {/* a horizontal line */}
                <div className="h-[1px] w-full bg-slate-200 hidden sm:block" />
                <div className="flex justify-between items-center space-x-8 lg:px-6">
                    <VscGithub
                        onClick={() =>
                            window.open("https://github.com/SambathSoth")
                        }
                        className="w-5 h-5 text-gray-60 hover:text-gray-900 transition-all duration-500 cursor-pointer hover:scale-125 lg:w-6 lg:h-6"
                    />
                    <CiLinkedin
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/sambath-soth-10a2a71ba/"
                            )
                        }
                        className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-all duration-500 cursor-pointer hover:scale-125 lg:w-7 lg:h-7"
                    />
                    <CiFacebook
                        onClick={() =>
                            window.open(
                                "https://www.facebook.com/sambath.successful/"
                            )
                        }
                        className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-all duration-500 cursor-pointer hover:scale-125 lg:w-7 lg:h-7"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeSection;
