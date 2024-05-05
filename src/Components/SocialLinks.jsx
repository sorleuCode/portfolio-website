import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import resume from "../assets/resume.pdf"

const SocialLinks = () => {
    const socials = [
        {
          id: 1,
          child: (
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          ),
          href: "https://linkedin.com/in/muhammed-soliu-1203381b2",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              GitHub <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/sorleuCode",
        },
        {
          id: 3,
          child: (
            <>
              Twitter <FaTwitter size={30} />
            </>
          ),
          href: "https://x.com/sorleu_?s=09",
        },
        {
          id: 4,
          child: (
            <>
              Mail <HiOutlineMail size={30} />
            </>
          ),
          href: "mailto:soliumuhammed953@gmail.com",
        },
        {
          id: 5,
          child: (
            <>
              Whatsapp <FaWhatsapp size={30} />
            </>
          ),
          href: "https://wa.me/2347046471785",
        },

        {
          id: 6,
          child: (
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          ),
          href: resume,
          style: "rounded-br-md",
          download: "resume.pdf",
        },
      ];
    
      return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
          <ul>
            {socials.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={`flex justify-between items-center w-40 h-12 px-3 ml-[-108px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default SocialLinks
