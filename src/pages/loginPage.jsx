export default function LoginPage() {
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
  }