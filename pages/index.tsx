import { FC } from "react";
import { Reveal } from "./components/Reveal";
import Navbar from "./components/Navbar";

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="text-red-500 flex justify-center items-center h-screen">
        <div className="m-auto flex justify-center items-center">
          <Reveal width="fit-content">
            <h1>Rishi Viswanathan</h1>
          </Reveal>
        </div>
      </div>
      <div id="about" className="text-red-500 flex justify-center items-center h-screen">
        <div className="m-auto flex justify-center items-center">
          <Reveal width="fit-content">
            <h1>About</h1>
          </Reveal>
        </div>
      </div>
      <div id="contact" className="text-red-500 flex justify-center items-center h-screen">
        <div className="m-auto flex justify-center items-center">
          <Reveal width="fit-content">
            <h1>Contact</h1>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default HomePage;
