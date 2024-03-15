import classes from "./Overlay.module.css";

// Each form input requires a name attribute to interact with getform.io
// I'm using getform.io because it sends the form info from the site
// directly to my Gmail and it is easy to implement.
const Overlay = (props) => {
    return (
        <div className={classes.backdrop}>
            <div className={classes.card}>
                <div>
                    <h1 className={classes.h1}>Contact me</h1>
                    <button className={classes.cancel} onClick={props.cancel}>&#10005;</button>
                </div>
                <form 
                action={process.env.REACT_APP_GETFORM_URL}
                method="POST"
                className={classes.form}
                >
                    <div>
                        <label htmlFor="text">What is your name?</label>
                        <input id="name" type="text" name="name" required></input>
                    </div>
                    <div>
                        <label htmlFor="email">Please leave your email address below.</label>
                        <input id="email" type="email" name="email" required></input>
                    </div>
                    <div>
                        <label htmlFor="body">What can I help you with?</label>
                        <textarea id="body" name="message" rows="15" cols="10" required></textarea>
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Overlay;