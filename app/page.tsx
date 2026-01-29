import MobileHeader from "@/components/mobile-header"
import MobileFilters from "@/components/mobile-filters"
import MobileProductList from "@/components/mobile-product-list"
import MobileBottomNav from "@/components/mobile-bottom-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      {/* Mobile Phone Frame */}
      <div className="relative">
        {/* Phone Outer Frame */}
        <div className="relative bg-gray-800 rounded-[3rem] p-3 shadow-2xl">
          {/* Status Bar */}
          <div className="bg-gray-900 rounded-t-[2.5rem] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-2 text-white text-xs">
              <span className="font-medium">1:22</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm0-16c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/>
                </svg>
                <span className="text-xs">Vol</span>
                <div className="flex items-center gap-0.5">
                  <div className="w-1 h-2 bg-white rounded-sm opacity-40"></div>
                  <div className="w-1 h-3 bg-white rounded-sm opacity-60"></div>
                  <div className="w-1 h-4 bg-white rounded-sm opacity-80"></div>
                  <div className="w-1 h-5 bg-white rounded-sm"></div>
                </div>
                <span className="ml-1">89%</span>
                <svg className="w-6 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="6" width="18" height="12" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="20" y="9" width="2" height="6" rx="1"/>
                  <rect x="4" y="8" width="14" height="8" rx="1" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Phone Screen */}
          <div className="w-[375px] h-[750px] bg-white rounded-b-[2.5rem] overflow-hidden flex flex-col">
            {/* App Content */}
            <MobileHeader />
            <MobileFilters />
            
            {/* Scrollable Product List */}
            <div className="flex-1 overflow-y-auto">
              <MobileProductList />
            </div>
            
            <MobileBottomNav />
          </div>
        </div>
        
        {/* Phone Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl"></div>
        
        {/* Side Buttons */}
        <div className="absolute -left-1 top-28 w-1 h-12 bg-gray-700 rounded-l"></div>
        <div className="absolute -left-1 top-44 w-1 h-8 bg-gray-700 rounded-l"></div>
        <div className="absolute -left-1 top-56 w-1 h-8 bg-gray-700 rounded-l"></div>
        <div className="absolute -right-1 top-36 w-1 h-16 bg-gray-700 rounded-r"></div>
      </div>
    </div>
  )
}
