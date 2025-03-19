import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NavSlider(props){
    const closeSlider = props.closeSlider
    return(
        <div className=" fixed w-full h-screen bg-[#00000080] z-[10] border-[3px] border-red-800">
            <div className=" bg-white w-[300px] h-screen flex flex-col justify-center items-center">
            <div className="bg-white w-full h-[100px] relative flex justify-center items-center">
                <img src="/logo1.jpg"className="h-full rounded-full cursor-pointer absolute left-[20px] "></img>
                <IoMdClose onClick={closeSlider} className="absolute top-[10px] right-[10px] text-3xl cursor-pointer lg:hidden" ></IoMdClose>  
            </div>
             
                <Link to="/" className=" font-bold text-xl   hover:border-b border-b-black ">Home</Link>
                <Link to="/products" className=" font-bold text-xl   hover:border-b border-b-black">Products</Link>
                <Link to="/about" className=" font-bold text-xl  hover:border-b border-b-black">About Us</Link>
                <Link to="/cart" className=" font-bold text-xl  hover:border-b border-b-black">Cart</Link>


            </div>
            
        </div>

    )
    
}