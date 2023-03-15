import React from 'react'
import { Link } from 'react-scroll';
import ProjectsList from '../data/ProjectsList.js'
const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 h-80">
          {ProjectsList.map(({ id,Name, Photo, Description, Tags, Github, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg justify-center">
              <img
                src={Photo}
                alt={Description}
                className="rounded-md duration-200 hover:scale-105 w-96 h-40"
              />
              <div className="justify-center">
                {Name}
              </div>
              <div className="flex items-center justify-center">
                <button class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 rounded-full bg-green-500">
                  {demo}
                </button>
                <button class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 rounded-full bg-cyan-400">
                   {Github}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects