import { FC, useState } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="h-20 w-full fixed bg-sky-700 z-10">
      <div className="float-left p-4">
        <Link href="/" className="text-yellow-400 text-5xl p-5">
          rvfolio
        </Link>
      </div>
      <div className="sm:flex justify-end text-2xl text-white pt-5">
        {isDrawerOpen ? (
          <div className="sm:hidden absolute top-20 left-0 w-full bg-sky-700">
            <div className="text-white p-4">
              <div>
                <Link href="#home" className="pb-4">
                  Home
                </Link>
              </div>
              <div>
                <Link href="#about" className="pb-4">
                  About
                </Link>
              </div>
              <div>
                <Link href="#other" className="pb-4">
                  Other
                </Link>
              </div>
              <div>
                <Link href="#contact" className="pb-4">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        ) : null}
        <div className="sm:hidden">
          <button
            className="text-white text-3xl p-2 float-right"
            onClick={toggleDrawer}
          >
            ☰
          </button>
        </div>
        <div className="hidden sm:flex">
          <div>
            <Link href="#home" className="mr-9 ease-in duration-200 hover:text-yellow-300">
              Home
            </Link>
          </div>
          <div>
            <Link href="#about" className=" mr-9 sm:pl-5 pt-5 ease-in duration-200 hover:text-yellow-300">
              About
            </Link>
          </div>
          <div>
            <Link href="#other" className="mr-9 sm:pl-5 pt-5 ease-in duration-200 hover:text-yellow-300">
              Other
            </Link>
          </div>
          <div>
            <Link href="#contact" className="mr-9 sm:pl-5 pt-5 ease-in duration-200 hover:text-yellow-300 pr-7">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
