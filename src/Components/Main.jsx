import React, { useState } from 'react'
import portfolio from "../assets/portfolio.png";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import resume from "../assets/resume.pdf"



const Main = () => {

  const socials = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin />
        </>
      ),
      href: "https://linkedin.com/in/muhammed-soliu-1203381b2",
      style: "rounded-lg",
      name: "linkedin"
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub />
        </>
      ),
      href: "https://github.com/sorleuCode",
      style: "rounded-lg",
      name: "github"
    },
    {
      id: 3,
      child: (
        <>
          <FaTwitter />
        </>
      ),
      href: "https://x.com/sorleu_?s=09",
      style: "rounded-lg",
      name: "twitter"
    },
    {
      id: 4,
      child: (
        <>
          <HiOutlineMail />
        </>
      ),
      href: "mailto:soliumuhammed953@gmail.com",
      style: "rounded-lg",
      name: "email"
    },
    {
      id: 5,
      child: (
        <>
          <FaWhatsapp />
        </>
      ),
      href: "mailto:soliumuhammed953@gmail.com",
      style: "rounded-lg",
      name: "whatsapp"
    },
    {
      id: 6,
      child: (
        <>
          <BsFillPersonLinesFill />
        </>
      ),
      href: resume,
      style: "rounded-lg",
      name: "resume",
      download: "resume.pdf",
    },
  ];

  return (
    <main name="home">
      <article className='flex flex-col md:flex-row gap-5'>
        <div>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-gray-100 fon'>Hello, i am Soliu,</h1>
          <h2 className='font-bold text-xl md:text-2xl lg:text-3xl font-mono mt-2 gradiant-text text-cyan-400'>Full Stack Developer</h2>
          <p className='mt-5 text-xl text-gray-400'>I work towards contributing values and making meaningful impact in the tech industry. Seeking development skills with the focus on collaboration, communication and passion.</p>
          <ul className='w-full flex gap-3 mt-5 lg:hidden'>
            {socials.map(({id, child, href, style, name, download}) => (
              <li key={id} className={`hover:scale-125 duration-300`}><a target='_blank' className={` text-cyan-400 ${style} text-xl sm:text-2xl md:text-3xl`} title={name} href={href} download={download}>{child}</a></li>
            ))}
          </ul>

        </div>
        <div>
          <img className=' rounded-2xl mx-auto w-2/3 md:w-full' src={portfolio} width={600} alt="sorleuCode" />
        </div>
      </article>

      
    </main>
  )
}

export default Main
