import { Link } from "react-router-dom";

export default function HomePage() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to MyWebsite</h1>
        <p className="mt-4 text-lg text-gray-700">Your one-stop solution for amazing web experiences.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700">
          Get Started
        </button>
        <Link to="/login">Login</Link>
      </div>
    );
  }