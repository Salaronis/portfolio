import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const NavBar = () => {
    const [nav, setNav] = useState();
    const links = [{
        id:1,
        link:'Home',
    },{
        id:2,
        link:'projects',
    },{
        id:3,
        link:'experience',
    },{
        id:4,
        link:'timeline'
    },{
        id:5,
        link:'about'
    }
    ]
    return (<div>
        <div className = "flex justfiy-between items-center w-full h-20 text-black bg-white dark:text-white fixed dark:bg-black ">
            <div>
                <h1 className = "text-5xl font-signature ml-2"> Michael</h1>
            </div>
            <ul className=" hidden md:flex ">
               {links.map(({id, link}) =>  <li key={id} className = "px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">{link}</li>)}
            </ul>
            <div onClick={() => setNav(!nav) } className = "cursor-pointer pr-4 z-10 text-gray-500">
                {nav ? <CloseIcon size = {30}/> : <MenuIcon size = {30}/>}
            </div>

            {nav &&(
                <ul className = " flex flex-col justify-center items-center absolute top-0  w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500" >
                {links.map(({id, link}) =>  <li key={id} className = "px-4 cursor-pointer capitalize py-6 text-4xl">{link}</li>)}
                </ul>
            )}

            
        </div>
    </div>);
}

export default NavBar;