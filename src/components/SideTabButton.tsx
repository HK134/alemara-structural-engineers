
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const SideTabButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Side Tab Button - Fixed positioning */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white rounded-l-lg rounded-r-none px-4 py-6 shadow-lg"
          style={{ 
            writingMode: 'vertical-rl', 
            textOrientation: 'mixed',
            minWidth: '60px',
            height: 'auto'
          }}
        >
          <div className="flex flex-col items-center space-y-2">
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <MessageCircle className="h-5 w-5" />
            )}
            <span className="text-sm font-medium tracking-wider whitespace-nowrap">
              {isOpen ? 'Close' : 'Book Engineer'}
            </span>
          </div>
        </Button>
      </div>

      {/* Side Panel */}
      {isOpen && (
        <div className="fixed right-0 top-0 h-full w-[450px] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out">
          <div className="h-full flex flex-col">
            <div className="p-4 bg-[#ea384c]/10 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#1A1F2C]">Book a Structural Engineer</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-1">Complete in under 2 minutes</p>
            </div>
            <div className="flex-1 overflow-hidden p-8">
              <div className="text-center py-20">
                <h4 className="text-lg font-semibold mb-4">Booking Form</h4>
                <p className="text-gray-600">Booking form will be implemented here</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideTabButton;
