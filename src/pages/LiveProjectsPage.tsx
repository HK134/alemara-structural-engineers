
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { Search, Calendar, FileText, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

type LiveProject = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  service_type: string;
  status: string;
  created_at: string;
  project_reference: string | null;
  address: string | null;
  engineer_name?: string | null;
  engineer_email?: string | null;
};

const LiveProjectsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const { data: liveProjects, isLoading, error } = useQuery({
    queryKey: ['liveProjects'],
    queryFn: async () => {
      // Get secured projects (live projects)
      const { data: projects, error: projectsError } = await supabase
        .from('form_submissions')
        .select(`
          id, 
          first_name, 
          last_name, 
          email, 
          service_type, 
          status, 
          created_at, 
          project_reference,
          address,
          engineer_id
        `)
        .eq('secured', true)
        .order('created_at', { ascending: false });
      
      if (projectsError) throw new Error(`Error fetching projects: ${projectsError.message}`);
      
      // Get all engineers to match with projects
      const { data: engineers, error: engineersError } = await supabase
        .from('engineers')
        .select('id, name, email');
        
      if (engineersError) throw new Error(`Error fetching engineers: ${engineersError.message}`);
      
      // Match engineers with projects
      return projects.map((project: any) => {
        const engineer = engineers.find((eng: any) => eng.id === project.engineer_id);
        return {
          ...project,
          engineer_name: engineer?.name || null,
          engineer_email: engineer?.email || null
        };
      }) as LiveProject[];
    }
  });
  
  const filteredProjects = liveProjects?.filter((project) => {
    const searchTerms = searchQuery.toLowerCase();
    return (
      project.first_name.toLowerCase().includes(searchTerms) ||
      project.last_name.toLowerCase().includes(searchTerms) ||
      project.email.toLowerCase().includes(searchTerms) ||
      (project.project_reference && project.project_reference.toLowerCase().includes(searchTerms)) ||
      (project.engineer_name && project.engineer_name.toLowerCase().includes(searchTerms))
    );
  });

  const handleViewWhiteboard = (projectId: string) => {
    navigate(`/admin/project/${projectId}/whiteboard`);
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  // If we're loading, show a spinner
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  // If there's an error, show an error message
  if (error) {
    return (
      <Card className="mx-auto max-w-6xl mt-6">
        <CardContent className="pt-6">
          <div className="text-red-500">
            Error loading projects: {(error as Error).message}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Live Projects</h1>
        <div className="flex items-center">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects..."
              className="pl-8 w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Display a message if no projects are found */}
      {(!filteredProjects || filteredProjects.length === 0) && (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">No live projects found</p>
          </CardContent>
        </Card>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects?.map((project) => (
          <Card key={project.id} className="relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full 
              ${project.status === 'new' ? 'bg-blue-500' : 
                project.status === 'in_progress' ? 'bg-yellow-500' :
                project.status === 'final_review' ? 'bg-purple-500' : 
                project.status === 'completed' ? 'bg-green-500' : 'bg-gray-500'}`}
            />
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">
                  {project.first_name} {project.last_name}
                </CardTitle>
                <Badge variant={
                  project.status === 'new' ? 'default' :
                  project.status === 'in_progress' ? 'secondary' :
                  project.status === 'final_review' ? 'outline' :
                  project.status === 'completed' ? 'success' : 'default'
                }>
                  {project.status.replace('_', ' ')}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                {project.service_type}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                  <span className="text-sm">{formatDate(project.created_at)}</span>
                </div>
                
                {project.project_reference && (
                  <div className="flex items-start gap-2">
                    <FileText className="h-4 w-4 mt-1 text-muted-foreground" />
                    <span className="text-sm">{project.project_reference}</span>
                  </div>
                )}

                {project.engineer_name && (
                  <div className="flex items-start gap-2">
                    <User className="h-4 w-4 mt-1 text-muted-foreground" />
                    <div>
                      <span className="text-sm">{project.engineer_name}</span>
                      <div className="text-xs text-muted-foreground">{project.engineer_email}</div>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full mt-4" 
                  onClick={() => handleViewWhiteboard(project.id)}
                >
                  View Whiteboard
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add a dummy project if requested */}
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">
                Thomas Johnson
              </CardTitle>
              <Badge variant="secondary">in progress</Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              Loft Conversion
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                <span className="text-sm">15 Mar 2025</span>
              </div>
              
              <div className="flex items-start gap-2">
                <FileText className="h-4 w-4 mt-1 text-muted-foreground" />
                <span className="text-sm">W-25-036</span>
              </div>

              <div className="flex items-start gap-2">
                <User className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <span className="text-sm">Sarah Williams</span>
                  <div className="text-xs text-muted-foreground">sarah.w@example.com</div>
                </div>
              </div>

              <Button 
                className="w-full mt-4" 
                onClick={() => handleViewWhiteboard("dummy-project")}
              >
                View Whiteboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LiveProjectsPage;
