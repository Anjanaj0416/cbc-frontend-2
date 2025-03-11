import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard";

export default function ProductPage() {
    const[products, setProducts] = useState([]);
    const[LoadingStatus, setLoadingStatus] = useState("Loading");   

    useEffect(() => {
        if(LoadingStatus == "Loading"){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products").then((res) => {
                console.log(res.data);
                setProducts(res.data);
                setLoadingStatus("loaded");
            }).catch((err) => toast.error(err.message))
        }
    }, []);
    
    return (
        <div className="w-full h-full overflow-y-scroll flex flex-wrap justify-center ">
            {
                products.map((product) => (
                    <ProductCard 
                        key={product.productId} 
                        product={product}
                    />
                ))
            }
        </div>
    );
}