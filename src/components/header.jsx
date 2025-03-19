import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import NavSlider from "./navSlider";

export default function Header(){
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    return(
        <>
        {isSliderOpen && <NavSlider closeSlider = {() => setIsSliderOpen(false)}/>}
        <header  className="bg-account w-full h-[100px] relative flex justify-center items-center">
            <img src="/logo1.jpg"className="h-full rounded-full cursor-pointer absolute left-[20px] "></img>
            <RxHamburgerMenu onClick={() => setIsSliderOpen(!isSliderOpen)} className="absolute right-[20px] text-3xl cursor-pointer lg:hidden"></RxHamburgerMenu>

            <div className=" h-full lg:flex items-center w-[500px] justify-between hidden">
                <Link to="/" className=" font-bold text-xl   hover:border-b border-b-black ">Home</Link>
                <Link to="/products" className=" font-bold text-xl   hover:border-b border-b-black">Products</Link>
                <Link to="/about" className=" font-bold text-xl  hover:border-b border-b-black">About Us</Link>
                <Link to="/cart" className=" font-bold text-xl  hover:border-b border-b-black">Cart</Link>



            
            </div>
        </header>
        </>
    )
}

//344020329981-f4enoi5mg1vof6hnt2hd4krhceg5tc0a.apps.googleusercontent.com