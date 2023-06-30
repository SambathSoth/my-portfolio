import { useRecoilState } from "recoil";
import { isOpenMenuState } from "../state/isOpenMenuState";

const MenuButton = () => {
    const [isOpenMenu, setIsOpenMenu] = useRecoilState(isOpenMenuState);

    const handleClick = () => {
        if (isOpenMenu) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <button
            className={`menu-button ${isOpenMenu ? "open" : ""}`}
            onClick={handleClick}
        >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
        </button>
    );
};

export default MenuButton;
