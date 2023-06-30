import { useRecoilState } from "recoil";
import { isShowContactPopupState } from "@/state/isShowContactPopupState";

function ContactForm() {
    const [isShowContactPopup, setIsShowContactPopup] = useRecoilState(
        isShowContactPopupState
    );

    return (
        <div
            onClick={() => {
                document.body.style.overflow = "auto";
                setIsShowContactPopup(false);
            }}
            className={`sm:flex sm:items-center sm:justify-center z-50 over ${
                isShowContactPopup
                    ? "fixed inset-0 bg-black bg-opacity-50 backdrop-filter"
                    : "h-0 overflow-hidden"
            }
            `}
        >
            <div
                onClick={e => e.stopPropagation()}
                className={`relative flex flex-col h-screen px-6 justify-center bg-white sm:h-auto sm:rounded-lg sm:p-8 sm:mx-auto sm:max-w-sm md:max-w-md sm:w-full transform transition-all duration-700 ${
                    isShowContactPopup
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-full opacity-0"
                } `}
            >
                {/* Title */}
                <h1 className="text-3xl font-bold text-slate-900 mb-2 pt-5 sm:mt-">
                    Let's Talk!
                </h1>
                {/* Description */}
                <p className="text-sm text-gray-600 mb-10">
                    I'm always open to discuss your project, or just to chat.
                    Feel free to drop me a message!
                </p>

                {/* Form */}
                <form className="flex flex-col space-y-5">
                    {/* Name */}
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="name" className="text-sm text-gray-600">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border-[1px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B91F1] focus:border-transparent"
                        />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col space-y-1">
                        <label
                            htmlFor="email"
                            className="text-sm text-gray-600"
                        >
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border-[1px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B91F1] focus:border-transparent"
                        />
                    </div>
                    {/* Subject */}
                    <div className="flex flex-col space-y-1">
                        <label
                            htmlFor="subject"
                            className="text-sm text-gray-600"
                        >
                            Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="border-[1px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B91F1] focus:border-transparent"
                        />
                    </div>
                    {/* Message */}
                    <div className="flex flex-col space-y-1">
                        <label
                            htmlFor="message"
                            className="text-sm text-gray-600"
                        >
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="border-[1px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B91F1] focus:border-transparent"
                        />
                    </div>
                </form>

                {/* Send Request button */}
                <div>
                    <button className="bg-[#4B91F1] text-white px-4 py-2 mt-8 text-sm lg:text-base rounded-md hover:bg-[#1EBBD7] hover:scale-105 transition-all duration-500">
                        Send Request
                    </button>
                </div>

                {/* Close button */}
                <div
                    onClick={() => {
                        document.body.style.overflow = "auto";
                        setIsShowContactPopup(false);
                    }}
                    className="absolute top-6 right-4"
                >
                    <button className="menu-button open">
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
