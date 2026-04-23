import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Networks from "@/components/sections/Networks";
import Overview from "@/components/sections/Overview";
import ToolsBento from "@/components/sections/ToolsBento";
import Market from "@/components/sections/Market";
import Ranks from "@/components/sections/Ranks";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Networks />
      <Overview />
      <ToolsBento />
      <Market />
      <Ranks />
      <CTA />
      <Footer />
    </main>
  );
}
