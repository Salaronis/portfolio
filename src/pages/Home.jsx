import React from 'react'
import pfp from '../assets/pictures/pfp.JPG'
const Home = () => {
  return (
    <div name = "home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <img src={pfp} className='h-3/4 rounded-md'>
            </img>
            <div className = "flex flex-col justify-center h-full pl-5">
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Hey, I'm Michael Xie! </h2>
                <p className='text-gray-500 py-4 max-w-md '>
                   Junior at the University of Massachusetts Amherst, with interests in Applications of Machine Learning and Artificial Intelligence. 
                </p>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}
 
export default Home

