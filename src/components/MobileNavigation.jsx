import React from "react";
import { mobilenavigation } from "../contants/navigation";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <section className="bg-black lg:hidden bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-40">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobilenavigation.map((nav, index) => {
          return (
            <NavLink
              key={nav.label + "mobilenavigation"}
              to={nav.href}
              className={({ isActive }) =>
                `px-3 flex items-center justify-center flex-col ${
                  isActive ? "text-neutral-100" : ""
                }`
              }
            >
              <div className="text-2xl">{nav.icon}</div>
              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
