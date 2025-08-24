
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Alemara Structural Engineers</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore our structural engineering services for London properties or return to our homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#f8f9fa] py-20">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-8xl font-bold text-[#1A1F2C] mb-6">404</h1>
          <h2 className="text-3xl font-semibold text-[#1A1F2C] mb-4">Oops! Page not found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/">
              <Button className="bg-[#ea384c] hover:bg-[#c82b3c] text-white px-6 py-6 h-auto text-lg">
                Return to Home
              </Button>
            </Link>
            <Link to="/about-us">
              <Button variant="outline" className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white px-6 py-6 h-auto text-lg">
                About Us
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white px-6 py-6 h-auto text-lg">
                Our Services
              </Button>
            </Link>
            <Link to="/#contact">
              <Button variant="outline" className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white px-6 py-6 h-auto text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
