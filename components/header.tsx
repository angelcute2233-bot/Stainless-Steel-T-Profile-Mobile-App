"use client"

import React from "react"
import Image from "next/image"

import { Search, Camera, MapPin, ChevronDown, Globe, HelpCircle, Mail, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <header className="bg-white border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-4 py-2">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/images/indiamart-logo.png"
              alt="IndiaMART"
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </div>
          
          {/* Location Selector */}
          <div className="hidden md:flex items-center gap-1 px-3 py-1.5 border border-[var(--border)] rounded bg-white cursor-pointer hover:bg-gray-50">
            <MapPin className="w-4 h-4 text-[var(--im-teal)]" />
            <span className="text-sm text-[var(--im-text-dark)]">Mumbai</span>
            <ChevronDown className="w-4 h-4 text-[var(--im-text-gray)]" />
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center border border-[var(--border)] rounded overflow-hidden bg-white">
              <Input 
                type="text"
                placeholder="Enter product / service to search"
                className="border-0 focus-visible:ring-0 text-sm h-9 rounded-none"
              />
              <button className="px-3 py-2 bg-gray-100 border-l border-[var(--border)] hover:bg-gray-200">
                <Camera className="w-5 h-5 text-[var(--im-text-gray)]" />
              </button>
              <button className="px-4 py-2 bg-[var(--im-teal)] hover:bg-[var(--im-dark-teal)]">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          
          {/* Get Best Price Button */}
          <Button 
            variant="outline" 
            className="hidden md:flex border-[var(--im-text-dark)] text-[var(--im-text-dark)] hover:bg-gray-100 text-sm font-medium bg-transparent"
          >
            Get Best Price
          </Button>
          
          {/* Right Side Links */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink icon={<Globe className="w-5 h-5" />} label="Exporters" />
            <NavLink icon={<Home className="w-5 h-5" />} label="Sell" />
            <NavLink icon={<HelpCircle className="w-5 h-5" />} label="Help" />
            <NavLink icon={<Mail className="w-5 h-5" />} label="Messages" />
            <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--im-teal)]">
              <span className="text-sm">Hi</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 cursor-pointer hover:text-[var(--im-teal)] text-[var(--im-text-gray)]">
      {icon}
      {label && <span className="text-xs">{label}</span>}
    </div>
  )
}
