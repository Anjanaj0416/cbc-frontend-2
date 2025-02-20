/*export default function LoginPage() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Login</h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <input type="text" placeholder="Username" className="w-full p-2 border rounded mb-4" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" />
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
        </div>
      </div>
    );
  }*/

    //john1.doe@example.com //john123
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast";



export default function LoginPage(){

  const[email,setEmail] = useState("Your email");
  const[password, setPassword]= useState ("");

  function login(){
    axios.post("http://localhost:5000/api/users/login",{
      email : email,
      password : password
    }).then((res)=>{ 
      console.log(res)

      if(res.data.user == null){
        toast.error(res.data.message)
        return
      }
      toast.success("login Success");

      localStorage.setItem("token",res.data.token);
      
      setTimeout(() => {
        if(res.data.user.type == "admin"){
          window.location.href = "/admin";
      
        }else{
          window.location.href = "/";
        }   
      }, 3000);
      
    })
  }

  return(
    <div className = 'w-full h-screen bg-red-900 flex items-center justify-center'>
      <div className = 'w-[450px] h-[450px] bg-blue-500 flex flex-col items-center justify-center '>
        <img src='/logo.jpg' className = 'rounded-full w-[100px]'/>
        <span>Email</span>
        <input value={email} onChange={
          (e)=>{
            setEmail(e.target.value)
          }
        }/>
        <span>Password</span>
        <input type='password' value={password} onChange={
          (e)=>{
            setPassword(e.target.value)
          }
        }/>
        <button onClick={login} className='bg-slate-400'>login</button>
      </div>
    </div>
  )
}