"use client"

import { Menu, Search, Camera, Mic } from "lucide-react"

export default function MobileHeader() {
  return (
    <header className="bg-[#00897B] px-3 py-2">
      <div className="flex items-center gap-2">
        {/* Menu Icon */}
        <button className="text-white p-1">
          <Menu className="w-6 h-6" />
        </button>
        
        {/* Logo */}
        <div className="flex items-center gap-1 shrink-0">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-500 font-bold text-sm">M</span>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="flex-1 flex items-center bg-white rounded-md overflow-hidden">
          <div className="flex items-center px-2 text-[#00897B]">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Stainless Steel T Profile Near..."
            className="flex-1 py-2 text-sm text-gray-700 bg-transparent outline-none placeholder:text-gray-500"
          />
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Camera className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Mic className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
