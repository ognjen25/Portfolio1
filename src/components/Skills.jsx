import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { DiCss3, DiSass, DiMysql } from "react-icons/di";
import { SiTailwindcss, SiJavascript, SiFigma, SiVite  } from "react-icons/si";


const Skills = () => (
    <section className="mt-6">
        <div className="mb-10">
            <h1 className="text-left text-3xl font-quicksandbold mb-10 text-white">
                What am I do?
            </h1>
            <p className="text-left leading-7 text-lg lg:pr-20 text-gray-400">
                Four years ago, I began my programming journey. Starting with{" "}
                <span className="text-green-500">HTML</span> and basic websites, I
                have dedicated countless hours to learning and growing. Through
                persistence and late nights at the computer, I have delved into{" "}
                <span className="text-blue-600">ReactJS</span> and started
                building sophisticated web applications. I am deeply passionate
                about React and its frameworks, fascinated by the endless
                possibilities they offer on the client side. While I am still in
                the process of learning React, I am confident that with continued
                effort and a conducive environment, I will rapidly progress and be
                primed for larger projects. Like every aspiring programmer, my
                dream is to one day become a{" "}
                <span className="text-red-500">Full Stack Web Developer</span>.
            </p>
        </div>
        <div className=" font-quicksand">
            <h1 className="text-left text-3xl font-quicksandbold mt-14 mb-10 text-white">
                What am I use?
            </h1>
        </div>
        <div className="lg:grid lg:grid-cols-3">
            <div className=" border-0 px-4 bg-linear-to-br from-cyan-800 to-cyan-500 py-6 text-xl mt-14 mb-4  mx-auto shadow-xl lg:min-w-54 rounded-3xl flex-column text-white">
                <p className="text-center pb-4 border-b text-3xl italic">
                    Structure
                </p>
                <AiFillHtml5 className=" mx-auto text-5xl mt-4 mb-2"></AiFillHtml5>
                <p className=" text-center font-quicksandbold">HTML5</p>
            </div>
            <div className="px-4 bg-linear-to-br from-cyan-800 to-cyan-500 text-white py-6 text-xl mt-10 mb-4 mx-auto shadow-xl lg:min-w-54 rounded-3xl flex-column border-0">
                <p className=" pb-4 italic text-center border-b text-3xl">
                    Style
                </p>
                <div className="flex justify-around md:gap-4">
                    <div>
                        <DiCss3 className=" text-5xl mt-4 mb-2"></DiCss3>
                        <p className=" font-quicksandbold text-center">CSS3</p>
                    </div>
                    <div>
                        <DiSass className=" text-5xl mt-4 mb-2"></DiSass>
                        <p className=" font-quicksandbold text-center">SASS</p>
                    </div>
                    <div>
                        <SiTailwindcss className=" mx-auto text-5xl mt-4 mb-2"></SiTailwindcss>
                        <p className=" font-quicksandbold text-center">Tailwind</p>
                    </div>
                </div>
            </div>
            <div className="px-4 bg-linear-to-br from-cyan-800 to-cyan-500 text-white py-6 text-xl mt-10 mb-4 mx-auto shadow-xl lg:min-w-54 rounded-3xl flex-column border-0">
                <p className=" pb-4 italic text-center border-b text-3xl">
                    App Functionality
                </p>
                <div className="flex justify-around md:gap-4">
                    <div>
                        <SiJavascript className=" text-5xl mt-4 mb-2 mx-auto"></SiJavascript>
                        <p className=" font-quicksandbold text-center">VanilaJS</p>
                    </div>
                    <div>
                        <FaReact className=" text-5xl mt-4 mb-2 mx-auto"></FaReact>
                        <p className=" font-quicksandbold text-center">ReactJS</p>
                    </div>
                </div>
            </div>
            <div className="px-4 bg-linear-to-br from-cyan-800 to-cyan-500 text-white py-6 text-xl mt-10 mb-4 mx-auto shadow-xl lg:min-w-54 rounded-3xl flex-column border-0">
                <p className=" pb-4 italic text-center border-b text-3xl">
                    Back-end
                </p>
                <div className="flex justify-around">
                    <div>
                        <DiMysql className=" text-5xl mt-4 mb-2 mx-auto"></DiMysql>
                        <p className=" font-quicksandbold text-center">MySQL</p>
                    </div>
                </div>
            </div>
            <div className="px-4 bg-linear-to-br from-cyan-800 to-cyan-500 text-white py-6 text-xl mt-10 mb-4 mx-auto shadow-xl lg:min-w-54 rounded-3xl flex-column border-0">
                <p className=" pb-4 italic text-center border-b text-3xl">
                    Tools
                </p>
                <div className="flex justify-around md:gap-4">
                    <div>
                        <SiFigma className=" text-5xl mt-4 mb-2"></SiFigma>
                        <p className=" font-quicksandbold text-center">Figma</p>
                    </div>
                    <div>
                        <FaGitAlt className=" text-5xl mt-4 mb-2"></FaGitAlt>
                        <p className=" font-quicksandbold text-center">Git</p>
                    </div>
                    <div>
                        <SiVite className=" text-5xl mt-4 mb-2"></SiVite>
                        <p className=" font-quicksandbold text-center">Vite</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;