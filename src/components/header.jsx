import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="bg-account w-full h-[100px] relative flex justify-center items-center">
            <img src="/logo1.jpg"className="h-full rounded-full cursor-pointer absolute left-[20px] "></img>

            <div className=" h-full flex items-center w-[500px] justify-between  ">
                <Link to="/" className=" font-bold text-xl   hover:border-b border-b-black ">Home</Link>
                <Link to="/products" className=" font-bold text-xl   hover:border-b border-b-black">Products</Link>
                <Link to="/about" className=" font-bold text-xl  hover:border-b border-b-black">About Us</Link>


            
            </div>
        </header>
    )
}