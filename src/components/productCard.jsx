import { Link } from "react-router-dom"

export default function ProductCard(props){
    console.log(props)
    return(
        <Link to={`/productInfo/${props.product.productId}`}>
            <div className="w-[300px] h-[400px] m-[30px] bg-blue-400 rounded-lx shadow-lg shadow-gray-500 hover:shadow-black hover:boder-[10px]">
                <img src = {props.product.images[0]} className="w-full h-[70%]object-cover overflow-hidden"></img>
                <div className="h-[30%] max-h-[30%] p-4 flex flex-col justify-between">
                <h1 className="text-center text-2xl">{props.product.productName}</h1>
                <h2 className="text-center text-lg text-gray-500">{props.product.productId}</h2>
                <p className="text-left text-lg">LKR.{props.product.lastPrice.toFixed(2)}</p>
                {
                    (props.product.lastPrice< props.product.price) &&
                    <p className="text-left text-lg text-gray-600 line-through">LKR.{props.product.price.toFixed(2)}</p>

                }
                
                </div>
            </div>
            
        </Link>
    )
}



//<ProductCard name="Laptop" src= "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"price=" $22.22"></ProductCard>
//<ProductCard name = "iphone" src="https://images.pexels.com/photos/1300345/pexels-photo-1300345.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" price = "$43.23">  </ProductCard>