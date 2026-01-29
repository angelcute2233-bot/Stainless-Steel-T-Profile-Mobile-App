"use client"

import MobileProductCard, { MobileProduct } from "./mobile-product-card"

const products: MobileProduct[] = [
  {
    id: 1,
    name: "Stainless Steel T Profile, 0.6 mm, 12x12 mm",
    price: 1000,
    unit: "Piece",
    image: "/images/product-1.png",
    specifications: [
      { label: "Grade", value: "SS304" },
      { label: "Length", value: "10 ft" },
      { label: "Finish", value: "Brushed" },
      { label: "Application", value: "Glass Door" },
    ],
    seller: {
      name: "Millennium Alloys",
      location: "Mumbai (Deals in Belagavi)",
      gst: true,
      verifiedExporter: true,
      years: "4 months",
      rating: 5,
      reviews: 1,
      responseRate: 85,
    },
  },
  {
    id: 2,
    name: "Stainless Steel T Profile Patti, Grade: SS304",
    price: 400,
    unit: "Piece",
    image: "/images/product-2.png",
    specifications: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Position", value: "Interior" },
      { label: "Thickness", value: "2 mm" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    seller: {
      name: "Skyland Metal And Alloys Inc",
      location: "Mumbai (Deals in Belagavi)",
      gst: true,
      trustSeal: true,
      years: "8 yrs",
      rating: 4.5,
      reviews: 32,
      responseRate: 78,
    },
  },
  {
    id: 3,
    name: "Steel T Profile Pipes",
    price: "Price on Request",
    unit: "Piece",
    image: "/images/product-3.png",
    specifications: [
      { label: "Grade", value: "SS304" },
      { label: "Shape", value: "T Profile" },
      { label: "Finish", value: "Polished" },
    ],
    seller: {
      name: "Ghatge And Pawar",
      location: "Kolhapur",
      gst: true,
      years: "8 yrs",
      rating: 4.2,
      reviews: 18,
      responseRate: 82,
    },
  },
  {
    id: 4,
    name: "Stainless Steel Profile, Grade: SS304, 4 mm",
    price: 200,
    unit: "Kg",
    image: "/images/product-4.png",
    specifications: [
      { label: "Color", value: "Silver" },
      { label: "Finish", value: "Polished" },
      { label: "Shape", value: "T Shape" },
      { label: "Grade", value: "SS304" },
    ],
    seller: {
      name: "S R Steel And Profile Cutting",
      location: "Kolhapur",
      gst: true,
      years: "8 yrs",
      rating: 4.3,
      reviews: 25,
      responseRate: 88,
    },
  },
  {
    id: 5,
    name: "T Profile Stainless Steel Decorative Profiles",
    price: 780,
    unit: "Piece",
    image: "/images/product-5.png",
    specifications: [
      { label: "Thickness", value: "2 mm" },
      { label: "Finish", value: "Polish" },
      { label: "Technique", value: "Cold Rolled" },
    ],
    seller: {
      name: "Marine Stainless India",
      location: "Mumbai (Deals in Belagavi)",
      gst: true,
      trustSeal: true,
      years: "11 yrs",
      rating: 4.8,
      reviews: 148,
      responseRate: 81,
    },
  },
  {
    id: 6,
    name: "Escos Stainless Steel Brass Tabs",
    price: 1250,
    unit: "Piece",
    image: "/images/product-6.png",
    specifications: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Color", value: "Golden" },
      { label: "Finish", value: "Mirror" },
      { label: "Grade", value: "SS304" },
    ],
    seller: {
      name: "Escos Steel Industries",
      location: "Mumbai",
      gst: true,
      trustSeal: true,
      verifiedExporter: true,
      years: "15 yrs",
      rating: 4.7,
      reviews: 89,
      responseRate: 92,
    },
  },
]

export default function MobileProductList() {
  return (
    <div className="bg-gray-100">
      {products.map((product) => (
        <MobileProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
