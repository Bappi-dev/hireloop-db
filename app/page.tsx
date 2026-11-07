import Banner from "@/components/Banner"
import StatsSection from "@/components/StatsSection"
import JobDiscovery from "@/components/JobDiscovery"
import FeaturesSection from "@/components/FeaturesSection"
import PricingSection from "@/components/PricingSection"
import CtaSection from "@/components/CtaSection"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-background text-foreground">
      {/* 1. Hero / Search Banner */}
      <Banner />

      {/* 2. Key Metrics & Stats */}
      <StatsSection />

      {/* 3. Smart Job Discovery */}
      <JobDiscovery />

      {/* 4. Features: Everything you need to succeed */}
      <FeaturesSection />

      {/* 5. Pricing Tiers */}
      <PricingSection />

      {/* 6. Horizon CTA Section */}
      <CtaSection />

      {/* 7. Footer */}
      <Footer />
    </div>
  )
}
