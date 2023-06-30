import { HiChevronRight } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { useSetRecoilState } from "recoil";
import { isShowContactPopupState } from "@/state/isShowContactPopupState";

function Footer() {
    const setIsShowContactPopup = useSetRecoilState(isShowContactPopupState);

    return (
        <div className="bg-slate-200 pt-10 sm:pt-16 pb-5 text-center rounded-tl-[30px] sm:rounded-tl-[50px] lg:rounded-tl-[70px]">
            <div className="mx-auto max-w-5xl flex flex-col items-center justify-center">
                {/* Quote */}
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                    Interested in working with me?
                </h1>
                {/* Let's Talk button */}
                <div
                    onClick={() => {
                        document.body.style.overflow = "hidden";
                        setIsShowContactPopup(true);
                    }}
                    className="flex justify-start items-center space-x-2 pt-8"
                >
                    <div className="relative group inline-block">
                        {/* <div className="absolute inset-0 border-[1px] border-gray-400 rounded-md transform translate-x-1 translate-y-1  group-hover:scale-105 transition-transform duration-500"></div> */}
                        <button className="text-xs relative flex justify-center items-center space-x-7 lg:text-sm bg-[#4B91F1] text-white font-semibold pl-8 pr-3 py-2 lg:pl-10 lg:pr-5 lg:py-3 rounded-full hover:bg-[#1EBBD7] hover:scale-105 transition-all duration-500">
                            <span>Let&apos;s Talk</span>
                            <HiChevronRight className="w-5 h-5 animate-bounce-x" />
                        </button>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex justify-between items-center space-x-8 mt-10 lg:space-x-10 lg:mt-16">
                    <VscGithub
                        onClick={() =>
                            window.open("https://github.com/SambathSoth")
                        }
                        className="w-5 h-5 text-gray-60 hover:text-gray-900 transition-all duration-500 cursor-pointer hover:scale-125 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                    />
                    <CiLinkedin
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/sambath-soth-10a2a71ba/"
                            )
                        }
                        className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-all duration-500 cursor-pointer hover:scale-125 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                    />
                    <CiFacebook
                        onClick={() =>
                            window.open(
                                "https://www.facebook.com/sambath.successful/"
                            )
                        }
                        className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-all duration-500 cursor-pointer hover:scale-125 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                    />
                </div>

                {/* Copy Right */}
                <div className="pt-10 lg:pt-16 text-gray-600 text-xs text-center sm:text-sm">
                    <p>© 2023 Sambath Soth. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
