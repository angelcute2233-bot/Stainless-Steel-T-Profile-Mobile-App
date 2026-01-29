"use client"

import React from "react"

import Image from "next/image"

const priceRanges = [
  { label: "Below ₹300", count: 145 },
  { label: "₹301 - ₹500", count: 234 },
  { label: "₹501 - ₹1,000", count: 189 },
  { label: "Above ₹1,001", count: 153 },
]

const relatedCategories = [
  { name: "Stainless Steel Profiles", image: "/images/related-1.png" },
  { name: "Stainless Steel Decorative Profiles", image: "/images/related-2.png" },
  { name: "T Section", image: "/images/related-3.png" },
  { name: "Stainless Steel Channels", image: "/images/related-4.png" },
]

const businessTypes = [
  { label: "Manufacturer", count: 312 },
  { label: "Wholesaler/Distributor", count: 189 },
]

export default function LeftSidebar() {
  return (
    <div className="space-y-4">
      {/* Price Range */}
      <FilterSection title="Price Range">
        <ul className="space-y-1.5">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-[var(--im-text-dark)] hover:text-[var(--im-blue)]">
                <input type="checkbox" className="w-3.5 h-3.5 accent-[var(--im-teal)]" />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </FilterSection>
      
      {/* Related Category */}
      <FilterSection title="Related Category">
        <ul className="space-y-2">
          {relatedCategories.map((cat) => (
            <li key={cat.name}>
              <a href="#" className="flex items-center gap-2 group">
                <div className="w-9 h-9 bg-gray-50 rounded overflow-hidden shrink-0 flex items-center justify-center">
                  <Image 
                    src={cat.image || "/placeholder.svg"} 
                    alt={cat.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-sm text-[var(--im-text-dark)] group-hover:text-[var(--im-blue)] leading-tight">
                  {cat.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </FilterSection>
      
      {/* Business Type */}
      <FilterSection title="Business Type">
        <ul className="space-y-1.5">
          {businessTypes.map((type) => (
            <li key={type.label}>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-[var(--im-text-dark)] hover:text-[var(--im-blue)]">
                <input type="checkbox" className="w-3.5 h-3.5 accent-[var(--im-teal)]" />
                {type.label}
              </label>
            </li>
          ))}
        </ul>
      </FilterSection>
    </div>
  )
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[var(--border)]">
      <div className="bg-[var(--im-purple)] px-3 py-2">
        <h3 className="text-sm font-medium text-white">{title}</h3>
      </div>
      <div className="p-3">
        {children}
      </div>
    </div>
  )
}
