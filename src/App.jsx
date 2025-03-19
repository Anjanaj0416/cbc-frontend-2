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
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
    <Toaster position="top-center"/>
    <GoogleOAuthProvider clientId='344020329981-f4enoi5mg1vof6hnt2hd4krhceg5tc0a.apps.googleusercontent.com'>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminHomePage />} />
        <Route path = "/test" element={<FileUploadTest />} />
      
        
        
      </Routes>
      </GoogleOAuthProvider>;
    </BrowserRouter>
  );
}


export default App