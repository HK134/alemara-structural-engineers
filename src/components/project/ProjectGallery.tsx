
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface ProjectGalleryProps {
  images: string[];
  title: string;
  imageAlt?: string[];
}

const ProjectGallery = ({ images, title, imageAlt }: ProjectGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  if (!images || images.length === 0) {
    return null;
  }

  // Get alt text for an image
  const getImageAlt = (index: number) => {
    if (imageAlt && imageAlt[index]) {
      return imageAlt[index];
    }
    return `${title} - Image ${index + 1}`;
  };

  // Handle image loading errors
  const handleImageError = (image: string, index: number) => {
    console.error(`Failed to load image for ${index}:`, image);
    setImageErrors(prev => ({...prev, [image]: true}));
    
    // Special handling for Cheval Place images
    if (title.includes('Cheval Place')) {
      const chevalPlaceFallbacks = [
        '/lovable-uploads/47d1f9e3-73d5-4a64-8f4f-99b79fb319bf.png',
        '/lovable-uploads/f584a768-55ab-44d7-8634-9a6e94adda2b.png',
        '/lovable-uploads/cd25898b-c49e-4558-b60b-61a6fb9174df.png'
      ];
      
      if (index < chevalPlaceFallbacks.length) {
        const target = document.getElementById(`gallery-img-${index}`) as HTMLImageElement;
        if (target) {
          target.src = chevalPlaceFallbacks[index];
          setImageErrors(prev => ({...prev, [image]: false}));
        }
        return;
      }
    }
    
    // Default fallback
    const target = document.getElementById(`gallery-img-${index}`) as HTMLImageElement;
    if (target) {
      target.src = 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500';
    }
  };

  return (
    <div className="mt-12">
      <h4 className="text-xl font-semibold mb-6 text-center">Project Gallery</h4>
      
      {/* Image Carousel */}
      <div className="max-w-4xl mx-auto px-10">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image: string, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div 
                  className="p-1 h-full aspect-[4/3]"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="h-full overflow-hidden rounded-lg cursor-pointer">
                    <img 
                      id={`gallery-img-${index}`}
                      src={image} 
                      alt={getImageAlt(index)}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      loading="lazy"
                      width="400"
                      height="300"
                      onError={() => handleImageError(image, index)}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
      
      {/* Thumbnail gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {images.slice(0, 8).map((image: string, index: number) => (
          <div 
            key={index} 
            className="aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image} 
              alt={getImageAlt(index)} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width="200"
              height="150"
              onError={() => handleImageError(image, index)}
            />
          </div>
        ))}
      </div>
      
      {/* Image lightbox/modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-2 bg-black border-none">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage} 
                alt="Project image" 
                className="w-full h-auto max-h-[80vh] object-contain"
                onError={() => {
                  const target = document.querySelector('.dialog-img') as HTMLImageElement;
                  if (target) {
                    if (title.includes('Cheval Place')) {
                      target.src = '/lovable-uploads/47d1f9e3-73d5-4a64-8f4f-99b79fb319bf.png';
                    } else {
                      target.src = 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500';
                    }
                  }
                }}
              />
              <Button
                variant="ghost"
                size="icon" 
                className="absolute top-2 right-2 bg-black/20 hover:bg-black/40 text-white rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectGallery;
