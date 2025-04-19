import React, { useEffect, useRef, useState } from 'react';
import { Canvas, IEvent } from 'fabric';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { saveWhiteboardData, loadWhiteboardData, subscribeToWhiteboardChanges } from '@/utils/db/whiteboards';
import { supabase } from '@/integrations/supabase/client';
import { Spinner } from '@/components/ui/spinner';

interface WhiteboardCanvasProps {
  projectId: string;
  readOnly?: boolean;
  onSave?: (data: string) => void;
}

const WhiteboardCanvas: React.FC<WhiteboardCanvasProps> = ({ 
  projectId, 
  readOnly = false 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<Canvas | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initCanvas = () => {
      if (!canvasRef.current) return null;
      
      const canvas = new Canvas(canvasRef.current, {
        isDrawingMode: !readOnly,
        backgroundColor: '#fff',
        selection: !readOnly,
      });

      fabricRef.current = canvas;

      canvas.on('object:added', handleObjectChange);
      canvas.on('object:modified', handleObjectChange);
      canvas.on('object:removed', handleObjectChange);

      return canvas;
    };

    const loadData = async (canvas: Canvas) => {
      setIsLoading(true);
      try {
        const result = await loadWhiteboardData(projectId);
        if (result.success && result.data?.canvas_data) {
          canvas.loadFromJSON(result.data.canvas_data, () => {
            canvas.renderAll();
          });
        }
      } catch (err: any) {
        console.error("Error loading whiteboard data:", err);
        setError("Failed to load whiteboard data.");
      } finally {
        setIsLoading(false);
      }
    };

    const subscribeToChanges = (canvas: Canvas) => {
      return subscribeToWhiteboardChanges(projectId, (payload: any) => {
        if (payload.new?.canvas_data) {
          canvas.loadFromJSON(payload.new.canvas_data, () => {
            canvas.renderAll();
          });
        }
      });
    };

    let canvasInstance: Canvas | null = null;

    const initialize = async () => {
      canvasInstance = initCanvas();
      if (!canvasInstance) return;
      
      await loadData(canvasInstance);

      if (!readOnly) {
        const unsubscribe = subscribeToChanges(canvasInstance);
        return () => {
          unsubscribe();
          canvasInstance?.off('object:added', handleObjectChange);
          canvasInstance?.off('object:modified', handleObjectChange);
          canvasInstance?.off('object:removed', handleObjectChange);
          canvasInstance?.dispose();
        };
      } else {
        return () => {
          canvasInstance?.dispose();
        };
      }
    };

    initialize().then(cleanup => {
      if (cleanup) {
        return cleanup;
      }
    });

    return () => {
      fabricRef.current?.dispose();
    };
  }, [projectId, readOnly]);

  const handleSave = async () => {
    if (fabricRef.current) {
      const canvasData = JSON.stringify(fabricRef.current.toJSON());
      try {
        const result = await saveWhiteboardData(projectId, canvasData);
        if (!result.success) {
          console.error("Failed to save whiteboard data:", result.message);
          setError("Failed to save whiteboard data.");
        } else if (onSave) {
          onSave(canvasData);
        }
      } catch (err) {
        console.error("Error saving whiteboard data:", err);
        setError("Failed to save whiteboard data.");
      }
    }
  };

  const handleObjectChange = () => {
    if (!readOnly) {
      handleSave();
    }
  };

  const clearCanvas = () => {
    if (fabricRef.current) {
      fabricRef.current.clear();
      fabricRef.current.set('backgroundColor', '#fff');
      fabricRef.current.renderAll();
    }
  };

  const toggleDrawingMode = () => {
    if (fabricRef.current) {
      fabricRef.current.isDrawingMode = !fabricRef.current.isDrawingMode;
    }
  };

  const getSession = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      if (!data.session) {
        console.log("No active session");
        return null;
      }
      return data.session.user.id;
    } catch (error) {
      console.error("Error getting session:", error);
      return null;
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex justify-center p-8">
          <Spinner size="lg" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="text-center text-red-500">
          {error}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <canvas ref={canvasRef} width={600} height={400} />
        {!readOnly && (
          <div className="mt-4 flex space-x-2">
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={clearCanvas}>Clear</Button>
            <Button onClick={toggleDrawingMode}>
              {fabricRef.current?.isDrawingMode ? 'Disable Drawing' : 'Enable Drawing'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WhiteboardCanvas;
