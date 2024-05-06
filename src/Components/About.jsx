import React from 'react';
import resume from "../assets/resume.pdf";


const About = () => {
  return (

    <fieldset name='about' className=' aboutAnim mt-16 flex flex-wrap p-5 rounded-md bg-gray-800 font text-md text-gray-300' >
      <legend className='color-white font-medium text-2xl m-auto '>About</legend>
      <p className='w-full text-sm sm:text-lg md:text-xl'>My name is Muhammed Soliu,  a driven Industrial Chemistry graduate from the prestigious University of Ilorin, Ilorin, Nigeria. After years of hardwork, i graduated with Second Class Upper Division in Industrial Chemistry. Right from the beginning, i  am passionate about leveraging technology to drive innovation and solve real-world problems. As the world of tech is growing fast, I expanded my skill set in software engineering and blockchain development to stay ahead in the digital age. Eager to contribute value and make meaningful impact in the tech industry. Let's connect and explore opportunities to collaborate!</p>
      <p className='w-full text-sm sm:text-lg md:text-xl'>Download and check-out my <a className='underline text-cyan-300' download="resume.pdf" href={resume}>resume</a></p>
    </fieldset>

  )
}

export default About
