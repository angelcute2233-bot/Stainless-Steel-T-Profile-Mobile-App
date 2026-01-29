import Header from "@/components/header"
import Breadcrumb from "@/components/breadcrumb"
import CityBar from "@/components/city-bar"
import LeftSidebar from "@/components/left-sidebar"
import ProductListing from "@/components/product-listing"
import RightSidebar from "@/components/right-sidebar"
import QuoteForm from "@/components/quote-form"
import FeaturedRecommendations from "@/components/featured-recommendations"
import FAQSection from "@/components/faq-section"
import AskExpert from "@/components/ask-expert"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--im-gray-bg)]">
      <Header />
      <Breadcrumb />
      <main className="max-w-[1400px] mx-auto px-4">
        <div className="py-4">
          <h1 className="text-xl font-medium text-[var(--im-text-dark)]">
            Stainless Steel T Profile / Patti{" "}
            <span className="text-sm font-normal text-[var(--im-text-gray)]">
              (500+ products available)
            </span>
          </h1>
        </div>
        <CityBar />
        
        <div className="flex gap-4 mt-4">
          {/* Left Sidebar - Filters */}
          <aside className="hidden lg:block w-[200px] shrink-0">
            <LeftSidebar />
          </aside>
          
          {/* Main Content - Product Listings */}
          <div className="flex-1 min-w-0">
            <ProductListing />
            <QuoteForm />
            <FAQSection />
            <ProductListing showSecondSet />
          </div>
          
          {/* Right Sidebar */}
          <aside className="hidden xl:block w-[280px] shrink-0">
            <RightSidebar />
          </aside>
        </div>
        
        <FeaturedRecommendations />
      </main>
      
      <AskExpert />
      <Footer />
    </div>
  )
}
