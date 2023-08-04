import Image from "next/image";
import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface ImageViewerProps {
    images: string[];
    activeImageIndex: number | null;
    setActiveImageIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
    images,
    activeImageIndex,
    setActiveImageIndex,
}) => {
    const showNextImage = () => {
        setActiveImageIndex(prevIndex =>
            prevIndex !== null ? (prevIndex + 1) % images.length : null
        );
    };

    const showPreviousImage = () => {
        setActiveImageIndex(prevIndex =>
            prevIndex !== null
                ? (prevIndex - 1 + images.length) % images.length
                : null
        );
    };

    if (activeImageIndex === null) {
        return null;
    }

    return (
        <div
            // onClick={() => {
            //     setActiveImageIndex(null);
            //     document.body.style.overflow = "auto";
            // }}
            className="fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-md flex items-center justify-center"
        >
            <div className="relative h-screen w-screen pt-14 pb-28">
                <div className="relative h-full w-full">
                    <Image
                        src={images[activeImageIndex]}
                        alt="Project Screenshot"
                        fill
                        className="w-full h-full object-contain aspect-auto"
                        draggable={false}
                        quality={100}
                        priority
                        placeholder="empty"
                    />
                </div>

                <div className="flex justify-center space-x-20 sm:space-x-32 fixed bottom-5 w-full left-0 right-0">
                    <div
                        onClick={showPreviousImage}
                        className="relative group inline-block"
                    >
                        <button className="bg-[#4B91F1] text-white p-2 sm:p-3 rounded-full hover:bg-[#1EBBD7] hover:scale-105 transition-all duration-500">
                            <HiChevronLeft className="w-5 h-5" />
                        </button>
                    </div>
                    <button
                        className="text-xs lg:text-base bg-gray-300 text-black py-2 px-8 rounded-full hover:bg-red-400 hover:scale-105 transition-all duration-500"
                        onClick={() => {
                            setActiveImageIndex(null);
                            document.body.style.overflow = "auto";
                        }}
                    >
                        Close
                    </button>
                    <div
                        onClick={showNextImage}
                        className="relative group inline-block"
                    >
                        <button className="bg-[#4B91F1] text-white p-2 sm:p-3 rounded-full hover:bg-[#1EBBD7] hover:scale-105 transition-all duration-500">
                            <HiChevronRight className="w-5 h-5 animate-none" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageViewer;
