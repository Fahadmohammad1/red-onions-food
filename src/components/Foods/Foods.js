import React from "react";
import { NavLink } from "react-router-dom";

const Foods = () => {
  return (
    <div>
      <div className="flex justify-center mt-5 font-bold gap-7 font-serif">
        <NavLink
          to="/breakfast"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Breakfast
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Lunch
        </NavLink>
        <NavLink to="/">Dinner</NavLink>
      </div>
    </div>
  );
};

export default Foods;
