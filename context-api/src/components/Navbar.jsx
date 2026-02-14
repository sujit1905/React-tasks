import React, { useContext } from "react";
import {themedatecontext} from "../context/Themecontext";

const Navbar = () => {
  const {theme} = useContext(themedatecontext);
  return (
    <div
      className={`navbar ${theme}`}
    //   style={{
    //     background: theme === "light" ? "white" : "black",
    //     color: theme === "light" ? "black" : "white",
    //   }}
    >
      <h1>Sujit</h1>
      <div className="listitems">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Skill</h4>
        <h4>Contact</h4>
      </div>
    </div>
  );
};

export default Navbar;
