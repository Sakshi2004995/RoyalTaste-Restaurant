import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Loader />

      <Navbar />
      <Hero />
      <About />
      <Features />
      <Menu />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;