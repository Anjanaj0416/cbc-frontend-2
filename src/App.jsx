import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminHomePage from './pages/adminHomePage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginPage.jsx'
import HomePage from './pages/homePage.jsx'
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import FileUploadTest from './pages/test.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
    <Toaster position="top-center"/>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminHomePage />} />
        <Route path = "/test" element={<FileUploadTest />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}


export default App