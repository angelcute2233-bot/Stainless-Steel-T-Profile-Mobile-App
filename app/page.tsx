import { Search, Camera, Mic, Menu, MapPin, Phone, MessageSquare, Star, CheckCircle, Flag, User, Home, FileText, SlidersHorizontal, X } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Stainless Steel T Profile, 0.6 mm, 12x12 mm",
    price: "1,000",
    unit: "Piece",
    image: "/images/product-1.png",
    specs: { Grade: "SS304", Length: "10 ft", Finish: "Brushed", Application: "Glass Door" },
    seller: "Millennium Alloys",
    location: "Mumbai (Deals in Belagavi)",
    hasGST: true,
    isVerifiedExporter: true,
    hasTrustSeal: false,
    yearsInBusiness: "4 months",
    rating: 5,
    reviews: 1,
    responseRate: 85,
  },
  {
    id: 2,
    name: "Stainless Steel T Profile Patti, Grade: SS304",
    price: "400",
    unit: "Piece",
    image: "/images/product-2.png",
    specs: { Material: "Stainless Steel", Position: "Interior", Thickness: "2 mm", "Country of Origin": "Made in India" },
    seller: "Skyland Metal And Alloys Inc",
    location: "Mumbai (Deals in Belagavi)",
    hasGST: true,
    isVerifiedExporter: false,
    hasTrustSeal: true,
    yearsInBusiness: "11 yrs",
    rating: 4.8,
    reviews: 148,
    responseRate: 81,
  },
  {
    id: 3,
    name: "Steel T Profile",
    price: null,
    unit: null,
    image: "/images/product-3.png",
    specs: {},
    seller: "Ghatge And Pawar",
    location: "Kolhapur",
    hasGST: true,
    isVerifiedExporter: false,
    hasTrustSeal: false,
    yearsInBusiness: "8 yrs",
    rating: 0,
    reviews: 0,
    responseRate: 0,
  },
  {
    id: 4,
    name: "Stainless Steel Profile, Grade: SS304, 4 mm",
    price: "200",
    unit: "Kg",
    image: "/images/product-4.png",
    specs: { Color: "Silver", Finish: "Polished", Shape: "T Shape", Grade: "SS304" },
    seller: "S R Steel And Profile Cutting",
    location: "Kolhapur",
    hasGST: true,
    isVerifiedExporter: false,
    hasTrustSeal: false,
    yearsInBusiness: "8 yrs",
    rating: 0,
    reviews: 0,
    responseRate: 0,
  },
]

const locationFilters = ["Belgaum", "Bengaluru", "Pune", "Mumbai", "Thane", "Hyderabad"]
const categoryFilters = ["Stainless Steel T Profile", "Stainless Steel Profiles", "Aluminium Profile"]
const priceFilters = ["Below ₹300", "₹301 - ₹500", "₹501 - ₹1,000", "Above ₹1,001"]

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="bg-white border-b-4 border-gray-100 p-3">
      <h3 className="text-teal-600 font-medium text-base mb-2">{product.name}</h3>
      
      <div className="flex gap-3">
        <div className="w-28 h-28 shrink-0 bg-gray-50 rounded flex items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2" />
        </div>
        
        <div className="flex-1 min-w-0">
          {product.price ? (
            <p className="text-lg font-bold text-gray-900 mb-1">{"₹ " + product.price + "/" + product.unit}</p>
          ) : (
            <p className="text-teal-600 font-semibold mb-1">Price on Request</p>
          )}
          
          <div className="space-y-0.5 text-sm text-gray-600 mb-2">
            {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
              <p key={key}>{key}: {value}</p>
            ))}
          </div>
          
          <p className="font-semibold text-gray-900 text-sm">{product.seller}</p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {product.location}
          </p>
          
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            {product.hasGST && (
              <span className="flex items-center gap-0.5 text-xs">
                <CheckCircle className="w-3.5 h-3.5 text-green-600 fill-green-600" />
                <span className="text-gray-600">GST</span>
              </span>
            )}
            {product.hasTrustSeal && (
              <span className="flex items-center gap-0.5 text-xs">
                <CheckCircle className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                <span className="text-gray-600">TrustSEAL</span>
              </span>
            )}
            {product.isVerifiedExporter && (
              <span className="flex items-center gap-0.5 text-xs">
                <Flag className="w-3.5 h-3.5 text-orange-500" />
                <span className="text-gray-600">Verified Exporter</span>
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
            <span className="flex items-center gap-0.5">
              <User className="w-3 h-3" /> {product.yearsInBusiness}
            </span>
            {product.rating > 0 && (
              <span className="flex items-center gap-0.5">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>{product.rating} ({product.reviews})</span>
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex gap-2 mt-3">
        <button className="flex-1 border-2 border-teal-600 text-teal-600 rounded py-2.5 flex flex-col items-center justify-center">
          <span className="flex items-center gap-1 font-medium">
            <Phone className="w-4 h-4" /> Call Now
          </span>
          {product.responseRate > 0 && (
            <span className="text-xs text-teal-500">{product.responseRate}% Response Rate</span>
          )}
        </button>
        <button className="flex-1 bg-teal-600 text-white rounded py-2.5 flex items-center justify-center gap-1 font-medium">
          <MessageSquare className="w-4 h-4" /> Get Best Price
        </button>
      </div>
    </div>
  )
}

export default function MobileApp() {
  return (
    <main className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="relative">
        <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20" />
          
          <div className="w-[375px] h-[780px] bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
            <div className="bg-teal-600 text-white text-xs px-6 py-1.5 flex justify-between items-center">
              <span className="font-medium">1:22</span>
              <div className="flex items-center gap-1">
                <span>89%</span>
                <div className="w-6 h-3 border border-white rounded-sm relative">
                  <div className="absolute inset-0.5 right-1 bg-white rounded-sm" />
                </div>
              </div>
            </div>
            
            <div className="bg-teal-600 px-3 py-2 flex items-center gap-2">
              <Menu className="w-6 h-6 text-white" />
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-500 font-bold text-sm">M</span>
              </div>
              <div className="flex-1 bg-white rounded flex items-center px-3 py-2">
                <Search className="w-5 h-5 text-teal-600" />
                <span className="flex-1 ml-2 text-sm text-gray-700 truncate">Stainless Steel T Profile Near...</span>
              </div>
              <Camera className="w-6 h-6 text-white" />
              <Mic className="w-6 h-6 text-white" />
            </div>
            
            <div className="bg-white border-b border-gray-200 py-2 space-y-2">
              <div className="flex items-center gap-2 px-3 overflow-x-auto">
                <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                <div className="flex gap-2">
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm whitespace-nowrap">
                    <X className="w-3 h-3" /> Belgaum
                  </span>
                  {locationFilters.slice(1).map(loc => (
                    <span key={loc} className="px-3 py-1 border border-gray-300 rounded-full text-sm whitespace-nowrap">{loc}</span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-3 overflow-x-auto">
                <SlidersHorizontal className="w-5 h-5 text-gray-500 shrink-0" />
                <div className="flex gap-2">
                  {categoryFilters.map(cat => (
                    <span key={cat} className="px-3 py-1 border border-gray-300 rounded-full text-sm whitespace-nowrap">{cat}</span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 px-3 pl-10 overflow-x-auto">
                {priceFilters.map(price => (
                  <span key={price} className="px-3 py-1 border border-gray-300 rounded-full text-sm whitespace-nowrap">{price}</span>
                ))}
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto bg-gray-100">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="bg-white border-t border-gray-200 px-4 py-2 flex justify-around">
              <button className="flex flex-col items-center gap-0.5 text-gray-600">
                <Home className="w-6 h-6" />
                <span className="text-xs">Home</span>
              </button>
              <button className="flex flex-col items-center gap-0.5 text-gray-600">
                <MessageSquare className="w-6 h-6" />
                <span className="text-xs">Messages</span>
              </button>
              <button className="flex flex-col items-center gap-0.5 text-gray-600">
                <FileText className="w-6 h-6" />
                <span className="text-xs">Post</span>
              </button>
              <button className="flex flex-col items-center gap-0.5 text-teal-600">
                <Search className="w-6 h-6" />
                <span className="text-xs">Search</span>
              </button>
            </div>
            
            <div className="bg-white py-2 flex justify-center items-center gap-16">
              <div className="w-4 h-4 border-2 border-gray-400 rounded" />
              <div className="w-5 h-5 rounded-full border-2 border-gray-400" />
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-400" />
            </div>
          </div>
        </div>
        
        <div className="absolute -left-1 top-28 w-1 h-12 bg-gray-700 rounded-l" />
        <div className="absolute -left-1 top-44 w-1 h-8 bg-gray-700 rounded-l" />
        <div className="absolute -right-1 top-36 w-1 h-16 bg-gray-700 rounded-r" />
      </div>
    </main>
  )
}
