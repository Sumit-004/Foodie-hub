import React, { useContext, useEffect } from 'react'
import img from '../assets/mainimg.jpg'
import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingBasketFill } from "react-icons/ri";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';


const Menu = () => {

    let { input, setInput, cate, setCate,showCart,setShowCart } = useContext(dataContext)
    useEffect(()=>{
        let newList=food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
        setCate(newList)
    },[input])

    let items=useSelector(state=>state.cart)

    return (
        <>        <div className='w-full h-auto md:h-[80vh] flex flex-col md:flex-row'>
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
                           <a href="#order"> Order Now</a>
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
            <form className='w-full flex flex-row md:flex-row gap-4 items-center justify-evenly m-4 md:pb-14 pr-6 pb-6 text-[20px] md:text-[25px] h-auto md:h-[30px]' onSubmit={(e) => e.preventDefault()}>
                <div className='w-full md:w-[60%] flex gap-4 items-center justify-center m-0 md:m-8 p-2'>
                    <IoSearchSharp />
                    <input type="text" placeholder='Search Items...' className='outline-none w-full' onChange={(e) => setInput(e.target.value)} value={input} />
                </div>
                <div className='relative text-[25px] md:text-[30px] border-4 border-amber-600 h-[50px] md:h-[60px] w-[60px] md:w-[60px] flex items-center justify-center rounded-[20%] font-semibold cursor-pointer hover:bg-gray-200' onClick={()=>{
                    setShowCart(true)
                }}>
                    <span className='absolute text-[16px] md:text-[15px] md:top-0 right-0 top-0 md:right-1 text-orange-800'>{items.length}</span>
                    <RiShoppingBasketFill className='text-orange-500'/>
                </div>
            </form>

        </>

    )
}

export default Menu
