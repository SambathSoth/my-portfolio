import { HiChevronRight } from "react-icons/hi";

interface PrimaryButtonProps {
    text: string;
}

function PrimaryButton({ text }: PrimaryButtonProps) {
    return (
        <div className="flex justify-start items-center space-x-2 pt-8 sm:pt-10">
            <div className="relative group inline-block">
                <div className="absolute inset-0 border-[1px] border-gray-400 rounded-md transform translate-x-1 translate-y-1  group-hover:scale-105 transition-transform duration-500"></div>
                <button className="relative flex justify-center items-center sm:space-x-7 bg-[#4B91F1] text-white font-semibold pr-1 rounded-md hover:bg-[#1EBBD7] hover:scale-105 transition-all duration-500 space-x-3 py-[6px] pl-5 text-[10px] sm:text-[12px] sm:pl-5 sm:py-[6px] lg:text-sm lg:pl-10 lg:py-2">
                    <span>{text}</span>
                    <HiChevronRight className="w-4 h-4 lg:w-5 lg:h-5 animate-bounce-x" />
                </button>
            </div>
        </div>
    );
}

export default PrimaryButton;
