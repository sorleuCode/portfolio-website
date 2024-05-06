import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import solidity from "../assets/solidity.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: solidity,
      title: "Solidity",
      style: "shadow-gray-400",
    },
  ];

  return (
    <fieldset
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full aboutAnim p-10 mt-16 rounded-md"
    >
      <legend className='color-white font-medium text-2xl m-auto' >Experience</legend>
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="w-full grid  sm:grid-cols-3 gap-12 text-center sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 flex flex-col justify-between py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 h-20 rounded-full mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </fieldset>
  );
};

export default Experience;
