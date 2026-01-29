"use client"

import { MapPin, Search, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const cities = [
  "Mumbai", "Delhi", "Bengaluru", "Ahmedabad", "Hyderabad", 
  "Pune", "Chennai", "Thane", "Kolkata", "Rajkot", "Surat", "Vadodara"
]

export default function CityBar() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {/* City Search */}
      <div className="flex items-center border border-[var(--border)] rounded bg-white overflow-hidden">
        <div className="px-2">
          <MapPin className="w-4 h-4 text-[var(--im-text-gray)]" />
        </div>
        <Input 
          type="text" 
          placeholder="Enter City"
          className="border-0 focus-visible:ring-0 text-sm h-8 w-32 rounded-none"
        />
        <button className="px-2 py-1.5 bg-gray-50 border-l border-[var(--border)]">
          <Search className="w-4 h-4 text-[var(--im-text-gray)]" />
        </button>
      </div>
      
      {/* City Pills */}
      <div className="flex items-center gap-2 flex-wrap">
        {cities.map((city) => (
          <Button
            key={city}
            variant="outline"
            size="sm"
            onClick={() => setSelectedCity(city === selectedCity ? null : city)}
            className={`h-7 text-xs font-normal rounded-full px-3 ${
              city === selectedCity 
                ? "bg-[var(--im-purple)] text-white border-[var(--im-purple)]" 
                : "bg-white border-[var(--border)] text-[var(--im-text-dark)] hover:border-[var(--im-purple)]"
            }`}
          >
            {city}
          </Button>
        ))}
        <Button variant="ghost" size="sm" className="h-7 text-xs text-[var(--im-blue)] hover:underline">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      
      {/* View Type Toggle */}
      <div className="ml-auto hidden md:flex items-center gap-2 text-xs text-[var(--im-text-gray)]">
        <span>View by:</span>
        <button className="flex items-center gap-1 px-2 py-1 border border-[var(--im-purple)] text-[var(--im-purple)] rounded">
          <span className="grid grid-cols-2 gap-0.5">
            <span className="w-1.5 h-1.5 bg-current" />
            <span className="w-1.5 h-1.5 bg-current" />
            <span className="w-1.5 h-1.5 bg-current" />
            <span className="w-1.5 h-1.5 bg-current" />
          </span>
          List
        </button>
        <button className="flex items-center gap-1 px-2 py-1 border border-[var(--border)] rounded hover:border-[var(--im-purple)]">
          <span className="grid grid-cols-2 gap-0.5">
            <span className="w-2 h-2 border border-current" />
            <span className="w-2 h-2 border border-current" />
          </span>
          Grid
        </button>
      </div>
    </div>
  )
}
