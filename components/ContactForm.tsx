import { useRecoilState } from "recoil";
import { useForm, SubmitHandler } from "react-hook-form";
import { isShowContactPopupState } from "@/state/isShowContactPopupState";

interface IFormInputs {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

function ContactForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInputs>();
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
                        <input
                            type="submit"
                            value="Send Request"
                            className="bg-[#4B91F1] text-white px-4 py-2 mt-2 text-sm lg:text-base rounded-md hover:bg-[#1EBBD7] hover:scale-105 transition-all duration-500"
                        />
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
