"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function QuoteForm() {
  return (
    <div className="my-6 max-w-2xl mx-auto bg-white border border-[var(--border)] rounded-lg p-5 shadow-sm">
      <h2 className="text-base font-medium text-[var(--im-text-dark)] mb-3">
        {"Tell us what you need, and we'll help you get quotes"}
      </h2>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label className="text-sm text-[var(--im-text-dark)] mb-1 block">
            I want quotes for<span className="text-red-500">*</span>
          </label>
          <Input 
            placeholder="Stainless Steel T Profile"
            defaultValue="Stainless Steel T Profile"
            className="h-9"
          />
        </div>
        <div className="sm:self-end">
          <Button className="w-full sm:w-auto h-9 px-6 bg-[#006a4e] hover:bg-[#005a42] text-white font-medium">
            Submit Requirement
          </Button>
        </div>
      </div>
    </div>
  )
}
