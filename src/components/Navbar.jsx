
import Wasilogo from'/src/assets/Wasilogo01.png'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center '>
            <a href="/" aria-label='Home'>
            <img src={Wasilogo} className='mx-2' width={100} height={70} alt="Wasilogo" />
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl text-white '>
            <a className='hover:text-stone-300' href="https://www.linkedin.com/in/wasi226/"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'>
             <FaLinkedin />
            </a>

            <a className='hover:text-stone-300' href="https://github.com/wasi226"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'>
             <FaGithub/>
            </a>

            <a className='hover:text-stone-300' href="https://leetcode.com/u/wasi226/"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'>
             <SiLeetcode />
            </a>

            <a className='hover:text-stone-300' href="https://www.instagram.com/___haider___dotaxe22/"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'>
             <FaInstagram />
            </a>

        </div>
    </nav>
  )
}

export default Navbar
