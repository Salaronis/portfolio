import React from 'react'

const about = () => {
  return (
    <div name = "about" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className =" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-20">
            "I am a current Sophomore studying Computer Science and Mathematics at the University of Massachusetts Amherst and also a member of the Commonwealth Honors College.
             I'm especially interested in Artificial intelligence and Machine Learning applications, and I hope to do research in the field for my eventual Honors Thesis. I hope
             that you find my profile interesting and feel free to reach out if you have an inquiries! "
            </p>

            <br/>

            <p>
            "I am currently working on many different projects to help boost my portfolio and am always willing to learn more about software development. "
            </p>
        </div>
    </div>
  )
}

export default about