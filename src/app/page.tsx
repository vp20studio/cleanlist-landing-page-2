import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeatureGrid from "@/components/FeatureGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303]">
      <Navbar />
      <Hero />
      <TrustBar />
      <FeatureGrid />
    </main>
  );
}
