import { useState } from "react";
import { useRecoilState } from "recoil";
import { useForm, SubmitHandler } from "react-hook-form";
import { isShowContactPopupState } from "@/state/isShowContactPopupState";
import { sendContactForm } from "@/lib/api";
import toast from "react-hot-toast";

interface IFormInputs {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<IFormInputs>();
    const [isShowContactPopup, setIsShowContactPopup] = useRecoilState(
        isShowContactPopupState
    );

    const onSubmit: SubmitHandler<IFormInputs> = async data => {
        setIsSubmitting(true);
        try {
            await sendContactForm(data);
            toast.success("Your message has been sent successfully!");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong, please try again later!");
        } finally {
            setIsSubmitting(false);
            setIsShowContactPopup(false);
            // Clear react-hook-form
            reset();
            // Enable scroll
            https: document.body.style.overflow = "auto";
        }
    };

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
                }`}
            >
                {/* Title */}
                <h1 className="text-3xl font-bold text-slate-900 mb-2 pt-5 sm:mt-5">
                    Let&apos;s Talk!
                </h1>
                {/* Description */}
                <p className="text-sm text-gray-600 mb-10">
                    I&apos;m always open to discuss your project, or just to
                    chat. Feel free to drop me a message!
                </p>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-5"
                >
                    {/* Name */}
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="name" className="text-sm text-gray-600">
                            Name *
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            id="name"
                            name="name"
                            className={`border-[1px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B91F1] focus:border-transparent ${
                                errors.name &&
                                "border-red-500 focus:ring-1 focus:ring-red-500"
                            } `}
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm">
                                This field is required
                            </span>
                        )}
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
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                            })}
                            id="email"
                            name="email"
                            className={`border-[1px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B91F1] focus:border-transparent ${
                                errors.email &&
                                "border-red-500 focus:ring-1 focus:ring-red-500"
                            } `}
                        />
                        {errors.email?.type === "required" && (
                            <span className="text-red-500 text-sm">
                                This field is required
                            </span>
                        )}
                        {errors.email?.type === "pattern" && (
                            <span className="text-red-500 text-sm">
                                Please enter a valid email
                            </span>
                        )}
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
                            {...register("subject", { required: true })}
                            type="text"
                            id="subject"
                            name="subject"
                            className={`border-[1px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B91F1] focus:border-transparent ${
                                errors.subject &&
                                "border-red-500 focus:ring-1 focus:ring-red-500"
                            } `}
                        />
                        {errors.subject && (
                            <span className="text-red-500 text-sm">
                                This field is required
                            </span>
                        )}
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
                            {...register("message", { required: true })}
                            id="message"
                            name="message"
                            className={`border-[1px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B91F1] focus:border-transparent ${
                                errors.message &&
                                "border-red-500 focus:ring-1 focus:ring-red-500"
                            } `}
                        />
                        {errors.message && (
                            <span className="text-red-500 text-sm">
                                This field is required
                            </span>
                        )}
                    </div>

                    {/* Send Request button */}
                    <div>
                        {!isSubmitting ? (
                            <input
                                type="submit"
                                value="Send Request"
                                className="bg-[#4B91F1] text-white px-4 py-[10px] mt-2 text-sm lg:text-base rounded-md hover:bg-[#1EBBD7] hover:scale-105 transition-all duration-500"
                            />
                        ) : (
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 mt-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#4B91F1] hover:bg-[#1EBBD7] transition ease-in-out duration-150 cursor-not-allowed"
                            >
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Sending...
                            </button>
                        )}

                        {Object.keys(errors).length > 0 &&
                            !(errors.email?.type === "pattern") && (
                                <p className="text-red-500 text-sm pt-2">
                                    Please fill all required fields
                                </p>
                            )}

                        {Object.keys(errors).length > 0 &&
                            errors.email?.type === "pattern" && (
                                <p className="text-red-500 text-sm pt-2">
                                    Please fill all the fields correctly
                                </p>
                            )}
                    </div>
                </form>

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
