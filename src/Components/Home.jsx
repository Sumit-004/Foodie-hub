import React from 'react'
import Header from "./Header";
import Menu from "./Menu";
import Cards from "./Cards";
import Footer from "./Footer"
import Category from '../Category'

import { useState } from 'react'
import { food_items } from '../food'

const Home = () => {

    let [cate, setCate] = useState(food_items)

    function choice(category) {
        if (category === "All") {
            setCate(food_items)
        }
        else {
            let newList = food_items.filter((item) => (item.food_category === category))
            setCate(newList)
        }
    }

    return (
        <div>
            <Header />
            <Menu />
            <div className='w-[100%] flex flex-wrap justify-center items-center gap-10'>
                {Category.map((item) => {
                    return <div className='flex-col h-[120px] w-[120px] p-2  border-2 border-amber-500 shadow-2xl shadow-gray-500 rounded-2xl hover:bg-orange-300 cursor-pointer transition-all' onClick={() => choice(item.name)}>
                        <h2 className='flex justify-center'>{item.name}</h2>
                        <div className='flex justify-center'>{item.icon}</div>
                    </div>
                })}
            </div>
            <div className='flex flex-wrap gap-8 p-9 items-center justify-center'>
                {cate.map((item) => (
                    <Cards name={item.food_name} image={item.food_image} type={item.food_type} price={item.price} id={item.id} />
                ))}
            </div>
            <Footer />

        </div>
    )
}

export default Home
