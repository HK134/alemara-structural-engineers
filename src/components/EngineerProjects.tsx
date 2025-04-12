
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getEngineerProjects } from '@/utils/formSubmissionDB';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

type Project = {
  id: string;
  form_type: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  service_type: string;
  message: string | null;
  created_at: string;
  status: string;
  postcode: string;
  secured: boolean;
  project_reference: string | null;
  address: string | null;
};

const EngineerProjects = () => {
  const { userRole } = useAuth();
  const [activeTab, setActiveTab] = useState<string>('all');
  
  // Get the engineer ID from Supabase auth session
  const [engineerId, setEngineerId] = useState<string | null>(null);
  
  useEffect(() => {
    // Fetch the engineer's ID based on their email
    const getEngineerProfile = async () => {
      try {
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError || !sessionData.session) {
          console.error("Error fetching session:", sessionError);
          return;
        }
        
        const userEmail = sessionData.session.user.email;
        
        if (userEmail) {
          const { data, error } = await supabase
            .from('engineers')
            .select('id')
            .eq('email', userEmail)
            .single();
            
          if (error) {
            console.error("Error fetching engineer profile:", error);
            return;
          }
          
          if (data) {
            setEngineerId(data.id);
          }
        }
      } catch (error) {
        console.error("Error in getEngineerProfile:", error);
      }
    };
    
    getEngineerProfile();
  }, []);

  const { data: projects, isLoading, error, refetch } = useQuery({
    queryKey: ['engineerProjects', engineerId, activeTab],
    queryFn: async () => {
      if (!engineerId) return [];
      
      const result = await getEngineerProjects(engineerId);
      
      if (!result.success) {
        throw new Error("Failed to fetch projects");
      }
      
      let filteredProjects = result.data || [];
      
      // Apply client-side filtering based on the active tab
      if (activeTab !== 'all') {
        filteredProjects = filteredProjects.filter(project => project.status === activeTab);
      }
      
      return filteredProjects as Project[];
    },
    enabled: !!engineerId, // Only run query when engineerId is available
    refetchOnWindowFocus: true,
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  if (!engineerId) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Projects</CardTitle>
          <CardDescription>Loading engineer profile...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Projects</CardTitle>
          <CardDescription>Loading projects...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Projects</CardTitle>
          <CardDescription className="text-red-500">Error loading projects. Please try again.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => refetch()}>Retry</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Projects</CardTitle>
        <CardDescription>View and manage your assigned projects</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="contacted">Contacted</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="closed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="space-y-4">
            {projects && projects.length > 0 ? (
              projects.map(project => (
                <div 
                  key={project.id} 
                  className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">
                        {project.first_name} {project.last_name}
                        {project.project_reference && (
                          <span className="ml-2 text-sm text-gray-600">
                            (Ref: {project.project_reference})
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {project.service_type} • {formatDate(project.created_at)}
                      </p>
                    </div>
                    <Badge 
                      className={
                        project.status === 'new' ? 'bg-blue-500' :
                        project.status === 'contacted' ? 'bg-yellow-500' :
                        project.status === 'live' ? 'bg-purple-500' :
                        project.status === 'closed' ? 'bg-green-500' : 
                        'bg-gray-500'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm">
                      <span className="font-medium">Email:</span> {project.email}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Phone:</span> {project.phone}
                    </p>
                    {project.address && (
                      <p className="text-sm">
                        <span className="font-medium">Address:</span> {project.address}
                      </p>
                    )}
                    {project.postcode && (
                      <p className="text-sm">
                        <span className="font-medium">Postcode:</span> {project.postcode}
                      </p>
                    )}
                  </div>
                  
                  {project.message && (
                    <div className="mt-3 p-2 bg-gray-50 rounded border text-sm">
                      <p className="font-medium mb-1">Client Message:</p>
                      <p className="whitespace-pre-wrap">{project.message}</p>
                    </div>
                  )}
                  
                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    {project.status === 'live' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          toast.info("This feature will be implemented soon");
                        }}
                      >
                        Mark as Complete
                      </Button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No projects found.</p>
                {activeTab !== 'all' && (
                  <Button 
                    variant="link" 
                    onClick={() => setActiveTab('all')}
                    className="mt-2"
                  >
                    View all projects
                  </Button>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EngineerProjects;
