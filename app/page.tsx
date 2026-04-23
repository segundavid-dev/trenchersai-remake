import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Networks from "@/components/sections/Networks";
import Overview from "@/components/sections/Overview";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Networks />
      <Overview />
    </main>
  );
}
