import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';
import WhiteboardCanvas from '@/components/WhiteboardCanvas';
import ProjectStatusUpdate from '@/components/ProjectStatusUpdate';
import ProjectStatusHistory from '@/components/ProjectStatusHistory';
import { MessageSquare, Save, ArrowLeft } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { Spinner } from "@/components/ui/spinner";

const EngineerWhiteboardPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { userRole, userName } = useAuth();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) return;
      
      try {
        const { data, error } = await supabase
          .from('form_submissions')
          .select('*')
          .eq('id', projectId)
          .single();
          
        if (error) throw error;
        
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
        toast({
          title: "Error",
          description: "Failed to load project data",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProject();
  }, [projectId, toast]);

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
    toast({
      title: "Whiteboard saved",
      description: "All changes have been saved successfully",
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 flex items-center justify-center h-screen">
        <Spinner size="lg" />
        <span className="ml-3 text-lg">Loading project data...</span>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="mb-6">The project you're looking for doesn't exist or you don't have access to it.</p>
          <Button onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            {project.service_type} - {project.first_name} {project.last_name}
          </h1>
          <p className="text-gray-500">
            {project.project_reference ? `Ref: ${project.project_reference} • ` : ''}
            {project.address || project.postcode || 'No address provided'}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ProjectStatusUpdate 
            projectId={projectId || ''} 
            currentStatus={project.status} 
            readOnly={userRole === 'client'} 
          />
          
          <Card>
            <CardHeader>
              <CardTitle>Project Whiteboard</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <WhiteboardCanvas 
                projectId={projectId || "new"} 
                readOnly={userRole === 'client' && !project.client_whiteboard_access} 
                onSave={handleSaveWhiteboard}
              />
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <ProjectStatusHistory projectId={projectId || ''} />
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Discussion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="max-h-[400px] overflow-y-auto space-y-4 mb-4">
                  {comments.length === 0 ? (
                    <p className="text-center text-gray-500 py-4">No comments yet</p>
                  ) : (
                    comments.map((comment) => (
                      <div key={comment.id} className={`p-3 rounded-lg ${comment.role === userRole ? 'bg-blue-50' : 'bg-gray-50'}`}>
                        <div className="flex justify-between items-start">
                          <div className="font-medium">{comment.user} <span className="text-xs text-gray-500">({comment.role})</span></div>
                          <div className="text-xs text-gray-500">{comment.timestamp}</div>
                        </div>
                        <p className="mt-1">{comment.text}</p>
                      </div>
                    ))
                  )}
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
          
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-500">Client:</span>
                  <p>{project.first_name} {project.last_name}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Contact:</span>
                  <p>{project.email}</p>
                  <p>{project.phone}</p>
                </div>
                {project.address && (
                  <div>
                    <span className="text-sm font-medium text-gray-500">Address:</span>
                    <p>{project.address}</p>
                    <p>{project.postcode}</p>
                  </div>
                )}
                {project.message && (
                  <div>
                    <span className="text-sm font-medium text-gray-500">Initial Message:</span>
                    <p className="whitespace-pre-wrap text-sm mt-1 bg-gray-50 p-2 rounded">{project.message}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EngineerWhiteboardPage;
