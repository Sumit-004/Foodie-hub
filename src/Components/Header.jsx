import React from 'react'
import logo from '../assets/logo1.png'
import { RiMenu4Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingBasketFill } from "react-icons/ri";

import { useState } from 'react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className='flex flex-wrap items-center justify-between w-full h-[120px] px-4 md:px-8 relative'>
                <div id='img' className='flex items-center justify-center h-[120px] w-full md:w-[25%]'>
                    <img src={logo} alt="logo" className='h-[90px] w-[155px] md:h-[90px] md:w-[155px] max-w-full' />

                </div>
                <div id="center" className={`md:h-auto h-[100px] w-full md:w-[50%] md:flex md:justify-center md:items-center ${menuOpen ? 'block' : 'hidden'} text-[20px] flex absolute md:static top-[120px] left-0 md:top-auto md:left-auto bg-white md:bg-transparent shadow-md md:shadow-none z-50 md:z-auto`}>
                    
                    <ul className='flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-4 md:p-0'>
                        <li className='cursor-pointer hover:text-orange-400 transition-colors duration-300'>Home</li>
                        <li className='cursor-pointer hover:text-orange-400 transition-colors duration-300'>Food</li>
                        <li className='cursor-pointer hover:text-orange-400 transition-colors duration-300'>Services</li>
                        <li className='cursor-pointer hover:text-orange-400 transition-colors duration-300'>Contact</li>
                    </ul>
                
                </div>
                <div id='login' className='w-full md:w-[25%] h-[120px] flex items-center justify-evenly text-[15px] mt-4 md:mt-0'>
                    <div className='hidden md:block'>
                        <button className='border-black border-2 py-3 px-4.5 rounded-[15px] text-black cursor-pointer'>Sign In</button>
                    </div>
                    <div className='hidden md:block'>
                        <button className='bg-orange-400 py-3 px-4.5 rounded-[15px] text-white cursor-pointer hover:bg-orange-600 transition-all'>Sign Up</button>
                    </div>
                    <div id='resicon' className='flex items-center ml-auto text-3xl md:hidden cursor-pointer'>
                        <h1 className='' onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}><RiMenu4Line /></h1>
                        <h1><CgProfile /></h1>
                    </div>
                </div>
            </nav>
            <form className='w-full flex flex-row md:flex-row gap-4 items-center justify-evenly m-4 md:m-8 pr-6 text-[20px] md:text-[25px] h-auto md:h-[30px]'>
                <div className='w-full md:w-[60%] flex gap-4 items-center justify-center m-0 md:m-8 p-2'>
                <IoSearchSharp />
                <input type="text" placeholder='Search Items...' className='outline-none w-full' />
                </div>
                <div className='relative text-[25px] md:text-[30px] border-4 border-amber-600 h-[50px] md:h-[60px] w-[60px] md:w-[60px] flex items-center justify-center rounded-md text-orange-500 font-semibold bg-slate-100 cursor-pointer hover:bg-orange-200'>
                    <span className='absolute text-[16px] md:text-[20px] top-0 right-1'>0</span>
                    <RiShoppingBasketFill/>
                </div>
            </form>
        </>
    )
}

export default Header
