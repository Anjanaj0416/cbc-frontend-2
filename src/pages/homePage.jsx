// HomePage.jsx
import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import LoginPage from './loginPage';
import ProductOverView from './Home/productOverview';
import ProductPage from './Home/product';
import Cart from './Home/cart';



export default function HomePage() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className='w-full h-[calc(100vh-100px)]'>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/productInfo/:id" element={<ProductOverView/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </div>
  );
}