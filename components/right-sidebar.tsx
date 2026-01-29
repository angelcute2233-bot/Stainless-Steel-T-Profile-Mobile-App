"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Lightbulb, Play, MapPin, ChevronDown } from "lucide-react"
import Image from "next/image"

const relatedVideos = [
  {
    title: "MSI SS-304 T-PATTI",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  {
    title: "Stainless Steel Inlay T Patti, Grade: SS304",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  {
    title: "T Profile Stainless Steel Living Room Wall And Ceiling",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
]

const relatedCitiesCategories = [
  { city: "Mumbai", link: "#" },
  { city: "Delhi", link: "#" },
  { city: "Bengaluru", link: "#" },
  { city: "Chennai", link: "#" },
  { city: "Ahmedabad", link: "#" },
  { city: "Pune", link: "#" },
]

export default function RightSidebar() {
  return (
    <div className="space-y-6">
      {/* Submit Requirement Card */}
      <div className="bg-[var(--im-purple)] text-white p-4 rounded">
        <h3 className="font-medium mb-1">Save Time! Get verified sellers</h3>
        <p className="text-sm opacity-90 mb-3">exporting to your country</p>
        
        <div className="bg-white rounded p-2 mb-4">
          <Image
            src="/images/product-1.png"
            alt="SS T Profile"
            width={100}
            height={60}
            className="w-full h-16 object-contain rounded"
          />
        </div>
        
        <Button className="w-full bg-white text-[var(--im-purple)] hover:bg-gray-100 font-medium">
          Submit Requirement
        </Button>
      </div>
      
      {/* About Section - NEW */}
      <div className="bg-white border border-[var(--border)] rounded p-4">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="w-5 h-5 text-[var(--im-teal)]" />
          <h3 className="font-medium text-[var(--im-text-dark)]">About Stainless Steel T Profile</h3>
        </div>
        <p className="text-sm text-[var(--im-text-gray)] leading-relaxed">
          SS T Profile is a T-shaped stainless steel bar used for structural support and decorative edging in construction. It is manufactured by cutting, bending, and finishing stainless steel, and is available in various grades and sizes to suit different project requirements.
        </p>
      </div>

      {/* Related Videos */}
      <div className="bg-white border border-[var(--border)] rounded">
        <div className="px-4 py-2 border-b border-[var(--border)]">
          <h3 className="font-medium text-[var(--im-text-dark)] text-sm">Watch Related Videos</h3>
        </div>
        <div className="p-3 space-y-3">
          {relatedVideos.map((video, index) => (
            <a key={index} href="#" className="flex gap-3 group">
              <div className="relative w-24 h-16 shrink-0 bg-gray-100 rounded overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>
              <span className="text-sm text-[var(--im-text-dark)] group-hover:text-[var(--im-blue)] leading-tight line-clamp-2">
                {video.title}
              </span>
            </a>
          ))}
        </div>
        <button className="w-full px-4 py-2 text-center text-sm text-[var(--im-blue)] hover:bg-gray-50 border-t border-[var(--border)] flex items-center justify-center gap-1">
          Show More <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
