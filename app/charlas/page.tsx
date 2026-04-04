import { CharlasSection } from "@/components/charlas-section"

export const revalidate = 3600

export default function CharlasPage() {
  return (
    <main className="min-h-screen">
      <CharlasSection />
    </main>
  )
}