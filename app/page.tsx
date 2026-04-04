import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { OfferingsSection } from "@/components/offerings-section"
import { ActivitiesSection } from "@/components/activities-section"
import { FestivalSection } from "@/components/festival-section"
import { EventsSection } from "@/components/events-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { StaffSection } from "@/components/staff-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <ActivitiesSection />
      <FestivalSection />
      <EventsSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <StaffSection />
      <PartnersSection />
      <Footer />
    </main>
  )
}
