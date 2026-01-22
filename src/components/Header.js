// src/components/Header-Beranda.js
import React, { useState } from 'react';

const HeaderBeranda = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto max-w-[1200px] px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
                <img src="/assets/logo.png" alt="Logo" className="h-8 md:h-10" />
                {/* Menu untuk Desktop */}
                <div className="hidden md:flex items-center space-x-5">
                    <a href="#" className="text-gray-700 hover:text-orange-500">Kategori</a>
                    <div className="relative">
                        <img 
                            src="/assets/Avatar.png" 
                            alt="avatar" 
                            className="h-12 w-12 rounded-[10px] cursor-pointer" 
                            onClick={toggleDropdown} 
                        />
                        {isDropdownVisible && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Admin</a>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</a>
                            </div>
                        )}
                    </div>
                </div>
                {/* Hamburger Menu untuk tampilan kecil */}
                <div className="md:hidden flex items-center">
                    <button className="text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default HeaderBeranda;
