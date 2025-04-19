
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ClientDashboardHeader from '@/components/ClientDashboardHeader';
import WhiteboardCanvas from '@/components/WhiteboardCanvas';
import ProjectStatus from '@/components/ProjectStatus';
import ProjectStatusHistory from '@/components/ProjectStatusHistory';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, FileText, Calendar, MessageSquare } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

const ClientProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
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
    
    // Subscribe to project status changes
    const channel = supabase
      .channel(`project-${projectId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'form_submissions',
          filter: `id=eq.${projectId}`
        },
        (payload) => {
          setProject(payload.new);
          
          toast({
            title: "Project updated",
            description: "Project information has been updated"
          });
        }
      )
      .subscribe();
      
    return () => {
      supabase.removeChannel(channel);
    };
  }, [projectId, toast]);

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
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
          <Button onClick={() => navigate('/client')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
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
            {project.service_type}
          </h1>
          <p className="text-gray-500">
            {project.project_reference ? `Reference: ${project.project_reference}` : 'No reference assigned yet'}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => navigate('/client')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="md:col-span-2 space-y-6">
          {/* Current Status Card */}
          <Card>
            <CardHeader>
              <CardTitle>Current Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ProjectStatus status={project.status} size="lg" />
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Meeting
                  </Button>
                  
                  <Button variant="outline" className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact Engineer
                  </Button>
                  
                  <Button variant="outline" className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    View Reports
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Whiteboard Canvas */}
          <Card>
            <CardHeader>
              <CardTitle>Project Whiteboard</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <WhiteboardCanvas 
                projectId={projectId || ""} 
                readOnly={true}
              />
            </CardContent>
          </Card>
        </div>
        
        {/* Right column */}
        <div className="space-y-6">
          {/* Status History */}
          <ProjectStatusHistory projectId={projectId || ''} />
          
          {/* Project Details */}
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-500">Address:</span>
                  <p>{project.address || 'Not provided yet'}</p>
                  <p>{project.postcode || ''}</p>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-500">Service:</span>
                  <p>{project.service_type}</p>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-500">Initial Request:</span>
                  <p className="whitespace-pre-wrap text-sm mt-1 bg-gray-50 p-2 rounded">
                    {project.message || 'No initial message provided'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Estimated Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Estimated Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative pl-6 pb-4">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />
                  <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="pt-1 pb-2">
                    <div className="font-medium">Initial Consultation</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                </div>
                
                <div className="relative pl-6 pb-4">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />
                  <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <div className="pt-1 pb-2">
                    <div className="font-medium">Site Visit</div>
                    <div className="text-sm text-gray-600">In Progress</div>
                  </div>
                </div>
                
                <div className="relative pl-6 pb-4">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />
                  <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                  </div>
                  <div className="pt-1 pb-2">
                    <div className="font-medium">Structural Calculations</div>
                    <div className="text-sm text-gray-600">Estimated: 7-10 days</div>
                  </div>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                  </div>
                  <div className="pt-1">
                    <div className="font-medium">Final Report Delivery</div>
                    <div className="text-sm text-gray-600">Estimated: 14-21 days</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientProjectDetail;
