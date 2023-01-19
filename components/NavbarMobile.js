import React from "react";
import { nav } from "../pages/data.js";

function NavbarMobile({ NavbarMobile }) {
  return (
    <nav
      className={`${
        NavbarMobile ? "min-h-screen" : "min-h-0"
      }lg:hidden w-full fixed bg-blue-200 backdrop-blur-md left-0 top-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0 `}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>

      <div className="-mt-44 flex justify-center gap-y-8">

      </div>

    </nav>
  );
}

export default NavbarMobile;
