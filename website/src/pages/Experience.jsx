import React from "react";

import html from "../assets/pictures/icons8-html-5-144.png";
import css from "../assets/pictures/icons8-css3-144.png";
import javascript from "../assets/pictures/icons8-javascript-144.png";
import reactImage from "../assets/pictures/react.png";
import github from "../assets/pictures/icons8-github-144.png";
import tailwind from "../assets/pictures/icons8-tailwindcss-144.png";
import java from "../assets/pictures/icons8-java-144.png";
import linux from "../assets/pictures/icons8-linux-96.png"
import nodejs from "../assets/pictures/icons8-nodejs-144.png"
import python from "../assets/pictures/icons8-python-144.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      subtitle: <a target="_blank" href="https://icons8.com/icon/20909/html-5">Html 5 icon by Icons8</a>,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      subtitle: <a target="_blank" href="https://icons8.com/icon/21278/css3">CSS3 icon by Icons8</a>,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      subtitle: <a target="_blank" href="https://icons8.com/icon/108784/javascript">JavaScript icon by Icons8</a>,
      style: "shadow-yellow-500",
    },{
      id: 4,
      src:nodejs,
      title: "Node.js",
      subtitle: <a target="_blank" href="https://icons8.com/icon/54087/nodejs">Nodejs icon by Icons8</a>,
      style: "shadow-emerald-500"
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      subtitle: <a target="_blank" href="https://icons8.com/icon/asWSSTBrDlTW/react-a-javascript-library-for-building-user-interfaces">React icon by Icons8</a>,
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "TailwindCSS",
      subtitle: <a target="_blank" href="https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss">Tailwindcss icon by Icons8</a>,
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: java,
      subtitle: <a target="_blank" href="https://icons8.com/icon/13679/java">Java icon by Icons8</a>,
      title: "Java",
      style: "shadow-pink-400",
    },{
      id: 8,
      src: python,
      subtitle:<a target="_blank" href="https://icons8.com/icon/13441/python">Python icon by Icons8</a>,
      title: "Python",
      style: "shadow-blue-500"
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      subtitle: <a target="_blank" href="https://icons8.com/icon/3tC9EQumUAuq/github">GitHub icon by Icons8</a>,
      style: "shadow-gray-400",
    },
    {
      id:10,
      src: linux,
      title: "Linux",
      subtitle: <a target="_blank" href="https://icons8.com/icon/17842/linux">Linux icon by Icons8</a>,
      style: "shadow-white-500",
    }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, subtitle, style }) => (
            <button
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              <div className="text-[10px]"><p>{subtitle}</p></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;