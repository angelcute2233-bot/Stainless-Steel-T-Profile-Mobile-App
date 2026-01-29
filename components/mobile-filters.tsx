"use client"

import { MapPin, SlidersHorizontal, X } from "lucide-react"
import { useState } from "react"

const locations = ["Belgaum", "Bengaluru", "Pune", "Mumbai", "Thane", "Hyderabad"]
const categories = ["Stainless Steel T Profile", "Stainless Steel Profiles", "Aluminium Profile"]
const priceRanges = ["Below \u20B9300", "\u20B9301 - \u20B9500", "\u20B9501 - \u20B91,000", "Above \u20B91,001"]

export default function MobileFilters() {
  const [selectedLocation, setSelectedLocation] = useState("Belgaum")
  const [selectedCategory, setSelectedCategory] = useState("Stainless Steel T Profile")
  
  return (
    <div className="bg-white border-b border-gray-200">
      {/* Location Chips */}
      <div className="px-3 py-2 flex items-center gap-2 overflow-x-auto scrollbar-hide">
        <MapPin className="w-5 h-5 text-red-500 shrink-0" />
        {locations.map((location) => (
          <button
            key={location}
            onClick={() => setSelectedLocation(location)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full border text-sm whitespace-nowrap ${
              selectedLocation === location
                ? "bg-gray-100 border-gray-400"
                : "border-gray-300"
            }`}
          >
            {selectedLocation === location && <X className="w-3 h-3" />}
            {location}
          </button>
        ))}
      </div>
      
      {/* Category Chips */}
      <div className="px-3 py-2 flex items-center gap-2 overflow-x-auto scrollbar-hide border-t border-gray-100">
        <SlidersHorizontal className="w-5 h-5 text-gray-500 shrink-0" />
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 rounded-full border text-sm whitespace-nowrap ${
              selectedCategory === category
                ? "bg-gray-100 border-gray-400"
                : "border-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Price Range Chips */}
      <div className="px-3 py-2 flex items-center gap-2 overflow-x-auto scrollbar-hide border-t border-gray-100">
        <div className="w-5 shrink-0" />
        {priceRanges.map((range) => (
          <button
            key={range}
            className="px-3 py-1.5 rounded-full border border-gray-300 text-sm whitespace-nowrap"
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  )
}
