import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../notFound";
import ImageSlider from "../../components/imageSlider";




// home/productOverView.jsx
export default function ProductOverView() {

    const params = useParams();
    const productId = params.id;
    const[product, setProduct] = useState({})
    const [states, setStates] = useState("Loading");

    useEffect(() => {
      console.log(productId);
      axios.get(import.meta.env.VITE_BACKEND_URL + `/api/products/` + productId)
        .then((res) => {
          console.log(res.data);
          
          
          if(res.data == null) {
            setStates("not-found");
          } 
          if(res.data != null) {
            setProduct(res.data);
            setStates("found");
          }
          
        });
    }, []);

    return (
      <div className="w-full h-[calc(100vh-100px)] ">
        {
          states == "Loading"&&(
            <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-gray-900 border-b-black">

              </div>

            </div>
          )
        }
        {
          states == "not-found"&& 
          <NotFound/>
        }
        {
          states == "found"&& 
          <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
            <div className="w-[35%] h-full">
              <ImageSlider images={product.images}></ImageSlider>
              </div>
              <div className="w-[65%] h-full g-4">
                <h1 className="text-2xl font-bold  text-stone-900">{product.productName}</h1>
                <h1 className="text-2xl font-bold  text-stone-900">{product.altNames.join("|")}</h1>
                <p className="text-gray-600 text-lg">{(product.price> product.lastPrice)&&
                <span className="text-gray-600 text-lg line-through">LKR.{product.price}</span>}
                <span>{"LKR."+ product.lastPrice}</span></p>

                
                <p className="text-gray-600 text-lg">{product.description}</p>

              </div>

            </div>
          
        }
      </div>
    );
  }