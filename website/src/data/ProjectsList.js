import stb from '../assets/pictures/stb.png'
import website from '../assets/pictures/website.PNG'
import movie from '../assets/pictures/movie.jpg'
import jsi from '../assets/pictures/jsinterpreter.png'
import ct from '../assets/pictures/cocktail.png'
import { Link } from "react-scroll";
var ProjectsList = [
    {
        id: 1,
        Name: "React portfolio",
        Photo: website,
        Description: "",
        Tags: ["JavaScript" , "Node.JS" , "ReactJS", "TailwindCSS"],
        Github: <a target="_blank" href ="https://github.com/Salaronis/portfolio" rel="noreferrer">Github</a>,
        demo: <Link to={"home"} smooth duration={500}>{"Demo"}</Link>
    },
    {
        id: 2,
        Name: "JavaScript interpreter",
        Photo: jsi,
        Description: "Checks Grammar of JavaScript Code",
        Tags: ["JavaScript", "NodeJS"],
        Github: "Available upon Request",
        demo: "N/A"
    },
    {
        id: 3,
        Name: "Movie Library",
        Photo: movie,
        Description: "CommandLine applcation that allows for people to create ",
        Tags: ["Java"],
        Github: "Available upon Request",
        demo: "N/A"
    },
    {
        id: 4,
        Name: "Shut the Box",
        Photo: stb,
        Description: "Recreation of Shut the Box as a Java App",
        Tags: ["Java"],
        Github: <a target="_blank" href ="https://github.com/Salaronis/shut-the-box" rel="noreferrer">Github</a>,
        demo: "Demo"
    },{
        id:5,
        Name: "CocktailBot",
        Photo: ct,
        Description:"Discord Bot that returns cocktail recipes",
        Tags: ["Heroku","Javascript","NodeJS"],
        Github: <a target ="_blank" href = "https://github.com/Salaronis/cocktailBot" rel="noreferrer">Github</a>,
        demo: "Demo"
    }
]

export default ProjectsList;