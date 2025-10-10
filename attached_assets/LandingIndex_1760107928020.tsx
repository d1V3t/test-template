import Navigation from "@/components/Navigation";
import Home from "./Home";
import Footer from "@/components/Footer";

const LandingIndex = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
};

export default LandingIndex;