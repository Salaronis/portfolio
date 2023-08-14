import React from 'react'

const About = () => {
  return (
    <div name = "about" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className =" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me</p>
            </div>
            <p className="text-xl mt-20">
            I am an aspiring software engineer, looing to find internships for the 2023 Summer and Fall. I am especially interested in roles in Full-Stack Development and in Machine Learning. While I'm not working on coding projects,
            you can find me fencing, working out, or spending time with friends. I hope to leran as much as possible through my experience through internships and personal projects. If anything on here looks interesting to you,
            or you think that we can work together on something, feel free to reach out!
            </p>

            <br/>

            <p>
            I am currently working on many different projects to help boost my portfolio and am always willing to learn more about software development.
            </p>
        </div>
    </div>
  )
}

export default About