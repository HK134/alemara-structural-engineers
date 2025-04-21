
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, IEvent, Rect, Circle, Path } from 'fabric';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';
import { pencil, eraser, circle, square, text } from 'lucide-react';

interface SimpleWhiteboardProps {
  projectId: string;
  readOnly?: boolean;
  onSave?: (data: string) => void;
}

const SimpleWhiteboard: React.FC<SimpleWhiteboardProps> = ({ 
  projectId, 
  readOnly = false,
  onSave 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<Canvas | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeColor, setActiveColor] = useState('#000000');
  const [activeTool, setActiveTool] = useState<'select' | 'draw' | 'erase' | 'rect' | 'circle' | 'text'>('select');
  const [strokeWidth, setStrokeWidth] = useState(2);

  // Initialize canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Clear any existing canvas
    if (fabricRef.current) {
      fabricRef.current.dispose();
    }
    
    const canvas = new Canvas(canvasRef.current, {
      width: canvasRef.current.clientWidth,
      height: 500,
      backgroundColor: '#ffffff',
      isDrawingMode: false,
      selection: !readOnly,
    });

    // Set up event listeners
    canvas.on('object:added', handleCanvasChange);
    canvas.on('object:modified', handleCanvasChange);
    canvas.on('object:removed', handleCanvasChange);

    // Update fabric canvas reference
    fabricRef.current = canvas;

    // Try to load saved data
    loadData(canvas);

    return () => {
      canvas.off('object:added', handleCanvasChange);
      canvas.off('object:modified', handleCanvasChange);
      canvas.off('object:removed', handleCanvasChange);
      canvas.dispose();
    };
  }, []);

  const handleCanvasChange = (e: IEvent) => {
    if (readOnly) return;
    // Save data after each change (debounced in a real app)
    if (fabricRef.current) {
      saveData();
    }
  };

  const loadData = async (canvas: Canvas) => {
    setIsLoading(true);
    try {
      // For demo purposes, we'll load a sample shape
      if (projectId === 'dummy-project') {
        // Add a rectangle to demonstrate functionality
        const rect = new Rect({
          left: 100,
          top: 100,
          fill: '#f8d7da',
          width: 200,
          height: 150,
          stroke: '#721c24',
          strokeWidth: 2,
        });
        
        const circle = new Circle({
          left: 350,
          top: 150,
          fill: '#d4edda',
          radius: 50,
          stroke: '#155724',
          strokeWidth: 2,
        });

        canvas.add(rect);
        canvas.add(circle);
        canvas.renderAll();
      } else {
        // In a real app, this would load from your database
        console.log('Would load whiteboard data for project:', projectId);
      }
    } catch (err) {
      console.error('Error loading whiteboard data:', err);
      toast({
        title: 'Error',
        description: 'Failed to load whiteboard data',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveData = () => {
    if (!fabricRef.current || readOnly) return;
    
    try {
      const canvasData = JSON.stringify(fabricRef.current.toJSON());
      // In a real app, this would save to your database
      console.log('Saved whiteboard data for project:', projectId);
      
      if (onSave) {
        onSave(canvasData);
      }
    } catch (err) {
      console.error('Error saving whiteboard data:', err);
      toast({
        title: 'Error',
        description: 'Failed to save whiteboard data',
        variant: 'destructive',
      });
    }
  };

  const handleToolChange = (tool: typeof activeTool) => {
    setActiveTool(tool);
    
    if (!fabricRef.current) return;
    
    // Configure canvas based on selected tool
    switch (tool) {
      case 'select':
        fabricRef.current.isDrawingMode = false;
        break;
      case 'draw':
        fabricRef.current.isDrawingMode = true;
        if (fabricRef.current.freeDrawingBrush) {
          fabricRef.current.freeDrawingBrush.color = activeColor;
          fabricRef.current.freeDrawingBrush.width = strokeWidth;
        }
        break;
      case 'erase':
        // In a more advanced implementation, this would use a custom eraser
        fabricRef.current.isDrawingMode = false;
        const activeObject = fabricRef.current.getActiveObject();
        if (activeObject) {
          fabricRef.current.remove(activeObject);
        }
        break;
      case 'text':
      case 'rect':
      case 'circle':
        fabricRef.current.isDrawingMode = false;
        break;
    }
  };

  const addShape = () => {
    if (!fabricRef.current) return;
    
    switch (activeTool) {
      case 'rect':
        const rect = new Rect({
          left: 100,
          top: 100,
          fill: activeColor,
          width: 100,
          height: 70,
          stroke: '#000000',
          strokeWidth: 1,
        });
        fabricRef.current.add(rect);
        fabricRef.current.setActiveObject(rect);
        break;
      case 'circle':
        const circle = new Circle({
          left: 100,
          top: 100,
          fill: activeColor,
          radius: 50,
          stroke: '#000000',
          strokeWidth: 1,
        });
        fabricRef.current.add(circle);
        fabricRef.current.setActiveObject(circle);
        break;
      case 'text':
        const text = new fabric.Textbox('Edit this text', {
          left: 100,
          top: 100,
          fontFamily: 'Arial',
          fill: activeColor,
          width: 200,
        });
        fabricRef.current.add(text);
        fabricRef.current.setActiveObject(text);
        break;
    }
  };

  const clearCanvas = () => {
    if (!fabricRef.current) return;
    
    if (confirm('Are you sure you want to clear the whiteboard? This cannot be undone.')) {
      fabricRef.current.clear();
      fabricRef.current.backgroundColor = '#ffffff';
      fabricRef.current.renderAll();
      toast({
        title: 'Canvas Cleared',
        description: 'The whiteboard has been cleared',
      });
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        {isLoading ? (
          <div className="flex justify-center p-8">
            <Spinner size="lg" />
          </div>
        ) : (
          <>
            {!readOnly && (
              <div className="mb-4 flex flex-wrap gap-2 items-center">
                <div className="flex gap-1">
                  <Button 
                    variant={activeTool === 'select' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => handleToolChange('select')}
                    title="Select"
                  >
                    Select
                  </Button>
                  <Button 
                    variant={activeTool === 'draw' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => handleToolChange('draw')}
                    title="Draw"
                  >
                    <pencil className="w-4 h-4 mr-1" />
                    Draw
                  </Button>
                  <Button 
                    variant={activeTool === 'erase' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => handleToolChange('erase')}
                    title="Erase"
                  >
                    <eraser className="w-4 h-4 mr-1" />
                    Erase
                  </Button>
                  <Button 
                    variant={activeTool === 'rect' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => { handleToolChange('rect'); addShape(); }}
                    title="Rectangle"
                  >
                    <square className="w-4 h-4 mr-1" />
                    Rect
                  </Button>
                  <Button 
                    variant={activeTool === 'circle' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => { handleToolChange('circle'); addShape(); }}
                    title="Circle"
                  >
                    <circle className="w-4 h-4 mr-1" />
                    Circle
                  </Button>
                  <Button 
                    variant={activeTool === 'text' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => { handleToolChange('text'); addShape(); }}
                    title="Text"
                  >
                    <text className="w-4 h-4 mr-1" />
                    Text
                  </Button>
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <label htmlFor="color-picker" className="text-sm">Color:</label>
                  <input 
                    id="color-picker"
                    type="color" 
                    value={activeColor} 
                    onChange={(e) => setActiveColor(e.target.value)}
                    className="h-8 w-12 border border-gray-300 rounded cursor-pointer"
                  />
                  
                  <Select 
                    value={strokeWidth.toString()} 
                    onValueChange={(value) => setStrokeWidth(parseInt(value))}
                  >
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Width" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Thin</SelectItem>
                      <SelectItem value="2">Medium</SelectItem>
                      <SelectItem value="4">Thick</SelectItem>
                      <SelectItem value="6">Very Thick</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={clearCanvas}
                    title="Clear Canvas"
                    className="ml-2"
                  >
                    Clear
                  </Button>
                </div>
              </div>
            )}

            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
              <canvas 
                ref={canvasRef} 
                className="w-full"
              />
            </div>

            {!readOnly && (
              <div className="mt-4 flex justify-end">
                <Button onClick={saveData}>
                  Save Changes
                </Button>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default SimpleWhiteboard;
