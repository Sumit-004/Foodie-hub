import React, { useContext } from 'react'
import Header from "./Header";
import Menu from "./Menu";
import Cards from "./Cards";
import Card2 from "./Card2";
import Footer from "./Footer"
import Category from '../Category'
import { RxCross2 } from "react-icons/rx";
import { MdErrorOutline } from "react-icons/md";
import { useState } from 'react'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { IoMail } from "react-icons/io5";
import { MdOutlinePassword } from "react-icons/md";



const Home = () => {

    let { cate, setCate, input, showCart, setShowCart, showSignIn, setShowSignIn, showSignUp, setShowSignUp } = useContext(dataContext)

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

    let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)
    let deliveryFee = 20;
    let taxes = subtotal * 0.5 / 100;
    let total = Math.floor(subtotal + deliveryFee + taxes);

    return (
        <div>
            <Header />
            {/* LogIn */}

            <div className={`fixed md:top-4 top-4 md:right-[100px] right-0 rounded-3xl border-orange-600 border-2 overflow-hidden h-auto md:w-[65vh] w-full pt-8 pb-8 transition-all duration-300  ${showSignIn ? "translate-y-0" : "hidden"}`} id='signin'>
                <button className='fixed p-1 top-0 right-0 text-[30px] rounded-bl-2xl bg-orange-500 cursor-pointer transition-all duration-300' onClick={() => setShowSignIn(false)}><RxCross2 /></button>
                <div className='flex flex-col gap-2'>
                    <label className='text-[30px] flex items-center justify-center'>Log In</label>
                    <form action="" className='flex flex-col gap-4'>
                        <div className='md:text-[20px] text-[16px] flex items-center md:ml-8 ml-4 gap-2'>
                            <span className='flex items-center gap-2'><IoMail />Email :</span>
                            <input type="email" placeholder='Enter Your Email' className='p-1.5 outline-none' />
                        </div>
                        <div className='md:text-[20px] text-[16px] flex items-center md:ml-8 ml-4 gap-2'>
                            <span className='flex items-center gap-2'><MdOutlinePassword />Password :</span>
                            <input type="password" placeholder='Password' className='p-1.5 outline-none' />
                        </div>
                        <div className='flex flex-col gap-2 mt-3'>
                            <a href="#" className='text-blue-800 hover:text-black underline md:ml-8 ml-2'>Forgot password?</a>
                            <div className=' flex justify-center'>
                                <button className='w-[130px] p-1.5 md:text-[22px] text-[14px] bg-orange-500 rounded-xl cursor-pointer hover:bg-orange-400'>Log In</button>
                            </div>
                            <p className='md:ml-8 ml-10'>Don't have an account?<span className='text-blue-800 cursor-pointer hover:text-black underline pl-2' onClick={() => {
                                setShowSignUp(true)
                                setShowSignIn(false)
                            }}>SignUp</span></p>
                        </div>
                    </form>
                </div>
            </div>

            {/*New Register*/}

            <div className={`fixed md:top-4 top-4 md:right-[100px] right-0 rounded-3xl border-orange-600 border-2 overflow-hidden h-auto md:w-[65vh] w-full pt-8 pb-8 transition-all duration-300  ${showSignUp ? "translate-y-0" : "hidden"}`} id='signin'>
                <button className='fixed p-1 top-0 right-0 text-[30px] rounded-bl-2xl bg-orange-500 cursor-pointer transition-all duration-300' onClick={() => setShowSignUp(false)}><RxCross2 /></button>
                <div className='flex flex-col gap-4'>
                    <label className='text-[30px] flex items-center justify-center'>Sign Up</label>
                    <form action="" className='flex flex-col gap-4'>
                        <div className='md:text-[20px] text-[16px] flex items-center ml-8 gap-2'>
                            <span className='flex items-center gap-2'><IoMail />Email :</span>
                            <input type="email" placeholder='Enter Your Email' className='p-1.5 outline-none' />
                        </div>
                        <div className='md:text-[20px] text-[16px] flex items-center ml-8 gap-2'>
                            <span className='flex items-center gap-2'><MdOutlinePassword />Password :</span>
                            <input type="password" placeholder='Password' className='p-1.5 outline-none' />
                        </div>
                        <div className='md:text-[20px] text-[16px] flex items-center ml-8 gap-2'>
                            <span className='flex items-center gap-2'><MdOutlinePassword />Confirm Password :</span>
                            <input type="password" placeholder='Confirm Password' className='p-1.5 outline-none' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex ml-8 gap-1'>
                                <input type="checkbox" name="" id="" /><p>Remember Me</p></div>
                            <div className=' flex justify-center'>
                                <button className='w-[130px] p-1.5 md:text-[22px] text-[14px] text-gray-900 bg-orange-500 rounded-xl cursor-pointer hover:bg-orange-400'>Sign Up</button>
                            </div>
                            <p className='ml-8'>Already have an account?<span className='text-blue-800 cursor-pointer hover:text-black underline pl-2' onClick={() => {
                                setShowSignIn(true)
                                setShowSignUp(false)
                            }}>LogIn</span></p>

                        </div>
                    </form>
                </div>
            </div>

            <Menu />
            {
                !input ?
                    <div id='order' className='w-[100%] flex flex-wrap justify-center items-center md:gap-10 gap-5 pb-5'>
                        {Category.map((item) => {
                            return <div className='flex-col md:h-[120px] md:w-[120px] h-[60px] w-[60px]  md:p-2 p-1  border-2 border-amber-500 shadow-2xl shadow-gray-500 rounded-2xl hover:bg-orange-200 ease-in duration-200 cursor-pointer' onClick={() => choice(item.name)}>
                                <h2 className='flex justify-center items-center text-[10px] md:text-[15px]'>{item.name}</h2>
                                <div className='flex justify-center'>{item.icon}</div>
                            </div>
                        })}
                    </div> : null
            }

            <div className='flex flex-wrap gap-8 md:p-9 p-2 items-center justify-center'>
                {cate.length > 1 ? cate.map((item) => (
                    <Cards name={item.food_name} image={item.food_image} type={item.food_type} price={item.price} id={item.id} />
                )) :
                    <div className='h-[30vh] w-full flex items-center justify-center text-2xl'>
                        No Dish Found
                    </div>
                }

            </div>
            <div className={`md:w-[40vw] p-5 w-full h-full bg-white fixed right-0 top-0 shadow-2xl transition-all duration-300 overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>
                <header className='w-[100%] text-orange-700 text-[25px] flex justify-between p-6'>
                    <span>Your Items</span>
                    <RxCross2 className='text-[28px] font-bold cursor-pointer hover:text-gray-700' onClick={() => setShowCart(false)} />
                </header>
                {items.length > 0 ? <>
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
                    <button className='w-full md:h-[45px] h-[30px] md:text-[22px] text-[14px] bg-orange-400 rounded-xl cursor-pointer hover:bg-orange-300' onClick={() => {
                        toast.success('Order Placed', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",

                        });
                    }}>Order Now</button>
                </> :
                    <div className='h-[400px] w-full flex flex-col items-center justify-center'>
                        <MdErrorOutline className='text-4xl' />
                        <p className='text-2xl'>Empty Cart</p>
                    </div>
                }

            </div>

            <Footer />

        </div >
    )
}

export default Home
