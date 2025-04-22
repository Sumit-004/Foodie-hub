import React from 'react'
import { ImLeaf } from "react-icons/im";
import { GiChickenOven } from "react-icons/gi";

const Cards = (prompt) => {
  return (
  
    <div className='w-[320px] h-[400px] p-4 flex flex-col gap-4 shadow-2xl shadow-gray-500 rounded-2xl hover:border-4 border-orange-300 transition-all'>
      <div className='w-[100%] h-[55%] overflow-hidden rounded-2xl'>
        <img src={prompt.image} alt="img" className='object-cover' />
      </div>
      <div className=' text-[25px] font-semibold'>{prompt.name}</div>
      <div className='flex justify-between text-[20px] mt-3'>
        <div>Rs.{prompt.price}</div>
        <div className='flex items-center justify-center gap-2'>{prompt.type==="veg" ? <ImLeaf/> : <GiChickenOven/>}<span>{prompt.type}</span></div>
      </div>
      <button className='w-full h-[45px] text-[22px] bg-orange-400 rounded-xl cursor-pointer hover:bg-orange-300'>Add to Dish</button>
    </div>
    
  )
}

export default Cards

