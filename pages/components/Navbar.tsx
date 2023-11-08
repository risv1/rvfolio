import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <nav className="h-20 bg-black fixed w-full">
      <ul className="float-right mt-5">
        <li className="inline-block mr-10">
          <Link
            href="#home"
            className="text-3xl text-red-800 hover:text-red-500"
          >
            Home
          </Link>
        </li>
        <li className="inline-block mr-10">
          <Link
            href="#about"
            className="text-3xl text-red-800  hover:text-red-500"
          >
            About
          </Link>
        </li>
        <li className="inline-block mr-10">
          <Link
            href="#contact"
            className="text-3xl text-red-800  hover:text-red-500"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
