"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const relatedCategories = [
  "Stainless Steel Profiles",
  "SS Decorative Profiles",
  "T Section Bars",
  "Stainless Steel Channels",
  "SS L Profile",
  "SS U Profile",
  "Metal Trim Profiles",
  "PVD Coated Profiles",
]

const availableGrades = [
  { grade: "SS 202", description: "Budget-friendly option for indoor decorative use" },
  { grade: "SS 304", description: "Most popular, excellent corrosion resistance" },
  { grade: "SS 304L", description: "Lower carbon for better weldability" },
  { grade: "SS 316", description: "Marine grade, superior corrosion resistance" },
  { grade: "SS 316L", description: "Lower carbon variant with better weldability and corrosion resistance" },
]

const availableSizes = [
  "20mm x 20mm",
  "25mm x 25mm",
  "30mm x 30mm",
  "40mm x 40mm",
]

const availableThickness = [
  "1.0mm",
  "1.5mm",
  "2.0mm",
  "3.0mm",
  "5.0mm",
]

const gradeUsage = [
  { grade: "SS 202", usage: "Cost-effective indoor decorative trims and frames" },
  { grade: "SS 304/304L", usage: "Architectural applications, handrails, kitchen frames, indoor/outdoor structural supports" },
  { grade: "SS 316/316L", usage: "Marine environments, chemical processing, coastal areas, swimming pools" },
]

const gradeDifferences = [
  {
    question: "What is the difference between SS 202 and SS 304?",
    answer: "SS 202 is a budget-friendly option, while SS 304 offers better corrosion resistance and is more suitable for various applications."
  },
  {
    question: "What makes SS 304L different from SS 304?",
    answer: "SS 304L has a lower carbon content, making it easier to weld and offering better corrosion resistance."
  },
  {
    question: "How does SS 316 differ from SS 304?",
    answer: "SS 316 is a marine-grade stainless steel with superior corrosion resistance compared to SS 304."
  },
  {
    question: "What are the advantages of SS 316L over SS 316?",
    answer: "SS 316L has a lower carbon content, improving its weldability and corrosion resistance in harsh environments."
  },
]

export default function FAQSection() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-xl font-medium text-[var(--im-text-dark)] mb-6">
          Frequently Asked Questions about Stainless Steel T Profile
        </h2>
        
        <Accordion type="multiple" className="space-y-2">
          {/* Related Categories */}
          <AccordionItem value="related-categories" className="border border-[var(--border)] rounded px-4">
            <AccordionTrigger className="text-[var(--im-text-dark)] font-medium hover:no-underline">
              Related Categories
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2 pb-2">
                {relatedCategories.map((category) => (
                  <a 
                    key={category}
                    href="#"
                    className="px-3 py-1.5 bg-gray-100 rounded text-sm text-[var(--im-text-dark)] hover:bg-[var(--im-teal)] hover:text-white transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Available Grades */}
          <AccordionItem value="available-grades" className="border border-[var(--border)] rounded px-4">
            <AccordionTrigger className="text-[var(--im-text-dark)] font-medium hover:no-underline">
              What grades are available for SS T Profile?
            </AccordionTrigger>
            <AccordionContent>
              <div className="pb-2">
                <p className="text-sm text-[var(--im-text-gray)] mb-3">
                  SS 202, SS 304, SS 304L, SS 316, SS 316L. "L" variants have lower carbon for better weldability and corrosion resistance.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Available Sizes */}
          <AccordionItem value="available-sizes" className="border border-[var(--border)] rounded px-4">
            <AccordionTrigger className="text-[var(--im-text-dark)] font-medium hover:no-underline">
              What sizes and lengths are typically available?
            </AccordionTrigger>
            <AccordionContent>
              <div className="pb-2">
                <p className="text-sm text-[var(--im-text-gray)] mb-3">
                  Standard sizes:   T6, T8, T10, T12, T19, T25, T32, T38, T50. Thickness: 1.0mm to 5.0mm. Standard length: 3m (10ft), with custom cutting options.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Grade-wise Usage */}
          <AccordionItem value="grade-usage" className="border border-[var(--border)] rounded px-4">
            <AccordionTrigger className="text-[var(--im-text-dark)] font-medium hover:no-underline">
              Which grade should I use for my application?
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pb-2">
                {gradeUsage.map((item) => (
                  <div key={item.grade} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <span className="font-medium text-[var(--im-text-dark)]">{item.grade}</span>
                    <p className="text-sm text-[var(--im-text-gray)] mt-1">{item.usage}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
