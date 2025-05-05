import React from 'react'
import { ImLeaf } from "react-icons/im";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Cards = (prompt) => {
  const dispatch = useDispatch();

  return (
  
    <div id='food' className='md:w-[320px] md:h-[400px] w-[130px] h-[190px] md:p-4 p-2 flex flex-col md:gap-4 gap-1 shadow-2xl shadow-gray-500 rounded-2xl hover:border-2 border-orange-400 transition-all'>
      <div className='w-[100%] h-[55%] overflow-hidden rounded-2xl'>
        <img src={prompt.image} alt="img" className='object-cover' />
      </div>
      <div className=' md:text-[25px] text-[13px] font-semibold'>{prompt.name}</div>
      <div className='flex justify-between md:text-[20px] text-[13px] mt-3'>
        <div>Rs.{prompt.price}</div>
        <div className='flex items-center justify-center md:gap-2 gap-1'>{prompt.type==="veg" ? <ImLeaf/> : <GiChickenOven/>}<span>{prompt.type}</span></div>
      </div>
      <button className='w-full md:h-[45px] h-[30px] md:text-[22px] text-[10px] bg-orange-400 rounded-xl cursor-pointer hover:bg-orange-300' onClick={()=>{dispatch(AddItem({id:prompt.id, name:prompt.name, image:prompt.image, price:prompt.price, qty:1})); toast.success(prompt.name+' Added')}}>Add to Dish</button>
    </div>
    
  )
}

export default Cards

