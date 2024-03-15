import React from "react";
import classes from "./Skills.module.css";
import Icon from "./Icon";

const Skills = () => {
    return (
        <>
            <h1 className={classes.name}>
                My Skills
            </h1>
            <div className={classes.skills}>
                <Icon icon="devicon-html5-plain-wordmark" />
                <Icon icon="devicon-css3-plain-wordmark" />
                <Icon icon="devicon-javascript-plain" />
                <Icon icon="devicon-typescript-plain" />
                <Icon icon="devicon-react-original-wordmark" />
                <Icon icon="devicon-nodejs-plain-wordmark" />
                <Icon icon="devicon-express-original" />
                <Icon icon="devicon-mongodb-plain-wordmark" />
                <Icon icon="devicon-postgresql-plain-wordmark" />
                <Icon icon="devicon-git-plain" />
                <Icon icon="devicon-wordpress-plain" />
                <Icon icon="devicon-amazonwebservices-plain-wordmark" />
            </div>
        </>
    );
};

export default Skills;