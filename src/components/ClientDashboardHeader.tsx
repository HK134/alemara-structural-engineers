
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { 
  LogOut, 
  User, 
  Calendar, 
  Wrench, 
  HelpCircle,
  LayoutDashboard,
  FileCheck,
  Package
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const ClientDashboardHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleSupportClick = () => {
    // Scroll to FAQ section if on homepage, otherwise navigate to homepage FAQ
    if (window.location.pathname === '/') {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#faq');
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#1A1F2C]">Client Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Book Site Visit Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Book Site Visit</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Book a Site Visit</DialogTitle>
                  <DialogDescription>
                    Please select your preferred date and time for our structural engineer to visit your property.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-gray-500 mb-4">Our team is available Monday to Friday, 9am to 5pm.</p>
                  <Button className="w-full" onClick={() => navigate('/book-appointment')}>
                    Schedule Appointment
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Request Contractor Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Wrench className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Request Contractor</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Request Contractor Service</DialogTitle>
                  <DialogDescription>
                    Need help implementing our recommendations? Request our trusted contractors.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-gray-500 mb-4">Our vetted contractors can help with all structural work recommended in your report.</p>
                  <Button className="w-full" onClick={() => navigate('/request-contractor')}>
                    Request Quote
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Project Stages Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden flex items-center">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Stages</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Project Stages</DialogTitle>
                  <DialogDescription>
                    Understanding your project's current stage
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-700">Site Visit</h4>
                      <p className="text-sm text-gray-500">Our engineers visit your property to gather data and assess the structure.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileCheck className="h-5 w-5 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-amber-700">Schematic Submission</h4>
                      <p className="text-sm text-gray-500">Preliminary designs and structural calculations are prepared for your review.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Package className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-green-700">Final Package</h4>
                      <p className="text-sm text-gray-500">Complete structural report with final drawings and specifications are delivered.</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Support Button */}
            <Button variant="ghost" size="sm" onClick={handleSupportClick} className="flex items-center">
              <HelpCircle className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Support</span>
            </Button>

            {/* Profile Button */}
            <Button variant="ghost" size="sm" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Profile</span>
            </Button>
            
            {/* Logout Button */}
            <Button variant="outline" size="sm" onClick={logout} className="flex items-center">
              <LogOut className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ClientDashboardHeader;
