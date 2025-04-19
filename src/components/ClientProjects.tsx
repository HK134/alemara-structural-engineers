import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Spinner } from '@/components/ui/spinner';
import { FileText, Clock, Calendar, ArrowRight } from 'lucide-react';

const ClientProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userName, userEmail } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (!userEmail) {
          console.error("No user email available");
          setIsLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from('form_submissions')
          .select('*')
          .eq('email', userEmail)
          .order('created_at', { ascending: false });
          
        if (error) throw error;
        
        setProjects(data || []);
      } catch (error) {
        console.error("Error fetching client projects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (userEmail) {
      fetchProjects();
      
      const channel = supabase
        .channel('client-projects')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'form_submissions',
            filter: `email=eq.${userEmail}`
          },
          () => {
            fetchProjects();
          }
        )
        .subscribe();
        
      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [userEmail]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };
  
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new':
        return <Badge className="bg-blue-500">New</Badge>;
      case 'contacted':
        return <Badge className="bg-yellow-500">Contacted</Badge>;
      case 'live':
      case 'in progress':
        return <Badge className="bg-purple-500">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'closed':
        return <Badge className="bg-gray-500">Closed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Projects</CardTitle>
          <CardDescription>View your ongoing and completed projects</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center p-8">
          <Spinner size="lg" />
        </CardContent>
      </Card>
    );
  }

  if (projects.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Projects</CardTitle>
          <CardDescription>View your ongoing and completed projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <FileText className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-lg font-medium">No projects found</h3>
            <p className="mt-1 text-sm text-gray-500">You don't have any active projects at the moment.</p>
            <Button className="mt-4" onClick={() => navigate('/services')}>
              Explore Our Services
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Projects</CardTitle>
        <CardDescription>View your ongoing and completed projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="p-6 flex-grow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{project.service_type}</h3>
                        <p className="text-sm text-muted-foreground">
                          {project.project_reference ? `Ref: ${project.project_reference}` : 'Reference pending'}
                        </p>
                      </div>
                      <div>
                        {getStatusBadge(project.status)}
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Created: {formatDate(project.created_at)}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Last Updated: {formatDate(project.updated_at || project.created_at)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 flex items-center justify-end bg-muted/30 border-t sm:border-t-0 sm:border-l">
                    <Button 
                      className="bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => navigate(`/client/project/${project.id}`)}
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientProjects;
