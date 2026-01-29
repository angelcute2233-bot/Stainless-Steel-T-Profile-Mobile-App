import Image from "next/image"

const recommendations = [
  {
    name: "Stainless Steel T Profile, Silver Finish",
    price: "₹ 220/Piece",
    image: "/images/product-1.png",
  },
  {
    name: "Golden T Profile Strips Set",
    price: "₹ 380/Set",
    image: "/images/product-2.png",
  },
  {
    name: "Industrial Grade T Section Steel",
    price: "₹ 180/Piece",
    image: "/images/product-3.png",
  },
  {
    name: "Multi-Color Decorative T Profiles",
    price: "₹ 550/Set",
    image: "/images/product-7.png",
  },
]

export default function FeaturedRecommendations() {
  return (
    <div className="my-8">
      <h2 className="text-lg font-medium text-[var(--im-blue)] mb-4">Featured Recommendations</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recommendations.map((item, index) => (
          <a 
            key={index} 
            href="#" 
            className="bg-white border border-[var(--border)] rounded p-2 hover:shadow-md transition-shadow group"
          >
            <div className="h-[80px] relative mb-2 bg-gray-50 rounded overflow-hidden flex items-center justify-center">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <h3 className="text-sm text-[var(--im-text-dark)] mb-2 line-clamp-2 leading-tight group-hover:text-[var(--im-blue)]">
              {item.name}
            </h3>
            <p className="text-sm font-medium text-[var(--im-text-dark)]">{item.price}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
