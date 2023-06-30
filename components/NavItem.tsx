import { useState } from "react";
import { useRouter } from "next/router";
import { useResetRecoilState, useRecoilState } from "recoil";
import { isOpenMenuState } from "@/state/isOpenMenuState";
import { currentMenuState } from "@/state/currentMenuState";

interface NavItemProps {
    name: string;
    target: string;
}

function NavItem({ name, target }: NavItemProps) {
    const [hovered, setHovered] = useState(false);
    const resetIsOpenMenu = useResetRecoilState(isOpenMenuState);
    const [currentMenu, setCurrentMenu] = useRecoilState(currentMenuState);
    const router = useRouter();

    const handleHover = () => {
        setHovered(!hovered);
    };

    return (
        <div
            className="group flex flex-col justify-center text-sm sm:text-base"
            onClick={() => {
                setCurrentMenu(name);
                if (name !== "Let's Talk") resetIsOpenMenu();
                router.push(target);
            }}
        >
            <div
                className="group overflow-hidden cursor-pointer h-8"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                <a className={`${currentMenu === name ? "font-bold" : ""}`}>
                    <div className="translate-y-16 transform transition-transform duration-500 group-hover:translate-y-1">
                        {name}
                    </div>
                    <div className="-translate-y-5 transform transition-transform duration-500 group-hover:-translate-y-16 group-hover:underline">
                        {name}
                    </div>
                </a>
            </div>
            <div className="h-[1px] w-0 group-hover:w-full bg-gray-700 transition-width duration-500" />
        </div>
    );
}

export default NavItem;
