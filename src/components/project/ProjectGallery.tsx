
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
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
  const [processedImages, setProcessedImages] = useState<string[]>(images);

  useEffect(() => {
    setProcessedImages(images);
  }, [images]);

  if (!images || images.length === 0) {
    return null;
  }

  // Check if the image is a Supabase storage URL
  const isSupabaseStorageUrl = (url: string): boolean => {
    return url.startsWith('https://alwjzubhrjubtvwenyqt.supabase.co/storage/v1/object/public/');
  };

  // Get alt text for an image
  const getImageAlt = (index: number) => {
    if (imageAlt && imageAlt[index]) {
      return imageAlt[index];
    }
    return `${title} - Image ${index + 1}`;
  };

  // Handle image loading errors with improved fallbacks
  const handleImageError = (image: string, index: number) => {
    console.error(`Failed to load image for ${title} (index ${index}):`, image);
    setImageErrors(prev => ({...prev, [image]: true}));
    
    const target = document.getElementById(`gallery-img-${index}`) as HTMLImageElement;
    if (!target) return;
    
    // Check if it's a Supabase URL that failed
    if (isSupabaseStorageUrl(image)) {
      // For Supabase URLs, we'll try to get a direct URL as fallback
      try {
        // Extract path from URL
        const path = image.split('public/website-images/')[1];
        if (path) {
          // Try to use a project-specific fallback instead
          if (title.includes('Cheval Place')) {
            target.src = '/lovable-uploads/fcdb272d-9ef4-44ba-9409-ae7576efe782.png';
            setImageErrors(prev => ({...prev, [image]: false}));
            return;
          } else if (title.includes('Victoria Park')) {
            target.src = '/lovable-uploads/f7869f8f-7c74-4b3b-927d-b68dcbd70016.png';
            setImageErrors(prev => ({...prev, [image]: false}));
            return;
          } else if (title.includes('Warrington Crescent')) {
            target.src = '/lovable-uploads/5fee22ca-8fc0-40ec-afa2-94dc5b75eb98.png';
            setImageErrors(prev => ({...prev, [image]: false}));
            return;
          }
        }
      } catch (err) {
        console.error('Error handling Supabase image fallback:', err);
      }
    }
    
    // Special handling for specific projects
    if (title.includes('Cheval Place')) {
      const chevalPlaceFallbacks = [
        '/lovable-uploads/fcdb272d-9ef4-44ba-9409-ae7576efe782.png',
        '/lovable-uploads/f584a768-55ab-44d7-8634-9a6e94adda2b.png',
        '/lovable-uploads/cd25898b-c49e-4558-b60b-61a6fb9174df.png'
      ];
      
      if (index < chevalPlaceFallbacks.length) {
        target.src = chevalPlaceFallbacks[index];
        setImageErrors(prev => ({...prev, [image]: false}));
        return;
      }
    }
    
    if (title.includes('Victoria Park')) {
      target.src = '/lovable-uploads/f7869f8f-7c74-4b3b-927d-b68dcbd70016.png';
      setImageErrors(prev => ({...prev, [image]: false}));
      return;
    }
    
    if (title.includes('Warrington Crescent')) {
      target.src = '/lovable-uploads/5fee22ca-8fc0-40ec-afa2-94dc5b75eb98.png';
      setImageErrors(prev => ({...prev, [image]: false}));
      return;
    }
    
    // Default fallback
    target.src = '/placeholder.svg';
    toast.error(`Could not load gallery image ${index + 1}`);
  };

  return (
    <div className="mt-12">
      <h4 className="text-xl font-semibold mb-6 text-center">Project Gallery</h4>
      
      {/* Image Carousel */}
      <div className="max-w-4xl mx-auto px-10">
        <Carousel className="w-full">
          <CarouselContent>
            {processedImages.map((image: string, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div 
                  className="p-1 h-full aspect-[4/3]"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="h-full overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all">
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
        {processedImages.slice(0, 8).map((image: string, index: number) => (
          <div 
            key={index} 
            className="aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all"
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
                className="w-full h-auto max-h-[80vh] object-contain dialog-img"
                onError={() => {
                  const target = document.querySelector('.dialog-img') as HTMLImageElement;
                  if (!target) return;
                  
                  if (title.includes('Cheval Place')) {
                    target.src = '/lovable-uploads/fcdb272d-9ef4-44ba-9409-ae7576efe782.png';
                  } else if (title.includes('Victoria Park')) {
                    target.src = '/lovable-uploads/f7869f8f-7c74-4b3b-927d-b68dcbd70016.png';
                  } else if (title.includes('Warrington Crescent')) {
                    target.src = '/lovable-uploads/5fee22ca-8fc0-40ec-afa2-94dc5b75eb98.png';
                  } else {
                    target.src = '/placeholder.svg';
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
