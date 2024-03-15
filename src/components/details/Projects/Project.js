import React from "react";
import classes from "./Project.module.css";
import Button from "../Button/Button";

const Project = (props) => {
    return (
        <div className={classes.project}>
            <h1 className={classes.projectTitle}>{props.projectName}</h1>
            <img src={props.img} alt="Project screenshot" className={classes.image}></img>
            <p className={classes.projectDescription}>{props.description}</p>
            <div className={classes.links}>
                <a href={props.webpage}>
                    <Button text="Webpage"/>
                </a>
                <a href={props.github}>
                    <Button text="GitHub"/>
                </a>
            </div>
        </div>
    );
};

export default Project;