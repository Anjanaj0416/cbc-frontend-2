import { useEffect, useState } from "react";
import { loadCart } from "../../utils/cartFunction";
import CartCard from "../../components/cartCard";
import axios from "axios";

export default function Cart(){
    const [cart, setCart] = useState([]);
    const[total, setTotal] = useState(0);
    const[labelTotal, setLabelTotal]= useState(0)

    useEffect(() => {
        setCart(loadCart());
        console.log(loadCart());
        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/orders/quote",{
            orderedItems : loadCart()

        }).then
        ((res) =>{
            setTotal(res.data.total)
            console.log(res.data)
            if(res.data.total != null){
                setTotal(res.data.total);
                setLabelTotal(res.data.total);}

        }

    ).catch((err) => console.log(err));

    }, []);

    function onOrderCheckOutClick(){
        const token = localStorage.getItem("token");
        if(token == null){
            return;
        }
        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/orders",{
            orderedItems : cart,
            name : "anjana",
            address: "colombo",
            phone : "0771234567"

        },{
            headers : {
                Authorization : "Bearer " + token,
              },
        }).then
        ((res) =>{  
            console.log(res.data)
            
        })

    }

    return(
        <div className="w-full h-full overflow-y-scroll flex flex-col items-end ">
            <table className="w-full  boder-collapse" >
                <thead>
                    <tr className="bg-gray-200 " > 
                        <th className="p-2 text-left">Product</th>
                        <th className="p-2 text-left">Name</th>        
                        <th className="p-2 text-left">Product Id</th>
                        <th className="p-2 text-left">Quantity</th>
                        <th className="p-2 text-left">Price</th>
                        <th className="p-2 text-left">Total Price</th>

                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return(
                        <CartCard 
                        key={item.productId} 
                        productId={item.productId} 
                        qty={item.qty}
                         />)
                    })}
                </tbody>
            </table>
            <div>
            <h1 className="text-2xl font-bold text-black ">Total: {labelTotal.toFixed(2)}</h1>
            <h1 className="text-2xl font-bold text-black ">Discount: LKR.{(labelTotal-total).toFixed(2)}</h1>
            <h1 className="text-2xl font-bold text-black ">Grand Total: LKR.{total.toFixed(2)}</h1>
            </div>

            <div>
            <button onClick ={onOrderCheckOutClick} className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 m-2 p-2  rounded-lg w-[200px]">Checkout</button>
            </div>
        </div>

        

    )
}

