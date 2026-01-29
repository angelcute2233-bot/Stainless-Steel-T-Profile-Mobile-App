"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Star, MapPin, Check, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductModal from "@/components/product-modal"

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

const products: Product[] = [
  {
    id: 1,
    name: "Stainless steel pvd t profile, Grade: SS304",
    price: 90,
    unit: "Piece",
    image: "/images/product-1.png",
    photoCount: 8,
    specifications: [
      { label: "Grade", value: "SS304" },
      { label: "Material", value: "STAINLESS STEEL" },
      { label: "Position", value: "Exterior" },
      { label: "Thickness", value: "1 mm" },
      { label: "Finish", value: "MIRROR" },
    ],
    seller: {
      name: "Amco Metals",
      location: "Girgaon, Mumbai",
      gst: true,
      trustSeal: true,
      years: 17,
      rating: 4.3,
      reviews: 42,
      responseRate: 81,
    },
  },
  {
    id: 2,
    name: "Stainless Steel Inlay T Patti, 1 mm, Interior",
    price: 380,
    unit: "Piece",
    image: "/images/product-2.png",
    photoCount: 9,
    specifications: [
      { label: "Grade", value: "SS304" },
      { label: "Position", value: "Interior" },
      { label: "Thickness", value: "1 mm" },
      { label: "Dimension", value: "Customized" },
      { label: "Dimensions", value: "CUSTOMIZED" },
      { label: "Average Plant Height Cm", value: "Customized" },
    ],
    seller: {
      name: "Grip Metal Craft",
      location: "Vavdi, Rajkot",
      gst: true,
      trustSeal: true,
      years: 14,
      rating: 4.7,
      reviews: 87,
      responseRate: 80,
    },
  },
  {
    id: 3,
    name: "Stainless Steel Decorative T Beading Profile For Inlay Groove (1mm Thickness, SS304 Grade)",
    price: 150,
    unit: "Piece",
    image: "/images/product-3.png",
    photoCount: 4,
    specifications: [
      { label: "Grade", value: "SS304" },
      { label: "Thickness", value: "1 mm" },
      { label: "Dimensions", value: "10ft" },
      { label: "Color", value: "Golden" },
      { label: "Finish", value: "Polished" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    seller: {
      name: "Steelora",
      location: "Delisle Road, Mumbai",
      gst: true,
      trustSeal: true,
      years: 12,
      rating: 4.8,
      reviews: 22,
      responseRate: 75,
    },
  },
]

const secondSetProducts: Product[] = [
  {
    id: 4,
    name: "Stainless Steel Blue Mirror T Profile Patti, Grade: SS304, 1 mm",
    price: 299,
    unit: "Piece",
    image: "/images/product-4.png",
    photoCount: 9,
    specifications: [
      { label: "Grade", value: "SS304" },
      { label: "Thickness", value: "1 mm" },
      { label: "Color", value: "Golden" },
      { label: "Finish", value: "Polished" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    seller: {
      name: "Metalx Decor",
      location: "Mumbai",
      gst: true,
      trustSeal: true,
      years: 0,
      rating: 4.1,
      reviews: 14,
      responseRate: 88,
    },
  },
  {
    id: 5,
    name: "Mirror Finish SS304 T Patti for Ceiling/Partition - 3m Length (6mm)",
    price: 120,
    unit: "Piece",
    image: "/images/product-5.png",
    photoCount: 5,
    specifications: [
      { label: "Grade", value: "SS304" },
      { label: "Profile Size", value: "12x12 mm" },
      { label: "Length", value: "3 m" },
      { label: "Finish", value: "Mirror" },
      { label: "Thickness", value: "0.6 mm" },
      { label: "Application", value: "Ceiling, Partition" },
    ],
    seller: {
      name: "Nayan Metal & Alloys",
      location: "Mumbai",
      gst: true,
      trustSeal: true,
      years: 9,
      rating: 3.8,
      reviews: 21,
      responseRate: 91,
    },
  },
  {
    id: 6,
    name: "Rose Gold T Profile Stainless Steel, Premium Finish",
    price: 450,
    unit: "Piece",
    image: "/images/product-6.png",
    photoCount: 6,
    specifications: [
      { label: "Grade", value: "SS304" },
      { label: "Color", value: "Rose Gold" },
      { label: "Finish", value: "Mirror Polished" },
      { label: "Thickness", value: "1 mm" },
      { label: "Application", value: "Interior Decoration" },
    ],
    seller: {
      name: "Premium Steel Works",
      location: "Andheri, Mumbai",
      gst: true,
      trustSeal: true,
      years: 8,
      rating: 4.5,
      reviews: 35,
      responseRate: 85,
    },
  },
  {
    id: 7,
    name: "Multi-Color T Profile Strips Set, Decorative Collection",
    price: 550,
    unit: "Set",
    image: "/images/product-7.png",
    photoCount: 12,
    specifications: [
      { label: "Grade", value: "SS304" },
      { label: "Colors", value: "Multiple" },
      { label: "Finish", value: "PVD Coated" },
      { label: "Thickness", value: "0.8 mm" },
      { label: "Pack Contents", value: "10 pieces" },
    ],
    seller: {
      name: "Color Steel India",
      location: "Surat, Gujarat",
      gst: true,
      trustSeal: true,
      years: 6,
      rating: 4.2,
      reviews: 28,
      responseRate: 78,
    },
  },
  {
    id: 8,
    name: "Industrial Grade T Section Steel Profile",
    price: 180,
    unit: "Piece",
    image: "/images/product-8.png",
    photoCount: 5,
    specifications: [
      { label: "Grade", value: "SS316" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Finish", value: "Mill Finish" },
      { label: "Thickness", value: "2 mm" },
      { label: "Application", value: "Industrial" },
    ],
    seller: {
      name: "Heavy Steel Industries",
      location: "Bhiwandi, Maharashtra",
      gst: true,
      trustSeal: true,
      years: 22,
      rating: 4.6,
      reviews: 156,
      responseRate: 92,
    },
  },
]

export default function ProductListing({ showSecondSet = false }: { showSecondSet?: boolean }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const displayProducts = showSecondSet ? secondSetProducts : products

  return (
    <>
      <div className="space-y-4">
        {displayProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onImageClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </>
  )
}

function ProductCard({ product, onImageClick }: { product: Product; onImageClick: () => void }) {
  return (
    <div className="bg-white border border-[var(--border)] rounded overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Product Image - Centered image */}
        <div className="relative w-full md:w-[180px] shrink-0 flex items-center justify-center">
          <div 
            className="relative h-[160px] w-full cursor-pointer group overflow-hidden bg-gray-50 flex items-center justify-center"
            onClick={onImageClick}
          >
            {/* Leading Supplier Badge */}
            <div className="absolute top-0 left-0 z-10">
              <div className="bg-[var(--im-teal)] text-white text-[10px] px-1.5 py-0.5 font-medium writing-mode-vertical transform -rotate-0 origin-top-left" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Leading Supplier
              </div>
            </div>
            
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
              style={{ objectPosition: 'center center' }}
            />
            
            {/* Photo Count Badge */}
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"/>
              </svg>
              +{product.photoCount} Photos
            </div>
          </div>
        </div>
        
        {/* Specifications - Expanded with better spacing */}
        <div className="flex-1 p-4">
          <h2 className="text-base font-medium text-[var(--im-blue)] hover:underline cursor-pointer mb-2 leading-snug">
            {product.name}
          </h2>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-medium text-[var(--im-text-dark)]">₹ {product.price}</span>
            <span className="text-sm text-[var(--im-text-gray)]">/{product.unit}</span>
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-2 h-6 text-xs border-[var(--im-text-dark)] text-[var(--im-text-dark)] hover:bg-gray-100 bg-transparent"
            >
              Get Export Price
            </Button>
          </div>
          
          {/* Specifications Table - Improved spacing and font size */}
          <div className="border-t border-[var(--border)] pt-3">
            <table className="w-full text-sm">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-1.5 pr-4 text-[var(--im-text-gray)] w-[140px]">{spec.label}</td>
                    <td className="py-1.5 text-[var(--im-text-dark)] font-medium">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center gap-4 mt-3 text-sm">
            <button className="text-[var(--im-blue)] hover:underline">read more...</button>
            <button className="flex items-center gap-1 text-[var(--im-text-gray)] hover:text-[var(--im-blue)]">
              <FileText className="w-4 h-4 text-red-600" />
              Brochure
            </button>
          </div>
        </div>
        
        {/* Seller Info */}
        <div className="w-full md:w-[220px] border-t md:border-t-0 md:border-l border-[var(--border)] p-4 bg-gray-50/50">
          <h3 className="font-medium text-[var(--im-text-dark)] mb-1">{product.seller.name}</h3>
          <div className="flex items-center gap-1 text-xs text-[var(--im-text-gray)] mb-2">
            <MapPin className="w-3 h-3" />
            {product.seller.location}
          </div>
          
          <div className="flex items-center gap-2 text-xs mb-2">
            {product.seller.gst && (
              <span className="flex items-center gap-0.5 text-[var(--im-teal)]">
                <Check className="w-3 h-3" /> GST
              </span>
            )}
            {product.seller.trustSeal && (
              <span className="flex items-center gap-0.5 text-[var(--im-orange)]">
                <Check className="w-3 h-3" /> TrustSEAL Verified
              </span>
            )}
          </div>
          
          {product.seller.years > 0 && (
            <div className="text-xs text-[var(--im-text-gray)] mb-2">
              <span className="font-medium">{product.seller.years} yrs</span>
            </div>
          )}
          
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(product.seller.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-xs text-[var(--im-text-dark)] ml-1">
              {product.seller.rating} ({product.seller.reviews})
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-[var(--im-teal)] mb-3">
            <Phone className="w-3 h-3" />
            {product.seller.responseRate}% Response Rate
          </div>
          
          <div className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full text-sm h-9 border-[var(--im-teal)] text-[var(--im-teal)] hover:bg-[var(--im-teal)]/10 bg-transparent"
            >
              <Phone className="w-4 h-4 mr-2" />
              View Mobile Number
            </Button>
            <Button className="w-full text-sm h-9 bg-[var(--im-teal)] hover:bg-[var(--im-dark-teal)] text-white">
              Contact Supplier
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
