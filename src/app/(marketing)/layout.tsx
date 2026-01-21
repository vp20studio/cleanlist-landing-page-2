import MegaMenuNavbar from "@/components/MegaMenuNavbar";
import SiteFooter from "@/components/SiteFooter";
import FinalCTA from "@/components/FinalCTA";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background transition-colors">
      <MegaMenuNavbar />
      <main>{children}</main>
      {/* Wrap FinalCTA and Footer together to contain rocket overflow */}
      <div className="overflow-hidden">
        <FinalCTA />
        <SiteFooter />
      </div>
    </div>
  );
}
