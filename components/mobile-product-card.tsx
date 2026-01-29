"use client"

import Image from "next/image"
import { MapPin, Phone, MessageSquare, Star, CheckCircle, Flag, User } from "lucide-react"

export interface MobileProduct {
  id: number
  name: string
  price: number | "Price on Request"
  unit: string
  image: string
  specifications: {
    label: string
    value: string
  }[]
  seller: {
    name: string
    location: string
    gst: boolean
    trustSeal?: boolean
    verifiedExporter?: boolean
    years: number | string
    rating: number
    reviews: number
    responseRate: number
  }
}

interface MobileProductCardProps {
  product: MobileProduct
}

export default function MobileProductCard({ product }: MobileProductCardProps) {
  return (
    <div className="bg-white border-b-8 border-gray-100">
      {/* Product Title */}
      <div className="px-4 pt-4 pb-2">
        <h2 className="text-base text-[#00897B] font-medium leading-snug">
          {product.name}
        </h2>
      </div>
      
      {/* Product Content */}
      <div className="px-4 pb-3 flex gap-3">
        {/* Product Image */}
        <div className="w-28 h-28 shrink-0 bg-gray-50 rounded overflow-hidden relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2"
          />
        </div>
        
        {/* Product Details */}
        <div className="flex-1 min-w-0">
          {/* Price */}
          <div className="mb-2">
            {product.price === "Price on Request" ? (
              <span className="text-[#00897B] font-medium text-base">Price on Request</span>
            ) : (
              <span className="text-gray-900 font-semibold text-lg">
                {"\u20B9"} {product.price.toLocaleString()}/{product.unit}
              </span>
            )}
          </div>
          
          {/* Specifications */}
          <div className="space-y-0.5">
            {product.specifications.slice(0, 4).map((spec, index) => (
              <div key={index} className="text-sm text-gray-600">
                <span className="text-gray-500">{spec.label}:</span>{" "}
                <span className="text-gray-700">{spec.value}</span>
              </div>
            ))}
          </div>
          
          {/* Seller Name */}
          <div className="mt-2 font-semibold text-gray-900 text-sm">
            {product.seller.name}
          </div>
          
          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
            <MapPin className="w-3.5 h-3.5" />
            {product.seller.location}
          </div>
        </div>
      </div>
      
      {/* Badges & Rating Row */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-3 flex-wrap">
          {product.seller.gst && (
            <div className="flex items-center gap-1 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600 fill-green-600 stroke-white" />
              <span className="text-gray-700">GST</span>
            </div>
          )}
          {product.seller.trustSeal && (
            <div className="flex items-center gap-1 text-sm">
              <CheckCircle className="w-4 h-4 text-yellow-500 fill-yellow-500 stroke-white" />
              <span className="text-gray-700">TrustSEAL</span>
            </div>
          )}
          {product.seller.verifiedExporter && (
            <div className="flex items-center gap-1 text-sm">
              <Flag className="w-4 h-4 text-red-500" />
              <span className="text-gray-700">Verified Exporter</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>{product.seller.years}</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.seller.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
            <span className="text-sm text-gray-700 ml-1">
              {product.seller.rating} ({product.seller.reviews})
            </span>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="px-4 pb-4 flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border-2 border-[#00897B] rounded-md text-[#00897B] font-medium">
          <Phone className="w-5 h-5" />
          <div className="flex flex-col items-start">
            <span className="text-sm">Call Now</span>
            <span className="text-xs font-normal text-[#00897B]">{product.seller.responseRate}% Response Rate</span>
          </div>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#00897B] rounded-md text-white font-medium">
          <MessageSquare className="w-5 h-5" />
          <span className="text-sm">Get Best Price</span>
        </button>
      </div>
    </div>
  )
}
