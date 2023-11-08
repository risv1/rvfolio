import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
    return (
        <nav className="h-20 w-full fixed bg-sky-700 z-10">
            <div className="float-left p-4">
                <Link href="/" className="text-yellow-400 text-5xl p-5">rvfolio</Link>
            </div>
            <div className="sm:flex justify-end text-2xl text-white pt-5">
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
                    <Link href="#contact" className="mr-9 sm:pl-5 pt-5 ease-in duration-200 hover:text-yellow-300 pr-7">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;