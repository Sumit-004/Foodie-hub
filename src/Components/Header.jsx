import React, { useContext } from 'react'
import logo from '../assets/logo1.png'
import { RiMenu4Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";


import { useState } from 'react'
import { dataContext } from '../context/UserContext';


const Header = () => {
    let [toggle, setToggle] = useState(true);
    const toggleIcon = () => {
        setToggle(prev => !prev);
      };
    
    
let { showSignIn,setShowSignIn,showSignUp,setShowSignUp,showMenu,setShowMenu  } = useContext(dataContext)
    return (
        <>
            <nav className='flex flex-wrap items-center justify-between w-full h-[120px] px-4 md:px-8 relative'>
                <div id='img' className='flex items-center justify-center h-[120px] w-full md:w-[25%]'>
                    <img src={logo} alt="logo" className='h-[90px] w-[155px] md:h-[90px] md:w-[155px] max-w-full' />

                </div>
                <div id="center" className={`md:h-auto h-[160px] w-full md:w-[50%] md:flex md:justify-center md:items-center text-[18px] md:text-[22px] flex absolute md:static top-[120px] left-0 md:top-auto md:left-auto bg-white md:bg-transparent rounded-bl-lg rounded-br-lg  shadow-[0_10px_7px_-4px_rgba(0,0,0,0.3)] md:shadow-none z-50 md:z-auto ${showMenu ? "translate-y-0" : "hidden"}`}>
                    
                    <ul className='flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-4 md:p-0'>
                        <li  className='cursor-pointer hover:text-orange-600 transition-colors duration-300'><a href="">Home</a></li>
                        <li  className='cursor-pointer hover:text-orange-600 transition-colors duration-300'><a href="#food">Food</a></li>
                        <li  className='cursor-pointer hover:text-orange-600 transition-colors duration-300'><a href="">Services</a></li>
                        <li  className='cursor-pointer hover:text-orange-600 transition-colors duration-300'><a href="#footer">Contact</a></li>
                    </ul>
                
                </div>
                <div id='login' className='w-full md:w-[25%] h-[120px] flex items-center justify-evenly text-[15px] mt-4 md:mt-0'>
                    <div className='hidden md:block'>
                        <button className='border-black hover:bg-gray-200 hover:shadow-[2px_2px_2px_2px] transition-all border-2 py-3 px-4.5 rounded-[15px] text-black cursor-pointer' onClick={()=>{
                    
                    setShowSignIn(true)
                }}>Log In</button>
                    </div>
                    <div className='hidden md:block'>
                        <button className='bg-orange-400 py-3 px-4.5 rounded-[15px] text-white hover:shadow-[] cursor-pointer hover:bg-orange-600 transition-all' onClick={()=>{
                    setShowSignUp(true)
                }}>Sign Up</button>
                    </div>
                    <div id='resicon' className='flex items-center ml-auto text-3xl md:hidden cursor-pointer'>
                        <div onClick={toggleIcon} className='transition-all duration-300 ease-in-out cursor-pointer  hover:text-orange-700'>
                            {toggle?
                            <h1 id='showMenu' className='transform transition-transform duration-400 hover:scale-110'><RiMenu4Line onClick={()=>{setShowMenu(true)}}/></h1>:
                            <h1 id='crossMenu' className='"transform transition-transform duration-400 hover:rotate-120"'><RxCross2 onClick={()=>{setShowMenu(false)}}/></h1>}

                        </div>
                        <h1  className='transition-all duration-300 cursor-pointer hover:scale-110 hover:text-orange-700'><CgProfile  onClick={()=>{
                    setShowSignIn(true)
                }}/></h1>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Header
