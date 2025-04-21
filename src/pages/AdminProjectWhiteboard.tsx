import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useAuth } from '@/contexts/AuthContext';
import SimpleWhiteboard from '@/components/SimpleWhiteboard';
import ProjectStatusUpdate from '@/components/ProjectStatusUpdate';
import ProjectStatusHistory from '@/components/ProjectStatusHistory';
import { MessageSquare, ArrowLeft } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { Spinner } from "@/components/ui/spinner";

const AdminProjectWhiteboard = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { userName } = useAuth();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [engineerData, setEngineerData] = useState<any>(null);

  useEffect(() => {
    if (projectId === "dummy-project") {
      setProject({
        id: "dummy-project",
        first_name: "Thomas",
        last_name: "Johnson",
        email: "thomas.j@example.com",
        phone: "07700 900000",
        service_type: "Loft Conversion",
        status: "in_progress",
        project_reference: "W-25-036",
        address: "42 Example Road, London, N1 1AA",
        postcode: "N1 1AA",
        message: "Looking for structural engineering services for my loft conversion project.",
        engineer_id: "dummy-engineer"
      });
      
      setEngineerData({
        id: "dummy-engineer",
        name: "Sarah Williams",
        email: "sarah.w@example.com"
      });
      
      setComments([
        {
          id: 1,
          user: "Sarah Williams",
          role: "engineer",
          text: "I've uploaded the initial sketch for the loft conversion. Please review and let me know your thoughts.",
          timestamp: "2025-03-16 09:30"
        },
        {
          id: 2,
          user: "Thomas Johnson",
          role: "client",
          text: "Thanks for the sketch. I like the layout but could we add more natural light?",
          timestamp: "2025-03-16 14:45"
        },
        {
          id: 3,
          user: "Sarah Williams",
          role: "engineer",
          text: "I've updated the design with an additional skylight. I've also strengthened the support beam calculations.",
          timestamp: "2025-03-17 11:15"
        }
      ]);
      
      setIsLoading(false);
      return;
    }
    
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
        
        if (data.engineer_id) {
          const { data: engineerData, error: engineerError } = await supabase
            .from('engineers')
            .select('*')
            .eq('id', data.engineer_id)
            .single();
            
          if (!engineerError) {
            setEngineerData(engineerData);
          }
        }
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
  }, [projectId]);

  const handleAddComment = () => {
    if (!comment.trim()) return;
    
    const newComment = {
      id: comments.length + 1,
      user: userName || 'Admin',
      role: 'admin',
      text: comment,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };
    
    setComments([...comments, newComment]);
    setComment("");
    
    toast({
      title: "Comment added",
      description: "Your comment has been added to the whiteboard discussion"
    });
  };

  const handleSaveWhiteboard = (data: string) => {
    toast({
      title: "Whiteboard saved",
      description: "All changes have been saved successfully"
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 flex items-center justify-center h-64">
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
          <Button onClick={() => navigate('/admin/live-projects')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
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
          {engineerData && (
            <p className="text-blue-600 text-sm mt-1">
              Engineer: {engineerData.name} ({engineerData.email})
            </p>
          )}
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => navigate('/admin/live-projects')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ProjectStatusUpdate 
            projectId={projectId || ''} 
            currentStatus={project.status} 
            readOnly={false} 
          />
          
          <Card>
            <CardHeader>
              <CardTitle>Project Whiteboard</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <SimpleWhiteboard 
                projectId={projectId || "dummy-project"}
                onSave={handleSaveWhiteboard}
              />
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <ProjectStatusHistory projectId={projectId || ''} />
          
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  <span>Discussion</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="max-h-[400px] overflow-y-auto space-y-4 mb-4">
                  {comments.length === 0 ? (
                    <p className="text-center text-gray-500 py-4">No comments yet</p>
                  ) : (
                    comments.map((comment) => (
                      <div key={comment.id} className={`p-3 rounded-lg ${comment.role === 'admin' ? 'bg-blue-50' : comment.role === 'engineer' ? 'bg-green-50' : 'bg-gray-50'}`}>
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
              <CardTitle>
                <span>Project Details</span>
              </CardTitle>
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

export default AdminProjectWhiteboard;
