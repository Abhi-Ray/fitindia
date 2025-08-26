import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Diet from "./pages/Diet";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const SEOUpdater = () => {
  const location = useLocation();
  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const set = (title: string, desc: string) => {
      document.title = title;
      if (metaDesc) metaDesc.setAttribute("content", desc);
      const url = `${window.location.origin}${location.pathname}`;
      canonical!.setAttribute('href', url);
    };
    switch (location.pathname) {
      case "/":
        set(
          "Fit India Gym | Premium Fitness Studio in Pithampur",
          "Fit India Gym in Pithampur: premium fitness studio with expert trainers, modern equipment, and personalized diet plans. Join the best gym in Pithampur today."
        );
        break;
      case "/about":
        set(
          "About | Fit India Gym Pithampur",
          "Learn about Fit India Gym: our mission, expert trainers, facilities, and commitment to your fitness journey in Pithampur."
        );
        break;
      case "/membership":
        set(
          "Membership Plans | Fit India Gym",
          "Choose affordable gym membership plans at Fit India Gym Pithampur. Flexible options for beginners to advanced athletes."
        );
        break;
      case "/diet":
        set(
          "Diet & Nutrition | Fit India Gym",
          "Personalized Indian diet and nutrition plans crafted by experts to support your fitness goals at Fit India Gym."
        );
        break;
      case "/gallery":
        set(
          "Gallery | Fit India Gym Facilities & Members",
          "Explore Fit India Gym's modern facilities, equipment, and member transformations in our gallery."
        );
        break;
      case "/contact":
        set(
          "Contact | Fit India Gym Pithampur",
          "Get in touch with Fit India Gym. Call +91 8718074703 or visit our branches in Pithampur, Madhya Pradesh."
        );
        break;
      default:
        set("Page Not Found | Fit India Gym", "The page you are looking for does not exist.");
    }
  }, [location.pathname]);
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="pt-16">
            <SEOUpdater />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/diet" element={<Diet />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
