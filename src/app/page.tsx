import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Perf from "@/components/Perf";
import FormatShow from "@/components/FormatShow";
import PitchOverview from "@/components/PitchOverview";
import LiveNightsSection from "@/components/LiveNightsSection";
import WatchPartiesSection from "@/components/WatchPartiesSection";
import Lineup from "@/components/Lineup";
import WhyPawnShop from "@/components/WhyPawnShop";
import Ask from "@/components/Ask";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="bulb-bar" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Perf />
        <FormatShow />
        <Perf />
        <PitchOverview />
        <Perf />
        <LiveNightsSection />
        <Perf />
        <WatchPartiesSection />
        <Perf />
        <Lineup />
        <Perf />
        <WhyPawnShop />
        <Perf />
        <Ask />
      </main>
      <Footer />
    </>
  );
}
