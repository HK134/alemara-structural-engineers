
import React, { useEffect, useRef, useState } from "react";
import { Canvas, TEvent, Point, Rect, Circle, Textbox } from "fabric";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Square, 
  Circle as CircleIcon, 
  Type, 
  Eraser, 
  Download,
  Pencil,
  MousePointer,
  ArrowUp,
  ArrowDown
} from "lucide-react";

interface WhiteboardCanvasProps {
  projectId: string | number;
  readOnly?: boolean;
  onSave?: (canvasData: string) => void;
}

const WhiteboardCanvas = ({ projectId, readOnly = false, onSave }: WhiteboardCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<Canvas | null>(null);
  const [activeObject, setActiveObject] = useState<any | null>(null);
  const [activeTool, setActiveTool] = useState<"select" | "draw" | "rectangle" | "circle" | "text" | "eraser">("select");
  const { toast } = useToast();

  // Initialize fabric canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = new Canvas(canvasRef.current, {
      width: canvasRef.current.clientWidth,
      height: 600,
      backgroundColor: "#ffffff",
      isDrawingMode: false,
    });

    // Set up drawing brush
    canvas.freeDrawingBrush.width = 2;
    canvas.freeDrawingBrush.color = "#000000";
    
    // Event listeners
    canvas.on("selection:created", (e: TEvent) => {
      if (e.selected && e.selected.length > 0) {
        setActiveObject(e.selected[0]);
      }
    });
    
    canvas.on("selection:updated", (e: TEvent) => {
      if (e.selected && e.selected.length > 0) {
        setActiveObject(e.selected[0]);
      }
    });
    
    canvas.on("selection:cleared", () => {
      setActiveObject(null);
    });
    
    // Set canvas for component use
    setFabricCanvas(canvas);
    
    // Cleanup
    return () => {
      canvas.dispose();
    };
  }, []);
  
  // Update canvas mode based on active tool
  useEffect(() => {
    if (!fabricCanvas) return;
    
    fabricCanvas.isDrawingMode = activeTool === "draw";
    
    // Set cursor based on active tool
    switch (activeTool) {
      case "select":
        fabricCanvas.defaultCursor = "default";
        break;
      case "draw":
        fabricCanvas.defaultCursor = "crosshair";
        break;
      case "rectangle":
      case "circle":
      case "text":
        fabricCanvas.defaultCursor = "crosshair";
        break;
      case "eraser":
        fabricCanvas.defaultCursor = "cell";
        break;
      default:
        fabricCanvas.defaultCursor = "default";
    }
    
  }, [activeTool, fabricCanvas]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!fabricCanvas || !canvasRef.current) return;
      
      const width = canvasRef.current.clientWidth;
      fabricCanvas.setWidth(width);
      fabricCanvas.renderAll();
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fabricCanvas]);
  
  const handleToolClick = (tool: typeof activeTool) => {
    setActiveTool(tool);
  };
  
  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!fabricCanvas) return;
    
    // Get canvas coordinates
    const pointer = fabricCanvas.getPointer(event.nativeEvent as any);
    
    // Add shapes based on active tool
    switch (activeTool) {
      case "rectangle":
        const rect = new Rect({
          left: pointer.x - 50,
          top: pointer.y - 50,
          width: 100,
          height: 100,
          fill: "transparent",
          stroke: "#000000",
          strokeWidth: 2,
        });
        fabricCanvas.add(rect);
        fabricCanvas.setActiveObject(rect);
        break;
        
      case "circle":
        const circle = new Circle({
          left: pointer.x - 50,
          top: pointer.y - 50,
          radius: 50,
          fill: "transparent",
          stroke: "#000000",
          strokeWidth: 2,
        });
        fabricCanvas.add(circle);
        fabricCanvas.setActiveObject(circle);
        break;
        
      case "text":
        const text = new Textbox("Double click to edit", {
          left: pointer.x - 75,
          top: pointer.y - 12,
          width: 150,
          fontSize: 16,
          fill: "#000000",
          editable: true,
        });
        fabricCanvas.add(text);
        fabricCanvas.setActiveObject(text);
        break;
        
      case "eraser":
        // Erase objects under pointer
        const objects = fabricCanvas.getObjects();
        for (let i = objects.length - 1; i >= 0; i--) {
          const object = objects[i];
          if (object.containsPoint(pointer as Point)) {
            fabricCanvas.remove(object);
            break;
          }
        }
        break;
    }
    
    fabricCanvas.renderAll();
  };
  
  const handleDelete = () => {
    if (!fabricCanvas) return;
    
    const activeObjects = fabricCanvas.getActiveObjects();
    if (activeObjects.length > 0) {
      fabricCanvas.remove(...activeObjects);
      fabricCanvas.discardActiveObject();
      fabricCanvas.renderAll();
      setActiveObject(null);
      
      toast({
        title: "Deleted",
        description: "Selected items have been deleted",
      });
    }
  };
  
  const handleClear = () => {
    if (!fabricCanvas) return;
    
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = "#ffffff";
    fabricCanvas.renderAll();
    
    toast({
      title: "Canvas cleared",
      description: "All items have been removed from the whiteboard",
    });
  };
  
  const handleSave = () => {
    if (!fabricCanvas) return;
    
    // Convert canvas to JSON and save
    const canvasData = JSON.stringify(fabricCanvas.toJSON());
    if (onSave) {
      onSave(canvasData);
    }
    
    // Also offer download of image
    const dataURL = fabricCanvas.toDataURL({
      format: "png",
      quality: 1,
      multiplier: 1
    });
    
    toast({
      title: "Whiteboard saved",
      description: "Your whiteboard has been saved successfully",
    });
    
    return dataURL;
  };
  
  const handleDownload = () => {
    if (!fabricCanvas) return;
    
    const dataURL = fabricCanvas.toDataURL({
      format: "png",
      quality: 1,
      multiplier: 1
    });
    
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = `whiteboard-${projectId}.png`;
    link.click();
    
    toast({
      title: "Download started",
      description: "Your whiteboard image is downloading",
    });
  };
  
  const handleBringToFront = () => {
    if (!fabricCanvas || !activeObject) return;
    activeObject.bringToFront();
    fabricCanvas.renderAll();
  };
  
  const handleSendToBack = () => {
    if (!fabricCanvas || !activeObject) return;
    activeObject.sendToBack();
    fabricCanvas.renderAll();
  };

  return (
    <div className="whiteboard-container">
      {!readOnly && (
        <div className="flex flex-wrap gap-2 mb-4">
          <Button
            size="sm"
            variant={activeTool === "select" ? "default" : "outline"}
            onClick={() => handleToolClick("select")}
          >
            <MousePointer className="h-4 w-4 mr-2" />
            Select
          </Button>
          
          <Button
            size="sm"
            variant={activeTool === "draw" ? "default" : "outline"}
            onClick={() => handleToolClick("draw")}
          >
            <Pencil className="h-4 w-4 mr-2" />
            Draw
          </Button>
          
          <Button
            size="sm"
            variant={activeTool === "rectangle" ? "default" : "outline"}
            onClick={() => handleToolClick("rectangle")}
          >
            <Square className="h-4 w-4 mr-2" />
            Rectangle
          </Button>
          
          <Button
            size="sm"
            variant={activeTool === "circle" ? "default" : "outline"}
            onClick={() => handleToolClick("circle")}
          >
            <CircleIcon className="h-4 w-4 mr-2" />
            Circle
          </Button>
          
          <Button
            size="sm"
            variant={activeTool === "text" ? "default" : "outline"}
            onClick={() => handleToolClick("text")}
          >
            <Type className="h-4 w-4 mr-2" />
            Text
          </Button>
          
          <Button
            size="sm"
            variant={activeTool === "eraser" ? "default" : "outline"}
            onClick={() => handleToolClick("eraser")}
          >
            <Eraser className="h-4 w-4 mr-2" />
            Eraser
          </Button>
          
          {activeObject && (
            <>
              <Button
                size="sm"
                variant="outline"
                onClick={handleBringToFront}
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Bring to Front
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                onClick={handleSendToBack}
              >
                <ArrowDown className="h-4 w-4 mr-2" />
                Send to Back
              </Button>
              
              <Button
                size="sm"
                variant="destructive"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </>
          )}
          
          <div className="ml-auto flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            
            <Button
              size="sm"
              variant="destructive"
              onClick={handleClear}
            >
              Clear All
            </Button>
            
            <Button
              size="sm"
              onClick={handleSave}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Save
            </Button>
          </div>
        </div>
      )}
      
      <div className="border rounded-lg overflow-hidden bg-white">
        <canvas
          ref={canvasRef}
          onClick={!readOnly ? handleCanvasClick : undefined}
          className="w-full touch-none"
        />
      </div>
    </div>
  );
};

export default WhiteboardCanvas;
