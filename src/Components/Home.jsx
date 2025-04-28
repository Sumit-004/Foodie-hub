import React, { useContext } from 'react'
import Header from "./Header";
import Menu from "./Menu";
import Cards from "./Cards";
import Card2 from "./Card2";
import Footer from "./Footer"
import Category from '../Category'
import { RxCross2 } from "react-icons/rx";


import { useState } from 'react'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext';
import { useSelector } from 'react-redux';

const Home = () => {

    let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)

    function choice(category) {
        if (category === "All") {
            setCate(food_items)
        }
        else {
            let newList = food_items.filter((item) => (item.food_category === category))
            setCate(newList)
        }
    }


    let items = useSelector(state => state.cart);

    let subtotal = items.reduce((total, item) => total + item.price, 0)
    let deliveryFee = 20;
    let taxes = subtotal * 0.5 / 100;
    let total = Math.floor(subtotal + deliveryFee + taxes);

    return (
        <div>
            <Header />
            <Menu />
            {!input ?
                <div id='order' className='w-[100%] flex flex-wrap justify-center items-center md:gap-10 gap-5 pb-5'>
                    {Category.map((item) => {
                        return <div className='flex-col md:h-[120px] md:w-[120px] h-[60px] w-[60px]  md:p-2 p-1  border-2 border-amber-500 shadow-2xl shadow-gray-500 rounded-2xl hover:bg-orange-200 ease-in duration-200 cursor-pointer' onClick={() => choice(item.name)}>
                            <h2 className='flex justify-center items-center text-[10px] md:text-[15px]'>{item.name}</h2>
                            <div className='flex justify-center'>{item.icon}</div>
                        </div>
                    })}
                </div> : null}

            <div className='flex flex-wrap gap-8 md:p-9 p-2 items-center justify-center'>
                {cate.map((item) => (
                    <Cards name={item.food_name} image={item.food_image} type={item.food_type} price={item.price} id={item.id} />
                ))}
            </div>
            <div className={`md:w-[40vw] p-5 w-full h-full bg-white fixed right-0 top-0 shadow-2xl transition-all duration-300 overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>
                <header className='w-[100%] text-orange-700 text-[25px] flex justify-between p-6'>
                    <span>Your Items</span>
                    <RxCross2 className='text-[28px] font-bold cursor-pointer hover:text-gray-700' onClick={() => setShowCart(false)} />
                </header>
                <div className='w-full flex flex-col gap-4'>
                    {items.map((item) => (
                        <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
                    ))}
                </div>
                <div className='w-full text-[16px] text-orange-900 mt-6 border-t-2 border-b-2 border-gray-400 p-2'>
                    <div className='flex justify-between p-2'>
                        <span>
                            Subtotal
                        </span>
                        <span>
                            Rs {subtotal}-/
                        </span>
                    </div>
                    <div className='flex justify-between p-2'>
                        <span>
                            Delivery Charge
                        </span>
                        <span>
                            Rs {deliveryFee}-/
                        </span>
                    </div>
                    <div className='flex justify-between p-2'>
                        <span>
                            Taxes
                        </span>
                        <span>
                            Rs {taxes}-/
                        </span>
                    </div>
                </div>
                <div>
                <div className='flex justify-between p-4 text-[18px]'>
                        <span>
                            Total
                        </span>
                        <span>
                            Rs {total}-/
                        </span>
                    </div>
                </div>
                <button className='w-full md:h-[45px] h-[30px] md:text-[22px] text-[10px] bg-orange-400 rounded-xl cursor-pointer hover:bg-orange-300'>Order Now</button>
            </div>

            <Footer />

        </div>
    )
}

export default Home
