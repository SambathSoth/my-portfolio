import logo from "../public/sambath-soth-logo.svg";
// import logo from "../public/sambath-soth-white-logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

import { FaArrowRight } from "react-icons/fa";
import NavItem from "./NavItem";
import MenuButton from "./MenuButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isOpenMenuState } from "../state/isOpenMenuState";
import { isShowContactPopupState } from "../state/isShowContactPopupState";

function Header() {
    const router = useRouter();
    const isOpenMenu = useRecoilValue(isOpenMenuState);
    const setIsShowContactPopup = useSetRecoilState(isShowContactPopupState);

    return (
        <div
            className={`relative pb-5 bg-slate-100 px-4 lg:px-4 ${
                isOpenMenu
                    ? "h-screen flex flex-col justify-center sm:h-auto"
                    : ""
            }`}
        >
            <div className="flex justify-between items-center pt-5 mx-auto max-w-5xl">
                <div className="flex justify-evenly items-center space-x-10 cursor-pointer">
                    {/* Logo */}
                    <Image
                        src={logo}
                        alt="Sambath Soth Logo"
                        width={100}
                        height={100}
                        className={`w-28 sm:w-36 ${isOpenMenu ? "hidden" : ""}`}
                        onClick={() => router.push("/")}
                    />

                    {/* Nav Items */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-8">
                        <NavItem name="Home" target="/" />
                        <NavItem name="Experience" target="/" />
                    </div>
                </div>

                {/* Let's Talk button */}
                <button
                    onClick={() => {
                        document.body.style.overflow = "hidden";
                        setIsShowContactPopup(true);
                    }}
                    className="hidden group sm:flex items-center transform transition-transform duration-500 hover:-translate-x-5 "
                >
                    <span className="mr-4 underline decoration-2 font-semibold transition duration-500 ease-in-out group-hover:no-underline ">
                        Let&apos;s Talk
                    </span>
                    <FaArrowRight className="transform rotate-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 animate-bounce-x" />
                </button>

                {/* Menu Button */}
                <div
                    className={`sm:hidden ${
                        isOpenMenu ? "absolute top-6 right-4" : ""
                    }`}
                >
                    <MenuButton />
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpenMenu && (
                <div className="flex flex-col items-center justify-center space-y-6">
                    <NavItem name="Home" target="/" />
                    <NavItem name="Experience" target="/" />
                    <div onClick={() => setIsShowContactPopup(true)}>
                        <NavItem name="Let's Talk" target="/" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
