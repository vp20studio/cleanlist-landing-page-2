import ProductNavbar from "@/components/ProductNavbar";
import Footer from "@/components/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#030303]">
      <ProductNavbar />
      {children}
      <Footer />
    </div>
  );
}
