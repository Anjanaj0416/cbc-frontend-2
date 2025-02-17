import { useState } from "react"
import "./testing.css"

export default function Testing(){
    const [count,setCount] = useState(0)
    const[name,setname]= useState("student")

    function increment(){
        console.log("incrementing")
        setCount(count+1)
    }
    function descrement(){
        console.log("descrementing")
        setCount(count - 1)

    }

    function changeName(value){
        setname(value)
    }
    return(
        <div className = "background">
            <h1>{name}</h1>
            <button className= "val" onClick={descrement}>-</button>
            <span>{count}</span>
            <button className= "val" onClick={increment}>+</button>

            <div className= "button-panel">

                <button onClick={()=>changeName("students")} >Students</button>
                <button onClick={()=>changeName("teachers")}>Teachers</button>
                <button onClick={()=>changeName("Admins")}>Admins</button>
            </div>
        </div>
    )
}