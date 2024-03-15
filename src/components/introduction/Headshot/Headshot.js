import headshot from "../../../assets/IMG_1596.jpg"
import classes from "./Headshot.module.css";

const Headshot = () => {
    return (
        <img src={headshot} alt="Developer headshot" className={classes.headshot}></img>
    );
};

export default Headshot;