import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import About from "./components/About";
import Customer from "./components/Customer";
import CaringSection from "./components/CaringSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      
      <div className="flex flex-col gap-0">
        <Hero />
        <Clients />
        <About />
        <Customer />
        <CaringSection />
      </div>

      <Footer />
    </main>
  );
}
