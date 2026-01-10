import MegaMenuNavbar from "@/components/MegaMenuNavbar";
import SiteFooter from "@/components/SiteFooter";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#030303]">
      <MegaMenuNavbar />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
