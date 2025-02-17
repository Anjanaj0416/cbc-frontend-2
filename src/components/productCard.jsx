export default function ProductCard(props){
    console.log(props)
    return(
        <div>
            <h1>{props.name}</h1>
            <img src= {props.src}></img>
            <h2>Price :{props.price}</h2>
            <button>Add to cart</button>
        </div>
    )
}

//<ProductCard name="Laptop" src= "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"price=" $22.22"></ProductCard>
//<ProductCard name = "iphone" src="https://images.pexels.com/photos/1300345/pexels-photo-1300345.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" price = "$43.23">  </ProductCard>