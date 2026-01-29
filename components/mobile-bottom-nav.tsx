"use client"

import { Home, MessageSquare, FileText, Search } from "lucide-react"
import { useState } from "react"

const navItems = [
  { icon: Home, label: "Home" },
  { icon: MessageSquare, label: "Messages" },
  { icon: FileText, label: "Post" },
  { icon: Search, label: "Search" },
]

export default function MobileBottomNav() {
  const [activeItem, setActiveItem] = useState("Home")
  
  return (
    <nav className="bg-white border-t border-gray-200">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveItem(label)}
            className={`flex flex-col items-center gap-0.5 px-4 py-1 ${
              activeItem === label ? "text-[#00897B]" : "text-gray-500"
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
