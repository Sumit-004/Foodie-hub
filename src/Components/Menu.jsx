import React from 'react'
import img from '../assets/mainimg.jpg'

const Menu = () => {
    return (
        <div className='w-full h-auto md:h-[80vh] flex flex-col md:flex-row'>
            <div className='flex items-center justify-center w-full md:w-[55%] h-auto md:h-[100%] p-6 md:p-0'>
                <div className='w-full md:w-[55%] flex flex-col gap-4 md:gap-6'>
                    <div className='flex justify-start'>
                        <p className='text-gray-400 text-sm md:text-base'>--FRESH & DELICIOUS--</p>
                    </div>
                    <div className='text-2xl md:text-4xl'>
                        <p className='flex justify-start'>Delicious Meals</p>
                        <p className='flex justify-start'><span className='text-orange-600 font-bold'>Delivered</span> To Your Home</p>
                    </div>
                    <div className=''>
                        <p className='text-gray-400 text-sm md:text-base flex justify-start'>Enjoy Fresh, flavourful meals made with the finest ingredients,</p>
                        <p className='text-gray-400 text-sm md:text-base flex justify-start'>delivered straight to your door, any time.</p>
                    </div>
                    <div className='w-full flex items-center justify-start gap-6 md:gap-10 pt-6 md:pt-8'>
                        <button className='bg-orange-400 p-3 rounded-2xl text-white cursor-pointer hover:bg-orange-600 transition-all'>
                            Order Now
                        </button>
                        <button className='border-black border-2 p-3 rounded-2xl text-black cursor-pointer'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>



            <div className='w-full md:w-[45%] h-auto md:h-[80vh] flex items-center justify-center p-6 md:p-0'>
                <div className='w-full max-w-xs md:w-[30rem] h-auto md:h-[30rem] object-cover'>
                    <img src={img} className='w-full h-full object-cover rounded-lg' alt="Delicious meal" />
                </div>
            </div>
        </div>
    )
}

export default Menu
