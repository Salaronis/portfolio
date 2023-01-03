import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//import {pfp} from "../assets/PFP.jpg"
const Home = () => {
  return (
    <div name = "home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className = "flex flex-col justify-center h-full">
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Computer Science and Mathematics Student </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I am a current Sophomore at the University of Massachusetts Amherst, with interests in Applications of Machine Learning and Artificial Intelligence
                </p>
 
                <div>
                    <button className='group text-white w-it px-6 py-3 my-2 flex items-center rounded-md bg-umass-red cursor-pointer bg-[#881c1c]'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <ArrowForwardIosIcon size={10} className='ml-1'/>
                        </span>
                       
                    </button>
                </div>
            </div>
 
            <div>
                
            </div>
        </div>
    </div>
  )
}
 
export default Home

