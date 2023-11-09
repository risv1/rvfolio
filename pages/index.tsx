import { FC } from "react";
import Reveal from "./components/Reveal";
import Navbar from "./components/Navbar";
import Sphere from "./components/Sphere";
import Horizontal from "./components/Horizontal";
import Contact from "./components/Contact";

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <div
        id="home"
        className="flex flex-col sm:flex-row h-screen items-center"
      >
        <div className="text-sky-500 flex flex-col w-full sm:w-5/6 ml-5 sm:ml-10 mr-5">
          <div className="m-auto">
            <Reveal width="fit-content">
              <h1 className="text-4xl sm:text-5xl font-bold">
                Rishi Viswanathan
              </h1>
            </Reveal>
          </div>
          <div className="m-auto mt-5">
            <Reveal width="fit-content">
              <p className="text-xl sm:text-2xl text-white text-center">
                Working on projects related to{" "}
                <span className="text-yellow-400">Web Development</span> and
                interested in{" "}
                <span className="text-yellow-400">Data Science</span> and{" "}
                <span className="text-yellow-400">Machine Learning</span>.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="mt-5 sm:mt-20 z-0">
          <Sphere />
        </div>
      </div>
      <div id="about" className="pt-10 sm:pt-20 h-screen flex">
        <div className="m-auto w-full sm:w-1/2 p-8 ml-10">
          <Reveal width="fit-content">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              About Me
            </h1>
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
        <div className="w-full sm:w-1/2 p-8 text-white flex items-center sm:mr-10">
          <Reveal width="fit-content">
            <p className="text-base sm:text-2xl">
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
        <div className="position-relative ">
          <Horizontal>
            <div className="w-screen h-1/3 pr-8 flex items-center justify-center flex-col">
              <Reveal width="fit-content">
                <h2 className="text-sky-500 text-5xl mb-10">Projects</h2>
              </Reveal>
              <div className="flex justify-center flex-row gap-5">
                <div className="flex border w-1/4 flex-col justify-items-center rounded-xl bg-sky-800 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:-translate-y-5 ease-in duration-300">
                  <h2 className="font-bold text-2xl mt-5 mb-2 m-auto">
                    Brain Tumor Detection
                  </h2>
                  <p className="text-xl ml-5 mb-5 mr-1">
                    Built using OpenCV, C++, and Python to apply watershedding
                    algorithm and determine tumor region.
                  </p>
                </div>
                <div className="flex border w-1/4 flex-col justify-items-center rounded-xl bg-sky-800 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:-translate-y-5 ease-in duration-300">
                  <h2 className="font-bold text-2xl mt-5 mb-2 m-auto">Movie Loader</h2>
                  <p className="text-xl ml-5 mb-5 mr-1">
                    Built using React in the frontend, and Golang and Postgres,
                    to add, remove and view movies to watch.
                  </p>
                </div>
                <div className="flex border w-1/4 flex-col justify-items-center rounded-xl bg-sky-800 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:-translate-y-5 ease-in duration-300">
                  <h2 className="font-bold text-2xl mt-5 mb-2 m-auto">
                    Scheduling Algorithms
                  </h2>
                  <p className="text-xl ml-5 mb-5 mr-1">
                    Built using HTML, CSS, and Javascript to visualize the
                    execution process of various CPU Scheduling Algorithms.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-screen h-1/3 p-4 flex items-center justify-center flex-col">
              <Reveal width="fit-content">
                {" "}
                <h2>Academics</h2>
              </Reveal>
              <p>GPA: 9.33</p>
            </div>
            <div className="w-screen h-1/3 p-4 flex items-center justify-center flex-col">
              <Reveal width="fit-content">
                <h2>Hackerrank</h2>
              </Reveal>
              <p>Gold</p>
            </div>
          </Horizontal>
        </div>
      </div>
      <div className="h-screen bg-blend"></div>
      <div className="h-screen bg-blend"></div>
      <div id="contact" className="pt-10 sm:pt-20 h-screen flex justify-center items-center">
          <Contact />
      </div>
    </>
  );
};

export default HomePage;
