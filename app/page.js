import About from "./components/About";
import CaringSection from "./components/CaringSection";
import Clients from "./components/Clients";
import Customer from "./components/Customer";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function page() {
  return (
    <>
      <div className="md:px-28 px-10">
        <Navbar />
        <Hero />
        <Clients />
        <About />
      </div>
      <Customer />
      <div className="md:px-28 px-10">
        <CaringSection />
      </div>
      <Footer />
    </>
  );
}

export default page;
