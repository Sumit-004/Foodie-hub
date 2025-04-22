import { FaBorderAll } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";
import { MdSoupKitchen } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
 const Category = [
{
    id:1,
    name:"All",
    icon:<FaBorderAll className="w-[60px] h-[60px] text-orange-500"/>,
},
{
    id:2,
    name:"Breakfast",
    icon:<GiCoffeeCup className="w-[60px] h-[60px] text-orange-500"/>,
},
{
    id:3,
    name:"Soups",
    icon:<MdSoupKitchen className="w-[60px] h-[60px] text-orange-500"/>,
},
{
    id:4,
    name:"Pasta",
    icon:<GiNoodles className="w-[60px] h-[60px] text-orange-500"/>,
},
{
    id:5,
    name:"Main Course",
    icon:<MdFoodBank className="w-[60px] h-[60px] text-orange-500"/>,
},
{
    id:6,
    name:"Pizza",
    icon:<FaPizzaSlice className="w-[60px] h-[60px] text-orange-500"/>,
},
{
    id:7,
    name:"Burger",
    icon:<GiHamburger className="w-[60px] h-[60px] text-orange-500"/>,
},

]

export default Category