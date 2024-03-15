import React from "react";
import classes from "./Navlink.module.css";
import Icon from "../details/Skills/Icon";

const Navlink = (props) => {

    if (!props.icon) {
        return (
            <a
                className={classes.navlinkwork}
                href={props.url}
            >
                Portfolio
            </a>
        );
    } else {
        return (
            <a
                className={classes.navlink}
                href={props.url}
                target="_blank"
                rel="noreferrer noopener"
            >
                <Icon icon={props.icon} />
            </a>
        );
    }
};

export default Navlink;