import { ChevronRight } from "lucide-react"

export default function Breadcrumb() {
  const items = [
    { label: "IndiaMART", href: "/" },
    { label: "Steel & Stainless Steel Products", href: "#" },
    { label: "Steel Profile", href: "#" },
    { label: "Stainless Steel T Profile", href: "#", active: true },
  ]
  
  return (
    <div className="bg-white border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-4 py-2">
        <nav className="flex items-center gap-1 text-xs">
          {items.map((item, index) => (
            <div key={item.label} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="w-3 h-3 text-[var(--im-text-gray)]" />}
              <a 
                href={item.href}
                className={`hover:underline ${
                  item.active 
                    ? "text-[var(--im-text-dark)] font-medium" 
                    : "text-[var(--im-blue)]"
                }`}
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
