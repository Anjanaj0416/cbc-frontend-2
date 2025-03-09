import { Link, Route, Routes } from "react-router-dom";
import { MdDashboard, MdOutlineProductionQuantityLimits, MdShoppingCart, MdPeople } from "react-icons/md";
import AdminProductPage from "./admin/adminProductPage";
import AddProductForm from "./admin/addProductForm";
import EditProductForm from "./admin/editProductFrom";




export default function AdminHomePage() {
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      
      <div className="bg-blue-700 w-1/5 h-screen flex flex-col items-start p-6 space-y-6 text-white">
        <Link to="/admin/dashboard" className="flex items-center space-x-2 hover:text-gray-300">
          <MdDashboard size={24} />
          <span>Dashboard</span>
        </Link>

        <Link to="/admin/products" className="flex items-center space-x-2 hover:text-gray-300">
          <MdOutlineProductionQuantityLimits size={24} />
          <span>Products</span>
        </Link>

        <Link to="/admin/orders" className="flex items-center space-x-2 hover:text-gray-300">
          <MdShoppingCart size={24} />
          <span>Orders</span>
        </Link>

        <Link to="/admin/customers" className="flex items-center space-x-2 hover:text-gray-300">
          <MdPeople size={24} />
          <span>Customers</span>
        </Link>
      </div>


      
      <div className=" w-4/5 h-screen ">
        <Routes>
           <Route path= "/dashboard" element= {<h1>Dashboard</h1>}/>
           <Route path= "/products" element= {<AdminProductPage/>}/>
           <Route path= "/products/addProduct" element= {<AddProductForm/>}/>
           <Route path="/products/editProduct" element={<EditProductForm/>} />

           <Route path= "/orders" element= {<h1>Orders</h1>}/>
           <Route path= "/customers" element= {<h1>Customers</h1>}/> 
        </Routes>
      
      
      </div>
    </div>
  );
}
