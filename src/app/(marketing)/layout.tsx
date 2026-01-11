import MegaMenuNavbar from "@/components/MegaMenuNavbar";
import SiteFooter from "@/components/SiteFooter";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background transition-colors">
      <MegaMenuNavbar />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
