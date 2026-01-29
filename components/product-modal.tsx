"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Product {
  id: number
  name: string
  price: number
  unit: string
  image: string
  photoCount: number
  specifications: {
    label: string
    value: string
  }[]
  seller: {
    name: string
    location: string
    gst: boolean
    trustSeal: boolean
    years: number
    rating: number
    reviews: number
    responseRate: number
  }
}

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
          <h2 className="text-lg font-medium text-[var(--im-text-dark)]">{product.name}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Image Section - Reduced zoom */}
          <div className="lg:w-1/2 p-4">
            <div className="relative aspect-square bg-gray-100 rounded overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
              />
              
              {/* Navigation Arrows */}
              <button className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-2 mt-3 overflow-x-auto">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-16 h-16 shrink-0 border border-[var(--border)] rounded overflow-hidden cursor-pointer hover:border-[var(--im-teal)]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Specifications & Form */}
          <div className="lg:w-1/2 p-4 border-t lg:border-t-0 lg:border-l border-[var(--border)]">
            {/* Price */}
            <div className="mb-4">
              <span className="text-2xl font-medium text-[var(--im-text-dark)]">₹ {product.price}</span>
              <span className="text-sm text-[var(--im-text-gray)]">/{product.unit}</span>
            </div>
            
            {/* Specifications */}
            <div className="mb-6">
              <h3 className="font-medium text-[var(--im-text-dark)] mb-3">Specifications</h3>
              <table className="w-full text-sm">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-b-0">
                      <td className="py-2 pr-4 text-[var(--im-text-gray)] w-[140px]">{spec.label}</td>
                      <td className="py-2 text-[var(--im-text-dark)] font-medium">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Quick Requirement Form */}
            <div className="bg-gray-50 p-4 rounded border border-[var(--border)]">
              <h3 className="font-medium text-[var(--im-text-dark)] mb-3">Quick Inquiry</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-[var(--im-text-gray)]">I want quotes for*</label>
                  <Input 
                    defaultValue={product.name}
                    className="mt-1 h-9 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-[var(--im-text-gray)]">Quantity</label>
                  <Input 
                    placeholder="Enter quantity"
                    className="mt-1 h-9 text-sm"
                  />
                </div>
                <Button className="w-full bg-[var(--im-teal)] hover:bg-[var(--im-dark-teal)] text-white">
                  Submit Requirement
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
