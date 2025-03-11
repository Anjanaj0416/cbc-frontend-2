import {  useEffect, useState } from "react";
import { deleteItem } from "../utils/cartFunction";
import axios from "axios";

export default function CartCard(props) {
    const productId = props.productId;
    const qty = props.qty;

    const[product, setProduct] = useState(null)
    const[loaded, setLoaded] = useState(false)

    useEffect(() => {
        if(!loaded){
            axios.get(import.meta.env.VITE_BACKEND_URL + `/api/products/` + productId).then((res) => {
                    if(res.data != null){
                        setProduct(res.data);
                        console.log(res.data);
                        setLoaded(true);
                    }else{
                        deleteItem(productId);
                    }

        }).catch((err) => {
            console.log(err);
        });
    }
    }, []);


    return (
        <tr className="hover:bg-gray-700 hover:text-white">
            <td className="text-center">
                <img src={product?.images[0]} className="w-[100px] h-[100px] object-cover mx-auto"></img>
            </td>
            <td className="text-center">{product?.productName}</td>
            <td className="text-center">{product?.productId}</td>    
            <td className="text-center">{qty}</td>
            <td className="text-center">LKR. {product?.lastPrice.toFixed(2)}</td>
            <td className="text-center">LKR. {(product?.lastPrice * qty).toFixed(2)}</td>                  
        </tr>
    )   

}