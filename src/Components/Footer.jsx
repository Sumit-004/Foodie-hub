import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-orange-400 w-full mt-10'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-start px-6 py-8 gap-8 md:gap-0'>
                <div className='md:w-1/2 flex flex-col gap-6'>
                    <div>
                        <h1 className='text-3xl font-semibold mb-4'>Contact</h1>
                        <p className='flex gap-2 items-center text-lg'><FaPhoneAlt />Phone: +91 9520410011</p>
                        <p className='flex gap-2 items-center text-lg'><IoIosMail />E-mail: sh.sumit2004@gmail.com</p>
                    </div>
                    <div className='text-3xl flex gap-6'>
                        <FaGithub />
                        <FaLinkedin/>
                        <FaFacebook/>
                    </div>
                </div>

                <div className='md:w-1/2 flex flex-col justify-center items-center md:items-start'>
                    <h1 className='font-semibold text-xl mb-4'>Terms & Policies</h1>
                    <div className='text-base text-gray-800 space-y-2'>
                        <p>Terms of Use</p>
                        <p>Policies</p>
                        <p>Code of Conduct</p>
                        <p>Privacy</p>
                    </div>
                </div>
            </div>
            <div className='w-full text-center text-lg py-4 '>
                <p>© 2025 Foodie Hub. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
