import Navbar from "@/components/Navbar";
import SubNavigation from "@/components/SubNavigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PersonaSwitcher from "@/components/PersonaSwitcher";
import DataLifecycle from "@/components/DataLifecycle";
import FeatureGrid from "@/components/FeatureGrid";
import ComparisonTable from "@/components/ComparisonTable";
import IntegrationCloud from "@/components/IntegrationCloud";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] overflow-x-hidden">
      {/* Fixed Navigation */}
      <Navbar />
      <SubNavigation />

      {/* Hero Section */}
      <Hero />

      {/* Social Proof */}
      <TrustBar />

      {/* Persona Switcher - Marketing vs Engineering */}
      <PersonaSwitcher />

      {/* Data Lifecycle Journey */}
      <DataLifecycle />

      {/* Features Bento Grid */}
      <FeatureGrid />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Integration Ecosystem */}
      <IntegrationCloud />

      {/* Pricing Section */}
      <Pricing />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
