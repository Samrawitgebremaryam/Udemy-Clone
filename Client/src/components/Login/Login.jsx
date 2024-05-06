import React from 'react';
// Correct the import path for Heroicons v2
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-md p-8 space-y-6 bg-white ">
                <h1 className="text-lg font-bold text-center">Log in to your Udemy account</h1>
                
                <div className="flex flex-col items-center">
                    <UserCircleIcon className="h-16 w-16 text-gray-700" />
                    <p className="mt-2 text-sm text-gray-900">Welcome back, Username </p>
                </div>

                <form className="mt-4 space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            autoComplete="current-password" 
                            required 
                            className="w-full px-3 py-5 border border-black rounded-none shadow-sm placeholder-black text-base font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Password" 
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full px-4 py-3 text-sm font-bold text-white bg-purple-600 rounded-none hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
                    >
                        Log in
                    </button>
                </form>

                <div className="text-center">
                    <a href="#" className="text-sm text-purple-600 hover:underline">Forgot Password</a>
                </div>

                <div className="text-sm text-center text-gray-600 mt-6">
                    <a href="#" className="font-medium text-purple-600 hover:underline">Log in to a different account</a>
                </div>
                <div className="text-sm text-center text-gray-600">
                    Don't have an account? <a href="#" className="font-medium text-purple-600 hover:underline">Sign up</a>
                </div>
                <div className="text-sm text-center text-gray-600">
                    <a href="#" className="font-medium text-purple-600 hover:underline">Log in with your organization</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
