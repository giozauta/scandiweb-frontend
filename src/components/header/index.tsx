import React from "react";
import { NavLink } from "react-router-dom";
import {DEFAULT_LAYOUT_PATHS} from "@/routes/default/index.enum";

const Header: React.FC = () => {
  return (
    <div className="Navbar  h-[80px] flex justify-between items-center gap-10">
      <nav className="flex gap-10  h-full items-center">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active text-green-500 border-b-2 border-green-500  h-1/2"
              : " h-1/2"
          }
          to={DEFAULT_LAYOUT_PATHS.ALL}
        >
          ALL
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active text-green-500 border-b-2 border-green-500 h-1/2"
              : " h-1/2"
          }
          to={DEFAULT_LAYOUT_PATHS.TECH}
        >
          TECH
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active text-green-500 border-b-2 border-green-500 h-1/2"
              : " h-1/2"
          }
          to={DEFAULT_LAYOUT_PATHS.CLOTHES}
        >
          CLOTHES
        </NavLink>
      </nav>
      <div className="logo w-8 h-8 flex   bg-[url('images/green.png')] bg-no-repeat bg-cover ">
        <div className="arrow-image-box flex justify-center items-center w-full">
          <img src="/images/arrow.png" alt="arrow" />
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img src="images/shop.png" alt="shoping box" />
      </div>
    </div>
  );
};

export default Header;
