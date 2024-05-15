import React from 'react';
import { ShoppingCartIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";
const Header = () => {
    return (
<header className="bg-white  py-4 border border-gray-300 rounded-none shadow-md">
            <div className="max-w-8xl mx-auto px-4 flex items-center justify-between" style={{ maxWidth: '120%' }}>
                <div className="flex items-center space-x-4">
                    <img src="/path-to-your-logo.png" alt="Udemy Logo" className="h-8 w-auto" />
                    <span className="text-black-600 hover:text-purple-800 font-normal">Categories</span>
                </div>
                <div className="flex-grow flex justify-center">
                    <div className="w-full md:w-4/5 lg:w-5/6">
                        <div className="relative text-black-600">
                            <input 
                                type="text" 
                                placeholder="Search for anything" 
                                className="pl-5 pr-10 py-3 w-full bg-white-100 border border-black rounded-full text-sm focus:outline-none focus:border-black-300 focus:bg-white"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex space-x-4">
                        <button className="text-black-600 hover:text-purple-800 font-normal">
                            Udemy Business
                        </button>
                        <button className="text-black-600 hover:text-purple-800 font-normal">
                            Teach on Udemy
                        </button>
                    </div>
                    <ShoppingCartIcon className="h-6 w-6 text-black-600 hover:text-purple-800 cursor-pointer"/>
                    <Link to="/login">
                    <button className="px-4 py-2 border border-black text-base font-bold text-black-900 hover:bg-gray-200">
                        Log in
                    </button>
                    </Link>
                    <Link to="/signup">
                    <button className="px-4 py-2 bg-black text-white border border-transparent text-base font-bold rounded-none hover:bg-purple-800">
                        Sign up
                    </button>
                    </Link>
                    <div className="p-1 border border-black rounded-none">
                        <GlobeAltIcon className="h-6 w-6 text-black-600 hover:text-purple-800 cursor-pointer"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
