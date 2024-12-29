import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex gap-4 place-content-evenly bg-[#000000] p-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#535bf2]" : "text-white"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/notes"
        className={({ isActive }) =>
          isActive ? "text-[#535bf2]" : "text-white"
        }
      >
        Notes
      </NavLink>
    </div>
  );
};

export default NavBar;
