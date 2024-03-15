import React from "react";
import classes from "./Navbar.module.css";
import Name from "./Name";
import Navlink from "./Navlink";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarContents}>
                <Name className={classes.name} />
                <div className={classes.navlinks}>
                    <Navlink url="#projectsTitle" />
                    <Navlink url="https://www.linkedin.com/in/devin-hunter-the-developer/" icon="devicon-linkedin-plain" />
                    <Navlink url="https://github.com/Devhunter16" icon="devicon-github-original" />
                </div>
            </div>
        </ nav>
    );
};

export default Navbar;