import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Footer = () => {
    return (
        <footer className='h-[60vh] mt-10 bg-orange-400 w-[100%]'>
            <div className='flex'>
                <div className='w-[55%] h-[50vh] '>
                    <h1 className='text-3xl font-semibold'>Contact</h1>
                    <p className='flex gap-2 items-center text-[20px]'><FaPhoneAlt/>Phone: +91 9520410011</p>
                    <p className='flex gap-2 items-center text-[20px]'><IoIosMail/>E-mail: sh.sumit2004@gmail.com</p>
                        
                </div>


                <div className='h-[50vh] w-[45%] flex flex-col justify-center items-center'>
                    <h1 className='font-semibold text-[22px]'>Terms & Policies</h1>
                    <div className='text-[20px] text-gray-800'>
                        <p>Terms of Use</p>
                        <p>Policies</p>
                        <p>Code of Conduct</p>
                        <p>Privacy</p>
                    </div>
                </div>

            </div>
            <div className='h-[9vh] w-[100%] text-xl flex items-center justify-center'>
                <p>© 2025 Foodie Hub. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
