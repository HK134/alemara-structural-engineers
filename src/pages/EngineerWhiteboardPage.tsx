
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';
import EngineerLayout from '@/components/EngineerLayout';
import ClientLayout from '@/components/ClientLayout';
import WhiteboardCanvas from '@/components/WhiteboardCanvas';
import { MessageSquare, Save } from "lucide-react";

// Mock data for the whiteboard - in a real app this would be fetched from the database
const mockProject = {
  id: 1,
  title: "Residential Extension - Islington",
  client: "Sarah Johnson",
  engineer: "John Smith",
  lastSaved: "2023-09-15 14:30",
  status: "In Progress",
  comments: [
    { id: 1, user: "John Smith", role: "Engineer", text: "Let's modify the load-bearing wall design here.", timestamp: "2023-09-14 10:25" },
    { id: 2, user: "Sarah Johnson", role: "Client", text: "I'd prefer more space in the living area. Can we move this wall?", timestamp: "2023-09-14 15:40" }
  ]
};

const EngineerWhiteboardPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { userRole, userName } = useAuth();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(mockProject.comments);
  const [canvasData, setCanvasData] = useState<string | null>(null);

  // In a real app, load whiteboard data from database
  useEffect(() => {
    // This would typically be a database query
    console.log(`Loading whiteboard data for project ${projectId}`);
    // setCanvasData(loadedData)
  }, [projectId]);

  const handleAddComment = () => {
    if (!comment.trim()) return;
    
    const newComment = {
      id: comments.length + 1,
      user: userName || 'Anonymous',
      role: userRole || 'User',
      text: comment,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };
    
    setComments([...comments, newComment]);
    setComment("");
    
    toast({
      title: "Comment added",
      description: "Your comment has been added to the whiteboard",
    });
  };

  const handleSaveWhiteboard = (data: string) => {
    setCanvasData(data);
    
    // In a real app, save to database
    console.log(`Saving whiteboard data for project ${projectId}`);
    
    toast({
      title: "Whiteboard saved",
      description: "All changes have been saved successfully",
    });
  };

  // Determine which layout to use based on user role
  const LayoutComponent = userRole === 'client' ? ClientLayout : EngineerLayout;

  return (
    <LayoutComponent>
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">{mockProject.title}</h1>
            <p className="text-gray-500">
              Client: {mockProject.client} • Engineer: {mockProject.engineer} • Last saved: {mockProject.lastSaved}
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Comments Section (Sidebar) */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Comments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="max-h-[600px] overflow-y-auto space-y-4 mb-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className={`p-3 rounded-lg ${comment.role === userRole ? 'bg-blue-50' : 'bg-gray-50'}`}>
                        <div className="flex justify-between items-start">
                          <div className="font-medium">{comment.user} <span className="text-xs text-gray-500">({comment.role})</span></div>
                          <div className="text-xs text-gray-500">{comment.timestamp}</div>
                        </div>
                        <p className="mt-1">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <Textarea 
                      placeholder="Add your comment here..." 
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="min-h-24"
                    />
                    <Button 
                      onClick={handleAddComment}
                      className="w-full bg-blue-600 hover:bg-blue-700">
                      Add Comment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Whiteboard Canvas */}
          <div className="md:col-span-3">
            <Card>
              <CardContent className="p-4">
                <WhiteboardCanvas 
                  projectId={projectId || "new"} 
                  readOnly={false} 
                  onSave={handleSaveWhiteboard}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default EngineerWhiteboardPage;
