import React from 'react'
import goToProjects from './Projects-func'
import qr from '../assets/preview-qr_code.jpg'
import BlogCard from '../assets/blog-preview.jpg'
import socialLinks from '../assets/preview-social_links.jpg'
import Screenshot1 from '../assets/Screenshot-1.png'
import Screenshot2 from '../assets/Screenshot-2.png'

const Projects = () => {
    return (
        <section className="mt-20">
            <div className="mb-10 grid">
                <h1 className="text-left text-3xl font-quicksandbold mb-10 text-white">
                    My work
                </h1>
                <p className="text-left leading-7 text-lg lg:pr-20 text-gray-400">
                    I have done remote work as a freelancer. I mostly build websites
                    and smaller apps. I did the entire design of the websites, as well
                    as the design and functionality of the applications, completely by
                    myself, so far I have not had the opportunity to work with other
                    colleagues. My primary job is{" "}
                    <span className=" text-blue-600">front-end web developing</span>,
                    but I also partially know back-end web developing, such as
                    different types of contact forms or working with sql databases.
                </p>
                <button
                    className="mt-20 px-14 py-2 w-52 mx-auto border-cyan-800 border shadow-xl text-2xl active:scale-90 
                    hover:text-white hover:translate-y-2 transition duration-500 bg-cyan-500 text-white hover:bg-transparent"
                    onClick={goToProjects}
                >
                    Projects
                </button>
            </div>
            <div className="lg:grid grid-cols-3 gap-10">
                <a
                    href="https://qr-code-comp-lilac.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className=" mt-28 lg:mt-20" id="projects">
                        <p className="text-center text-3xl font-quicksandlight text-white">
                            QR code component
                        </p>
                        <div className=" mt-4 shadow-2xl bg-gray-500 bg-opacity-60 hover:bg-opacity-80 hover:scale-105">
                            <img src={qr} alt="qr-link" />
                        </div>
                    </div>
                </a>

                <a
                    href="https://social-links-profile-chi-five-92.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className=" mt-28 lg:mt-20" id="projects">
                        <p className="text-center text-3xl font-quicksandlight text-white">
                            Social links list
                        </p>
                        <div className=" mt-4 shadow-2xl bg-gray-500 bg-opacity-60 hover:bg-opacity-80 hover:scale-105">
                            <img src={socialLinks} alt="qr-link" />
                        </div>
                    </div>
                </a>
                <a
                    href="https://social-links-profile-chi-five-92.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className=" mt-28 lg:mt-20" id="projects">
                        <p className="text-center text-3xl font-quicksandlight text-white">
                            Blog preview card
                        </p>
                        <div className=" mt-4 shadow-2xl bg-gray-500 bg-opacity-60 hover:bg-opacity-80 hover:scale-105">
                            <img src={BlogCard} alt="qr-link" />
                        </div>
                    </div>
                </a>
                <a
                    href="https://social-links-profile-chi-five-92.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className=" mt-28 lg:mt-20" id="projects">
                        <p className="text-center text-3xl font-quicksandlight text-white">
                            Responsive page
                        </p>
                        <div className=" mt-4 shadow-2xl bg-gray-500 bg-opacity-60 hover:bg-opacity-80 hover:scale-105">
                            <img src={Screenshot1} alt="qr-link" />
                        </div>
                    </div>
                </a>
                <a
                    href="https://social-links-profile-chi-five-92.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className=" mt-28 lg:mt-20" id="projects">
                        <p className="text-center text-3xl font-quicksandlight text-white">
                            Circle animation
                        </p>
                        <div className=" mt-4 shadow-2xl bg-gray-500 bg-opacity-60 hover:bg-opacity-80 hover:scale-105">
                            <img src={Screenshot2} alt="qr-link" />
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Projects
