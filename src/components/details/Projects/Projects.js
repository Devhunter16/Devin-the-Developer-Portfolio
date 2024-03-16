import React from "react";
import classes from "./Projects.module.css";
import yelpCampImage from "../../../assets/YelpCamp.png"
import nightcappImage from "../../../assets/Nightcapp.png"
import devMealsImage from "../../../assets/DevMeals.png"
import Project from "./Project";

const Projects = () => {
    return (
        <div className={classes.projects}>
            <h1 className={classes.projectsHeader} id="projectsTitle">Some things I've created</h1>
            <div className={classes.projectsBody}>
                <Project
                    projectName="Nightcapp"
                    img={nightcappImage}
                    description="Nightcapp is a mixology web app that allows users to search
                    thousands of cocktail recipes. Users can search by name, ingredient, or 
                    even get a random cocktail if they feel like trying something new! Feel 
                    free to register and login to start trying recipes and saving them to your
                    favorites! Nightcapp's frontend was created using Next.js and CSS, and its
                    backend was created using Node.js, Express.js, and PostreSQL. It leverages
                    TheCocktailDb.com's API in order to provide users with nearly endless 
                    cocktail recipe options."
                    webpage="https://nightcapp-mixology.vercel.app/"
                    github="https://github.com/Devhunter16/Nightcapp-Full-Stack" />
                <Project
                    projectName="YelpCamp"
                    img={yelpCampImage}
                    description="Welcome to YelpCamp! It's like Yelp for campsites around 
                    the world. It even features a cool interactive cluster map! Feel free 
                    to register and start creating and rating campsites. YelpCamp's frontend 
                    was created using HTML, Bootstrap, and JavaScript, and its backend was 
                    created using Node.js, Express.js, and MongoDB. It also uses Cloudinary 
                    to store images and Mapbox's Geocoding API to display the interactive 
                    cluster map. Please be aware that YelpCamp may initially take some time 
                    to load."
                    webpage="https://yelpcamp-upon.onrender.com/"
                    github="https://github.com/Devhunter16/Yelp-Camp" />
                <Project
                    projectName="DevMeals"
                    img={devMealsImage}
                    description="I created DevMeals as a showcase of my ability to use
                    React to create a clean, beautiful, functional, food ordering web app.
                    I have not deployed this web app, and so this section is essentially a
                    placeholder for another app I am co-developing called Appy Hour. Appy
                    Hour is a passion project being developed using TypeScript, Next.js, 
                    Express.js, and PostreSQL."/>
            </div>
        </div>
    );
};

export default Projects;