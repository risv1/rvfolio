import { FC } from "react";
import { Reveal } from "./components/Reveal";
import Navbar from "./components/Navbar";
import Sphere from "./components/Sphere";
import Horizontal from "./components/Horizontal";

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="flex flex-row h-screen items-center">
        <div className="text-sky-500 flex flex-col w-5/6 ml-10 mr-5">
          <div className="m-auto">
            <Reveal width="fit-content">
              <h1 className="text-5xl font-bold">Rishi Viswanathan</h1>
            </Reveal>
          </div>
          <div className="m-auto mt-5">
            {" "}
            <Reveal width="fit-content">
              <p className="text-2xl text-white text-center">
                Working on projects related to{" "}
                <span className="text-yellow-400">Web Development</span> and
                interested in{" "}
                <span className="text-yellow-400">Data Science</span> and{" "}
                <span className="text-yellow-400">Machine Learning</span>.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="mt-20 z-0">
          <Sphere />
        </div>
      </div>
      <div id="about" className="pt-20 h-screen flex">
        <div className="m-auto -w-1/2 p-8">
          <Reveal width="fit-content">
            <h1 className="text-3xl font-bold mb-4 text-white">About Me</h1>
          </Reveal>
          <div className="mb-4">
            <a
              href="https://github.com/risv1"
              className="text-sky-500 hover:text-sky-700 mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/"
              className="text-sky-500 hover:text-sky-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
        <div className="w-1/2 p-8 text-white flex items-center mr-10">
          <Reveal width="fit-content">
            <p className="text-2xl ">
              I'm a second-year student at SRM Institute of Science and
              Technology, and interested in Web Development, Machine Learning
              and Data Science. With a passion for coding and data, I aim to
              master both front-end and back-end web technologies, and develop
              my skills in various fields related to tech.
            </p>
          </Reveal>
        </div>
      </div>
      <div id="other" className="h-screen text-white">
        <Horizontal>
          <div className="w-screen h-9/12 p-4 flex items-center justify-center flex-col">
            <Reveal width="fit-content">
              <h2>Projects</h2>
            </Reveal>
            <p>Projects</p>
          </div>
          <div className="w-screen h-9/12 p-4 flex items-center justify-center flex-col">
            <Reveal width="fit-content">
              {" "}
              <h2>Academics</h2>
            </Reveal>
            <p>GPA: 9.33</p>
          </div>
          <div className="w-screen h-9/12 p-4 flex items-center justify-center flex-col">
            <Reveal width="fit-content">
              <h2>Hackerrank</h2>
            </Reveal>
            <p>Gold</p>
          </div>
        </Horizontal>
      </div>
    </>
  );
};

export default HomePage;
