
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
  title: string;
  imageAlt?: string[];
}

const ProjectGallery = ({ images, title, imageAlt }: ProjectGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length <= 1) {
    return null;
  }

  // Get alt text for an image
  const getImageAlt = (index: number) => {
    if (imageAlt && imageAlt[index]) {
      return imageAlt[index];
    }
    return `${title} - Image ${index + 1}`;
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h3 className="text-lg font-semibold mb-4">Project Gallery</h3>
      
      {/* Simple grid gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.slice(1).map((image: string, index: number) => (
          <div 
            key={index} 
            className="aspect-square overflow-hidden rounded-md shadow-sm cursor-pointer hover:shadow-md transition-all"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image} 
              alt={getImageAlt(index + 1)} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width="200"
              height="200"
            />
          </div>
        ))}
      </div>
      
      {/* Image modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-2 bg-black border-none">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage} 
                alt={`${title} project image`} 
                className="w-full h-auto max-h-[70vh] object-contain"
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
