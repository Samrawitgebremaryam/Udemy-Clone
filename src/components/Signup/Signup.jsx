import React from 'react';

const SignupPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-md p-8 space-y-6 bg-white ">
            <h2 className="text-lg font-bold text-left">Sign up and start learning</h2>
                
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="full-name" className="sr-only">Full name</label>
                        <input 
                            type="text" 
                            id="full-name" 
                            name="full-name" 
                            autoComplete="name" 
                            required 
                            className="w-full px-3 py-5 border border-black rounded-none shadow-sm placeholder-black text-base font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Full name" 
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            autoComplete="email" 
                            required 
                            className="w-full px-3 py-5 border border-black rounded-none shadow-sm placeholder-black text-base font-bold  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Email" 
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            autoComplete="current-password" 
                            required 
                            className="w-full px-3 py-5 border border-black rounded-none shadow-sm placeholder-black  text-base font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Password" 
                        />
                    </div>

                    <div className="flex items-center">
                        <input 
                            id="offers" 
                            name="offers" 
                            type="checkbox" 
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="offers" className="ml-2 block text-sm text-gray-900">
                            Send me special offers, personalized recommendations, and learning tips.
                        </label>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full px-4 py-3 text-sm font-bold text-white bg-purple-600 rounded-none hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
                    >
                        Sign up
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-sm">
                        By signing up, you agree to our <a href="#" className="text-indigo-600 hover:underline">Terms of Use</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                    </p>
                    <p className="mt-4 text-sm">
                        Already have an account? <a href="#" className="font-medium text-indigo-600 hover:underline">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
