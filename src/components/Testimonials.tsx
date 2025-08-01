
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Alemara's structural assessment was incredibly thorough. They identified issues that the initial RICS survey missed and provided clear guidance on remedial work. Saved us from a potentially expensive mistake.",
    author: "Sarah Johnson",
    location: "Islington, London",
    rating: 5
  },
  {
    quote: "After noticing cracks in our Victorian terrace, we were worried about subsidence. Alemara's engineers conducted a detailed assessment, explained the actual cause was much simpler, and saved us thousands on unnecessary work.",
    author: "James Wilson",
    location: "Greenwich, London",
    rating: 5
  },
  {
    quote: "As a property developer, I regularly use Alemara for structural inspections. Their reports are detailed yet easy to understand, and their recommendations are always practical and cost-effective.",
    author: "Emma Davis",
    location: "Kensington, London",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            We've helped hundreds of property owners across London understand and address structural concerns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/15 transition-colors">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#ea384c] text-[#ea384c]" />
                  ))}
                </div>
                <p className="mb-4 text-gray-100 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="border-t border-white/20 pt-4 flex flex-col items-start">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-300">{testimonial.location}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
