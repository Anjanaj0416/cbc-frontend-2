import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../mediaUpload";

export default function AddProductForm() {


    const [productId, setProductId]= useState("");
    const [productName, setProductName]= useState("");
    const [alternativeName, setAlternativeName]= useState("");
    const [imageUrls, setImageUrls]= useState("");
    const [imageFiles, setImageFiles]= useState([]);
    const [price, setPrice]= useState("");
    const [lastPrice, setLastPrice]= useState("");
    const [description, setDescription]= useState("");
    const navigate = useNavigate();

    async function handleSubmit(){
        const alterName = alternativeName.split(",")

        const  promisesArray = []

        for (let i = 0; i < imageFiles.length; i++) {
            promisesArray[i]= uploadMediaToSupabase(imageFiles[i])
        }

        const imgUrls = await Promise.all(promisesArray)

        console.log(imgUrls)

        const product = {
            productId : productId,
            productName : productName,
            altNames: alterName,
            images : imgUrls,
            price: price,
            lastPrice : lastPrice,
            description : description
        }
        const token = localStorage.getItem("token")

        try{
            await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/products",product ,{
                headers : {
                    "Authorization" : `Bearer ${token}` 
                }
            });
            
            
            toast.success("Product added successfully")
            navigate("/admin/products")
        }catch(err){
            toast.error("failed to add product")
        }
    
    }

    

    return (
        <div className="w-full  h-full flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-[25px] font-bold text-center text-gray-800 mb-6">
                    Add Product Form
                </h1>
                <div className="flex flex-col w-full items-center space-y-4">
                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 font-medium">Product ID</label>
                        <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                        value = {productId} onChange={(e)=>{setProductId(e.target.value)}}/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 font-medium">Product Name</label>
                        <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                        value = {productName} onChange={(e)=>{setProductName(e.target.value)}}/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 font-medium">Alternative names</label>
                        <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                        value = {alternativeName} onChange={(e)=>{setAlternativeName(e.target.value)}}/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 font-medium">Image URLs</label>
                        <input type="file" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                        onChange={(e)=>{
                            setImageFiles(e.target.files);}}
                        multiple/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 font-medium">Price</label>
                        <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                        value = {price} onChange={(e)=>{setPrice(e.target.value)}}/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 font-medium">Last Price</label>
                        <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                        value = {lastPrice} onChange={(e)=>{setLastPrice(e.target.value)}}/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 font-medium">Description</label>
                        <textarea className="border border-gray-300 rounded-md px-3 py-2 h-24 focus:ring-2 focus:ring-red-400 focus:outline-none resize-none"
                        value = {description} onChange={(e)=>{setDescription(e.target.value)}}/>
                    </div>
                
                    <button className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition duration-200" onClick={handleSubmit}>
                        Add Product
                        
                    </button>
                </div>    
            </div>
        </div>
    );
}




//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4eHZld292YWtzeHZtdGxpeW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2MzgyNjgsImV4cCI6MjA1NjIxNDI2OH0.JxZKq-H7XZ5asob-Bl2zIKBDbwpNh-Tdq7IlNb_oO3E