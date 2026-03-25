import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import laki from "../assets/laki.png";

const Hero = () => (
    <section>
        <div className=" text-center p-10">
            <p className=" text-4xl text-cyan-500 font-quicksandbold py-2 md:text-6xl">
                Dabić Ognjen
            </p>
            <p className=" py-2 text-2xl md:text-3xl text-white">
                Front-End Web Developer
            </p>
            <p className=" font-quicksand text-lg py-5 leading-8 md:text-2xl max-w-xl mx-auto text-gray-400">
                High school graduate turned self-taught web developer specializing
                in front-end web development. Explore further below for details
            </p>
        </div>
        <div className=" mb-14 flex justify-around text-7xl text-yellow-400">
            <a
                href="https://www.facebook.com/ognjen.dabic.3"
                target="_blank"
                rel="noopener noreferrer"
            >
                <AiFillFacebook></AiFillFacebook>
            </a>
            <a
                href="https://www.linkedin.com/in/ognjen-dabic-6bb5b5272/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <AiFillLinkedin></AiFillLinkedin>
            </a>
            <a
                href="https://www.instagram.com/__ognjendabic___/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <AiFillInstagram></AiFillInstagram>
            </a>
            <a
                href="https://github.com/ognjen25"
                target="_blank"
                rel="noopener noreferrer"
            >
                <AiFillGithub></AiFillGithub>
            </a>
        </div>
        <div className="relative bg-linear-to-br from-cyan-400 w-60 h-60 mx-auto rounded-full overflow-hidden md:w-96 md:h-96 to-white">
            <img src={laki} alt="developer" />
        </div>
    </section>
);

export default Hero;