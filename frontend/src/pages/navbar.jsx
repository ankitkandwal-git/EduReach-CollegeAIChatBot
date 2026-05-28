import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BellIcon, UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () =>{
    const navigate = useNavigate();

    const user = { name: 'John Doe', avatar: 'https://placehold.co/30' };
    const handleLogout = () => {
        console.log('User logged out');
        localStorage.removeItem('token');
        navigate('/login');
    };

    return(
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121318] text-white shadow-lg">
            <div className="container flex items-center justify-between px-4 py-3 mx-auto">
                <div className="flex-shrink-0">
                    <Link to="/" className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        EDUREACH
                    </Link>
                </div>


                <div className="flex justify-center flex-grow mx-4">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search courses, topics..."
                            className="w-full py-2 pl-10 pr-4 text-white placeholder-gray-400 transition-all duration-300 bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-gray-600"
                        />
                        <MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    </div>
                </div>


                <div className="flex items-center space-x-4">

                    <button className="relative p-2 transition-colors duration-300 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <BellIcon className="w-6 h-6 text-gray-300" />
                        <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#121318]"></span>
                    </button>


                    <Link to="/profile" className="flex items-center p-1 space-x-2 transition-colors duration-300 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <img src={user.avatar} alt="User Avatar" className="w-8 h-8 border-2 border-indigo-500 rounded-full" />
                        <span className="hidden text-sm font-medium text-gray-200 md:block">{user.name}</span>
                    </Link>


                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 text-white transition-all duration-300 transform bg-red-600 rounded-full hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

