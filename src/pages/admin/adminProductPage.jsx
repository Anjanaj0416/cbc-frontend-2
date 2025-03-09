import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaPencilAlt, FaPlus } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);
  

  useEffect(() => {
    if (!productsLoaded) {
      axios.get(import.meta.env.VITE_BACKEND_URL+ "/api/products").then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setProductsLoaded(true);
      });
      
    }
  }, [productsLoaded]);

  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
        <Link to = "/admin/products/addProduct"className= "absolute right-[25px] bottom-[25px] text-[25px] border-[#3b82fb] text-blue-600 border-[2px] p-5 rounded-xl hover:rounded-full"><FaPlus/></Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Product Page</h1>
      <h1>{
        productsLoaded ?
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-5 text-left">Product ID</th>
              <th className="py-3 px-5 text-left">Product Name</th>
              <th className="py-3 px-5 text-left">Price</th>
              <th className="py-3 px-5 text-left">Last Price</th>
              <th className="py-3 px-5 text-left">Description</th>
              <th className="py-3 px-5 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-3 px-5">{product.productId}</td>
                <td className="py-3 px-5 font-medium text-gray-700">{product.productName}</td>
                <td className="py-3 px-5 text-green-600 font-semibold">${product.price}</td>
                <td className="py-3 px-5 text-red-500 line-through">${product.lastPrice}</td>
                <td className="py-3 px-5 text-gray-600">{product.description}</td>
                <td className="py-3 px-5 flex justify-center gap-4">
                  <button className="text-red-600 hover:text-red-800 transition" title="Delete"
                  onClick ={()=>{
                    alert(product.productId)
                    const token = localStorage.getItem("token")
                    
                    axios.delete(`http://localhost:5000/api/products/${product.productId}`,{
                      headers : {
                        Authorization : "Bearer " + token,
                      },
                    }).then((res)=>{
                      console.log(res.data)
                      toast.success("product deleted suceesfully")
                      setProductsLoaded()
                    });
                  }}
                  >
                    <FaTrash size={18} />
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 transition" 
                  title="Edit"
                  onClick={()=>{
                    navigate("/admin/products/editProduct", {state :{ product: product}})  ;
                  }}
                  >
                    <FaPencilAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>:
        <div className="w-full h-full flex justify-center items-center>"><div className="w-[60px] h-[60px] border-[4px] border-grey-200 border-b-[#3b82fb] animate-spin rounded-full"></div></div>
      }
      </h1>
      
      </div>
  );
}



/*{
    products.map(
        (product,index)=>{
            return(
                <div key={index}>
                    {index}
                    {product.productName}
                </div> 
            )

        }
    )
}*/