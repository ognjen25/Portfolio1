import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Contact = () => {
    return (
        <section className="mt-20">
            <h1 className="text-left text-3xl font-quicksandbold mb-10 text-white">
                Contact
            </h1>
            <p className="text-left leading-7 text-lg lg:pr-20 text-gray-400">
                Feel free to contact me. I am available for any type of cooperation,
                whether it is some type of consulting or help with your work, as
                well as for any type of employment, both full-time and part-time or
                in the form of freelance. Of course, any suggestion, whether
                positive or negative, is welcome, because any feedback on our work
                means a lot to us developers, and it gives us room to improve our
                work.
            </p>
            <div className="mt-20 lg:flex justify-around items-center">
                <div>
                    <div className="flex items-center gap-4">
                        <a href="tel:+38161-189-11-36">
                            <BsFillTelephoneFill className="text-5xl text-yellow-400"></BsFillTelephoneFill>
                        </a>
                        <p className=" text-xl text-gray-400">
                            +381 61 189 11 36
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-10 lg:mt-20">
                        <a href="mailto:ognjendabic640@gmail.com">
                            <MdEmail className="text-5xl text-yellow-400"></MdEmail>
                        </a>
                        <p className=" text-xl text-gray-400">
                            ognjendabic640@gmail.com
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-10 lg:mt-20">
                        <a
                            target="_blank"
                            href="https://goo.gl/maps/F5rMUK1WhLjqEv8K6"
                            rel="noopener noreferrer"
                        >
                            <MdLocationPin className="text-5xl text-yellow-400"></MdLocationPin>
                        </a>
                        <p className=" text-xl text-gray-400">
                            Požega, Serbia
                        </p>
                    </div>
                    {/* <div className="flex items-center gap-4 mt-10 lg:mt-20">
                        <a
                            target="_blank"
                            href=""
                            rel="noopener noreferrer"
                        >
                            <AiOutlineCloudDownload className="text-5xl text-yellow-400"></AiOutlineCloudDownload>
                        </a>
                        <p className=" text-xl text-gray-400">
                            Resume
                        </p>
                    </div> */}
                </div>
                <div className=" hidden lg:block w-1 h-125 border-r border-white"></div>
                <form
                    action="https://formspree.io/f/meqypeag"
                    method="POST"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        let isEmpty = false;

                        // Check if any form field is empty
                        for (let [key, value] of formData.entries()) {
                            if (!value.trim()) {
                                isEmpty = true;
                                break;
                            }
                        }

                        if (!isEmpty) {
                            try {
                                const response = await fetch(e.target.action, {
                                    method: "POST",
                                    body: formData,
                                    headers: {
                                        Accept: "application/json",
                                    },
                                });

                                if (response.ok) {
                                    e.target.reset(); // Reset the form
                                } else {
                                    alert("Form submission failed. Please try again later.");
                                }
                            } catch (error) {
                                console.error("Error submitting form:", error);
                                alert(
                                    "An error occurred while submitting the form. Please try again later."
                                );
                            }
                        } else {
                            alert(
                                "Please fill out all fields before submitting the form."
                            );
                        }
                    }}
                    className="mt-14 grid gap-10 lg:w-80 lg:mt-0 pb-20"
                >
                    <input
                        className="transition text-center text-2xl border-b focus:outline-none outline-none focus:placeholder:-translate-x-16 bg-transparent border-b-gray-400"
                        type="text"
                        name="firstName"
                        placeholder="First name"
                    />
                    <input
                        className="text-center text-2xl border-b focus:outline-none outline-none focus:placeholder:-translate-x-16 bg-transparent border-b-gray-400"
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                    />
                    <input
                        className="text-center text-2xl border-b focus:outline-none outline-none focus:placeholder:-translate-x-16 bg-transparent border-b-gray-400"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                    />
                    <input
                        className="text-center text-2xl border-b focus:outline-none outline-none focus:placeholder:-translate-x-16 bg-transparent border-b-gray-400"
                        type="number"
                        name="number"
                        placeholder="Your Phone"
                    />
                    <p className="text-center text-gray-400 text-2xl">Your Message</p>
                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        className="-mt-10 border appearance-none outline-none focus:outline-none rounded-xl p-6 h-52 text-xl dark:bg-transparent border-gray-400"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-linear-to-br from-teal-400 to-teal-400 w-40 py-2 text-white mx-auto text-lg lg:text-2xl active:scale-90  transition 
                        duration-500 hover:bg-transparent border border-cyan-400 hover:from-transparent hover:to-transparent hover:border hover:border-teal-400 cursor-pointer"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
