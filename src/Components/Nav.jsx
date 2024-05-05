
import { Link } from 'react-scroll'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Nav = ({ navItems }) => {
  return (
    <ul className='hidden text-md md:flex flex-between gap-20 items-center lg:text-xl'>
      <div className='flex gap-6'>
        {navItems.map((item) => (
          <li className='cursor-pointer   duration-200 hover:text-white hover:scale-110' key={item.id}><Link to={item.path} smooth={true} duration={500}>
            {item.item !== "Portfolio"? item.item : null}
          </Link></li>
        ))}
      </div>

      <div>
        <Link
          to="portfolio"
          smooth
          duration={500}
          className=" button-anim group text-white w-fit p-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
        ><span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          Portfolio
          <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>

    </ul>
  )
}

export default Nav
