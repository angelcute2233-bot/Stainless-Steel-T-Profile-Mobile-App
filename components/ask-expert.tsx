"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AskExpert() {
  return (
    <section className="bg-[var(--im-purple)] py-6">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h2 className="text-white text-lg font-medium shrink-0">
            Have a Question? Ask our expert
          </h2>
          
          <div className="flex-1 w-full md:max-w-xl">
            <div className="flex bg-white rounded-full overflow-hidden">
              <Input 
                type="text"
                placeholder="Enter your question here..."
                className="border-0 focus-visible:ring-0 h-11 rounded-full px-4"
              />
              <Button className="h-11 px-6 bg-[var(--im-teal)] hover:bg-[var(--im-dark-teal)] rounded-full m-1 text-white font-medium">
                Ask Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
