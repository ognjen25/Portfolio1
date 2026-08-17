import React from 'react'
import goToProjects from './Projects-func'
import inventory from '../assets/inventory.png'
import productPreview from '../assets/product-preview.jpg'
import recipePage from '../assets/preview-recipe_page.jpg'
import socialLinks from '../assets/preview-social_links.jpg'
import circleAnimation from '../assets/circle-animation.png'

const Projects = () => {
    return (
        <section className="mt-20">
            <div className="mb-10 grid">
                <h1 className="text-left text-3xl font-quicksandbold mb-10 text-white">
                    My work
                </h1>
                <p className="text-left leading-7 text-lg lg:pr-20 text-gray-400">
                    I am a <span className=" text-blue-600">front-end web developing</span> who successfully completed the ITAcademy
                    program, where I gained strong foundations in modern web development,
                    responsive design, and building interactive user interfaces. During my
                    professional experience at Izdavačko preduzeće Epoha-(unfortunetly the site is not out yet as there were inside limitations on technologies),
                    I worked on real-world web projects,
                    improving both my technical skills and problem-solving approach in a
                    production environment. I focus on creating clean, functional, and
                    user-friendly web applications while continuously expanding my knowledge
                    of both front-end and back-end technologies.
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
                    href="https://inventory-monitor-rho.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className=" mt-28 lg:mt-20" id="projects">
                        <p className="text-center text-3xl font-quicksandlight text-white">
                            Inventory monitor
                        </p>
                        <div className=" mt-4 shadow-2xl bg-gray-500 bg-opacity-60 hover:bg-opacity-80 hover:scale-105">
                            <img src={inventory} alt="inventory-monitor" />
                        </div>
                    </div>
                </a>
                <a
                    href="https://recipe-page-black-tau.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className=" mt-28 lg:mt-20" id="projects">
                        <p className="text-center text-3xl font-quicksandlight text-white">
                            Recipe page
                        </p>
                        <div className=" mt-4 shadow-2xl bg-gray-500 bg-opacity-60 hover:bg-opacity-80 hover:scale-105">
                            <img src={recipePage} alt="recipe" />
                        </div>
                    </div>
                </a>
                <a
                    href="https://product-preview-card-component-three-liart.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className=" mt-28 lg:mt-20" id="projects">
                        <p className="text-center text-3xl font-quicksandlight text-white">
                            Product preview
                        </p>
                        <div className=" mt-4 shadow-2xl bg-gray-500 bg-opacity-60 hover:bg-opacity-80 hover:scale-105">
                            <img src={productPreview} alt="product-preview" />
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
                            <img src={socialLinks} alt="social-links" />
                        </div>
                    </div>
                </a>
                <a
                    href="https://circle-color-animation.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className=" mt-28 lg:mt-20" id="projects">
                        <p className="text-center text-3xl font-quicksandlight text-white">
                            Circle animation
                        </p>
                        <div className=" mt-4 shadow-2xl bg-gray-500 bg-opacity-60 hover:bg-opacity-80 hover:scale-105">
                            <img src={circleAnimation} alt="circle-animation" />
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Projects
