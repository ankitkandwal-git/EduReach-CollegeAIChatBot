import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="fixed top-16 bottom-0 left-0 flex flex-col w-64 bg-[#121318] text-white border-r border-white/5 shadow-2xl z-40">

            <nav className="flex-1 px-4 mt-6 space-y-2">
                <Link to="/dashboard" className="flex items-center px-4 py-3 transition-all duration-200 rounded-xl hover:bg-white/10 group">
                    <span className="font-medium text-gray-400 transition-colors group-hover:text-white">Dashboard</span>
                </Link>

                <Link to="/placements" className="flex items-center px-4 py-3 transition-all duration-200 rounded-xl hover:bg-white/10 group">
                    <span className="font-medium text-gray-400 transition-colors group-hover:text-white">Placements</span>
                </Link>

                <Link to="/scholarships" className="flex items-center px-4 py-3 transition-all duration-200 rounded-xl hover:bg-white/10 group">
                    <span className="font-medium text-gray-400 transition-colors group-hover:text-white">Scholarships</span>
                </Link>
            </nav>

            <div className="p-6 border-t border-white/5">
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>System Active</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;