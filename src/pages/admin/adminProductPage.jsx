import axios, { Axios } from "axios"
import { useEffect, useState } from "react"
export default function AdminProductPage(){

    const [products, setProducts]= useState([
        {
            "_id": "67ab580481f9dddc681f201f",
            "productId": "BP001",
            "productName": "Hydrating Face Serum",
            "altNames": [
                "Moisture Boost Serum",
                "Glow Essence"
            ],
            "images": [
                "https://example.com/images/hydrating-serum-1.jpg",
                "https://example.com/images/hydrating-serum-2.jpg"
            ],
            "price": 29.99,
            "lastPrice": 35.99,
            "description": "A lightweight, fast-absorbing serum that hydrates and plumps the skin with hyaluronic acid and vitamin C.",
            "__v": 0
        },
        {
            "_id": "67adbd38bde4f7e2ebd23ae1",
            "productId": "BP002",
            "productName": "Matte Liquid Lipstick",
            "altNames": [
                "Velvet Lip Paint",
                "Long-Wear Lip Color"
            ],
            "images": [
                "https://example.com/images/matte-lipstick-1.jpg",
                "https://example.com/images/matte-lipstick-2.jpg"
            ],
            "price": 14.99,
            "lastPrice": 18.99,
            "description": "A richly pigmented, long-wear liquid lipstick with a smooth matte finish that stays comfortable all day.",
            "__v": 0
        },
        {
            "_id": "67adbd5fbde4f7e2ebd23ae3",
            "productId": "BP003",
            "productName": "Revitalizing Night Cream",
            "altNames": [
                "Overnight Repair Cream",
                "Deep Hydration Cream"
            ],
            "images": [
                "https://example.com/images/night-cream-1.jpg",
                "https://example.com/images/night-cream-2.jpg"
            ],
            "price": 39.99,
            "lastPrice": 45.99,
            "description": "An intensive overnight cream that nourishes and restores skin elasticity while you sleep, enriched with peptides and collagen.",
            "__v": 0
        },
        {
            "_id": "67adbe17bde4f7e2ebd23ae5",
            "productId": "BP004",
            "productName": "Brightening Vitamin C Serum",
            "altNames": [
                "Glow Boost Serum",
                "Radiance Serum"
            ],
            "images": [
                "https://example.com/images/vitamin-c-serum-1.jpg",
                "https://example.com/images/vitamin-c-serum-2.jpg"
            ],
            "price": 29.99,
            "lastPrice": 34.99,
            "description": "A powerful antioxidant serum with Vitamin C that brightens skin, evens tone, and reduces signs of aging.",
            "__v": 0
        }
    ])

    useEffect(
        ()=>{
            axios.get("http://localhost:5000/api/products").then
            ((res)=>{
                console.log(res.data)
                setProducts(res.data)
            })
        },[]
    )



    return(
        <div>
            <h1>Admin Product Page</h1>
            <table>
                <thead>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Last Price</th>
                    <th>Description</th>
                </thead>
                <tbody>
                    {products.map((product, index)=>{
                        return<tr key= {index}>
                        <td>{product.productId}</td>
                        <td>{product.productName}</td>
                        <td>{product.price}</td>
                        <td>{product.lastPrice}</td>
                        <td>{product.description}</td>
                      
                        </tr>
                    })}
                </tbody>
            </table>
            
        </div>
    )
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