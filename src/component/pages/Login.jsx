import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email/username
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Login
        </button>
        <div className="flex items-center justify-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200 flex items-center justify-center">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google logo"
            className="mr-2"
          />
          Login with Google
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Do you have an account?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            SignUp
          </span>
        </p>
        <p className="mt-2 text-sm text-blue-500 cursor-pointer hover:underline">
          Forget username/password?
        </p>
      </div>
    </div>
  );
};

export default Login;
