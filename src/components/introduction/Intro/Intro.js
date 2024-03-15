import React from "react";
import classes from "./Intro.module.css";

const Intro = () => {
    return (
        <>
            <div className={classes.hello}>
                <div className={classes.preHello}></div>
                <h1 className={classes.introHello}>Hello!</h1>
                <div className={classes.postHello}></div>
            </div>
            <p className={classes.intro}>
                I'm Devin the developer. I'm a professional full-stack developer located in Tucson, Arizona &#127797;. I
                keen eye for both the aesthetics and functionality of digital products.
                User experience, beautiful pixels and writing clean, accessible code matters to me. I believe that
                simplicity is important and I sweat the details.
            </p>
        </>
    );
};

export default Intro;