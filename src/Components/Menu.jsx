import React from 'react'
import img from '../assets/mainimg.jpg'

const Menu = () => {
    return (
        <div className='w-full h-[80vh] flex'>
            <div className='flex items-center justify-center w-[55%] h-[100%]'>
                <div className='w-[55%] flex flex-col gap-6'>
                    <div className='flex justify-center'>
                        <p className='text-gray-400'>--FRESH & DELICIOUS</p>
                    </div>
                    <div className='justify-center text-4xl'>
                        <p className=' flex justify-center'>Delicious Meals</p>
                        <p className=' flex justify-center'><span className='text-orange-600 font-bold'>Delivered</span> To Your Home</p>
                    </div>
                    <div className=''>
                        <p className='text-gray-400 flex justify-center'>Enjoy Fresh,flavourful meals made with the finest ingredients,</p>
                        <p className='text-gray-400 flex justify-center'>delivered straight to your door, any time.</p>
                    </div>
                    <div className='w-[100%] flex items-center justify-center gap-10 mt-6 '>
                        <button className='bg-orange-400 p-3 rounded-2xl text-white cursor-pointer hover:bg-orange-600 transition-all'>
                            Order Now
                        </button>
                        <button className='border-black border-2 p-3 rounded-2xl text-black cursor-pointer'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>



            <div className='w-[45%] h-[80vh] flex items-center'>
                <div className='w-[30rem] h-[30rem] object-cover'>
                    <img src={img} />
                </div>
            </div>
        </div>
    )
}

export default Menu
