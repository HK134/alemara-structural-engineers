
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  caption?: string;
}

const ImageLightbox = ({ isOpen, onClose, image, caption }: ImageLightboxProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl p-2 bg-black border-none">
        <div className="relative">
          <img 
            src={image} 
            alt="Project image" 
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          <Button
            variant="ghost"
            size="icon" 
            className="absolute top-2 right-2 bg-black/20 hover:bg-black/40 text-white rounded-full"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          
          {caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
              <p className="text-sm">{caption}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
