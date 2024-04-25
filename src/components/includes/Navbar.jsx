import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white text-lg fixed top-0 w-full p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white font-bold text-xl">NEWS<span className="text-indigo-300"> LAWN</span></div>
                    <div className="block lg:hidden">
                        <button className="text-white focus:outline-none" onClick={toggleMobileMenu}><i className="fa-solid fa-bars-staggered"></i></button>
                    </div>
                    <div className="hidden lg:flex flex-grow justify-end items-center space-x-8">
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#" className="hover:text-gray-300">About</a>
                        <a href="#" className="hover:text-gray-300">Services</a>
                        <a href="#" className="hover:text-gray-300">Contact</a>
                    </div>
                </div>
                <div className={`${isMobileMenuOpen ? '' : 'hidden'} lg:hidden`}>
                    <ul>
                        <li><a href="#" className="block py-2">Home</a></li>
                        <li><a href="#" className="block py-2">About</a></li>
                        <li><a href="#" className="block py-2">Services</a></li>
                        <li><a href="#" className="block py-2">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
