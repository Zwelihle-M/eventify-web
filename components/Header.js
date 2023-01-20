import React, { useState, useEffect } from "react";
import { header } from "../pages/data.js";
import Nav from "../components/Navbar";
import NavMobile from "../components/NavbarMobile";
import Link from "next/link.js";
import Image from "next/image.js";
import Navbar from "../components/Navbar";

function Header() {
  const [active, setActive] = useState(false);

  const [navMobile, setNavMobile] = useState(false);
  const { Logo, Loginbtn, Signupbtn } = header;
  return (
    <header
      className={`${
        active ? "py-[16px]" : "bg-transparent py-[20px]"
      } fized max-w-[1400px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg-[80px] transition-all duration-300`}
    >
       logo
       {/* <Link href={"/"}>
        <Image src={Logo} alt="Alt eventify logo"  width={250}
      height={150} priority/>
      </Link> */}

      {/* nav */}
      <Navbar/>
      {/* buttons */}
      {/* <div className="hidden lg:flex space-x-4">
        <button>{Loginbtn}</button>
        <button className="btn">{Signupbtn}</button>
      </div> */}

      {/* menu */}
      <div onClick={()=> setNavMobile(!navMobile)} className="lg:hidden absolute right-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {/* mobile nav */}
      <NavMobile navMobile={navMobile}/>
    </header>
  );
}

export default Header;
