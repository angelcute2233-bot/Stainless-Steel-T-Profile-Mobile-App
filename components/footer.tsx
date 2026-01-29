import { Facebook, Twitter, Linkedin, Smartphone } from "lucide-react"

const footerSections = [
  {
    title: "About Us",
    links: ["About Us", "IndiaMART Export", "Join Sales", "Success Stories", "Press Section", "Advertise with Us"],
  },
  {
    title: "Help",
    links: ["Feedback", "Complaints", "Customer Care", "Contact Us"],
  },
  {
    title: "Suppliers Tool Kit",
    links: ["Sell on IndiaMART", "Latest BuyLead", "Learning Centre", "Ship With IndiaMART"],
  },
  {
    title: "Buyers Tool Kit",
    links: ["Post Your Requirement", "Products You Buy", "Search Products & Suppliers"],
  },
  {
    title: "Accounting Solutions",
    links: ["Accounting Software", "Tally on Mobile", "GST e-Invoice"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--im-light-gray)] border-t border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-[var(--border)]">
          <h3 className="text-lg font-medium text-[var(--im-text-dark)] mb-4 md:mb-0">
            We are here to help you!
          </h3>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-[var(--im-text-gray)]">
              <span>Go Mobile:</span>
              <Smartphone className="w-5 h-5" />
              <Smartphone className="w-5 h-5" />
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-[var(--im-text-gray)]">Follow us on:</span>
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-80">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white hover:opacity-80">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-medium text-[var(--im-text-dark)] mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[var(--im-text-gray)] hover:text-[var(--im-blue)]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[var(--border)] text-center">
          <p className="text-sm text-[var(--im-text-gray)]">
            {"© 1996-2026 IndiaMART InterMESH Ltd. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
