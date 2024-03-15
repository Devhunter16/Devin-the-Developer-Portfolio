import React from "react";
import classes from "./Name.module.css";
import bluejay from "../../assets/blue-jay.png"

const Name = () => {
    return (
        <div className={classes.nameWrapper}>
            <h1 className={classes.name}>
                Devin
            </h1>
            <img className={classes.bluejay} src={bluejay}></img>
        </div>
    );
};

export default Name;