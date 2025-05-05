import React from 'react'
// import image from '../assets/image1.avif'
import { ImBin2 } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { DecreamentQty, IncreamentQty, RemoveItem } from '../redux/cartSlice';


const Card2 = ({name,id,price,image,qty}) => {
    let dispatch=useDispatch();
    return (
        <div className='w-[100%] md:h-[140px] h-[140px] p-2 rounded-2xl shadow-2xl flex justify-between'>
            <div className='md:w-[65%] w-[75%] h-full flex'>
                <div className='w-[55%] md:h-full h-full overflow-hidden rounded-xl'>
                    <img src={image} alt="" className='object-cover' />
                </div>
                <div className='w-[45%] flex flex-col gap-3 pl-4 pt-4'>
                    <span className='text-orange-700 md:text-[18px] text-[14px] font-semibold'>{name}</span>
                    <div className='border-2 border-orange-600 flex md:w-[120px] w-[95px] rounded-xl text-orange-500'>
                        <button className='w-[30%] md:h-[40px] h-[30px] text-2xl rounded-l-xl border-orange-600 border-r-2 hover:bg-gray-300 transition-all cursor-pointer' onClick={()=>{qty>1?dispatch(DecreamentQty(id)):1}}>-</button>
                        <span className='w-[40%] md:h-[40px] h-[30px] text-xl flex items-center justify-center'>{qty}</span>
                        <button className='w-[30%] md:h-[40px] h-[30px] text-2xl rounded-r-xl border-orange-600 border-l-2 hover:bg-gray-300 transition-all cursor-pointer' onClick={()=>{dispatch(IncreamentQty(id))}}>+</button>
                    </div>
                </div>
            </div>
            <div className='md:text-[20px] text-[14px] md:pr-4 p-2 md:w-[35%] w-[45px] h-full flex flex-col justify-center items-end md:gap-4 gap-4'>
                <div className='text-[12px] md:text-[16px]'>
                    <span>Rs. {price}/-</span>
                </div>
                <ImBin2 className='text-red-600 cursor-pointer text-[18px] md:text-[19px]' onClick={()=>dispatch(RemoveItem(id))}/>
            </div>
        </div>
    )
}

export default Card2
