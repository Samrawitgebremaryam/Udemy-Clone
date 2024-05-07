import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#2d2f31] text-white py-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
                <div>
                    <h6 className="font-semibold">Udemy Business</h6>
                    <ul className="mt-4 space-y-2">
                        <li className="hover:underline decoration-white">Teach on Udemy</li>
                        <li className="hover:underline decoration-white">Get the app</li>
                        <li className="hover:underline decoration-white">About us</li>
                        <li className="hover:underline decoration-white">Contact us</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-semibold">Careers</h6>
                    <ul className="mt-4 space-y-2">
                        <li className="hover:underline decoration-white">Blog</li>
                        <li className="hover:underline decoration-white">Help and Support</li>
                        <li className="hover:underline decoration-white">Affiliate</li>
                        <li className="hover:underline decoration-white">Investors</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-semibold">Terms</h6>
                    <ul className="mt-4 space-y-2">
                        <li className="hover:underline decoration-white">Privacy policy</li>
                        <li className="hover:underline decoration-white">Cookie settings</li>
                        <li className="hover:underline decoration-white">Sitemap</li>
                        <li className="hover:underline decoration-white">Accessibility statement</li>
                    </ul>
                </div>
                <div className="col-span-2 sm:col-span-1 lg:col-span-2 flex justify-end items-center">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded">
                        English
                    </button>
                </div>
                <div className="col-span-full flex justify-between items-center pt-8 border-t border-gray-800">
                    <span>© 2024 Udemy, Inc.</span>
                    <span>Udemy logo</span> {/* Replace "Udemy logo" with an actual logo image if available */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
