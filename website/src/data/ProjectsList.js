import stb from '../assets/pictures/stb.png'
import website from '../assets/pictures/website.PNG'
import movie from '../assets/pictures/movie.jpg'
import jsi from '../assets/pictures/jsinterpreter.png'
import ct from '../assets/pictures/cocktail.png'
import tsp from '../assets/pictures/48StatesTSP.png'
import { Link } from "react-scroll";
var ProjectsList = [
    {
        id: 1,
        Name: "React portfolio",
        Photo: website,
        Description: "",
        Tags: ["JavaScript" , "Node.JS" , "ReactJS", "TailwindCSS"],
        Github: "https://github.com/Salaronis/portfolio",
        demo: <Link to={"home"} smooth duration={500}>{"Demo"}</Link>
    },
    {
        id: 2,
        Name: "JavaScript interpreter",
        Photo: jsi,
        Description: "Checks Grammar of JavaScript Code",
        Tags: ["JavaScript", "NodeJS"],
        Github: "",
        demo: "N/A"
    },
    {
        id: 3,
        Name: "Movie Library",
        Photo: movie,
        Description: "CommandLine applcation that allows for people to create a simplistic movie library",
        Tags: ["Java"],
        Github: "",
        demo: "N/A"
    },
    {
        id: 4,
        Name: "Shut the Box",
        Photo: stb,
        Description: "Recreation of Shut the Box as a Java App",
        Tags: ["Java"],
        Github: "https://github.com/Salaronis/shut-the-box",
        demo: "Demo"
    },{
        id:5,
        Name: "CocktailBot",
        Photo: ct,
        Description:"Discord Bot that returns cocktail recipes",
        Tags: ["Heroku","Javascript","NodeJS"],
        Github: "https://github.com/Salaronis/cocktailBot",
        demo: "Demo"
    },{
        id:6,
        Name: "Traveling Salesman Problem Visualizer",
        Photo: tsp,
        Description: "Traveling Salesman Problem Visualizer showing Christophide's Algorithm",
        Tages:["Python"],
        Github:"https://github.com/Salaronis/TSPV",
        demo:"Demo"
    }
]

export default ProjectsList;