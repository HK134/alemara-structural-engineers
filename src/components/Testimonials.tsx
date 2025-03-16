
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The structural survey was incredibly thorough and revealed issues we would have completely missed. Saved us thousands in potential repairs.",
    author: "Sarah Johnson",
    location: "Chelsea, London",
    rating: 5
  },
  {
    quote: "Fast, professional and extremely knowledgeable about London's Victorian properties. The report was clear and helped us negotiate a better price.",
    author: "James Wilson",
    location: "Islington, London",
    rating: 5
  },
  {
    quote: "As first-time buyers, we were nervous about structural issues. The survey team was patient, explained everything clearly and gave us confidence in our purchase.",
    author: "Emma and Tom Davis",
    location: "Greenwich, London",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-survey-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            We've helped hundreds of property owners and buyers across London make informed decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/15 transition-colors">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-survey-accent text-survey-accent" />
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
