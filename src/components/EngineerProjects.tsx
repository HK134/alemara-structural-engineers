
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getEngineerProjects } from '@/utils/formSubmissionDB';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardCheck, Clock, Eye, FileText, MapPin, Phone, RefreshCw, User } from "lucide-react";
import { toast } from 'sonner';

const EngineerProjects = () => {
  const { userId, userRole } = useAuth();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  // Fetch the engineer information first
  const { data: engineerInfo } = useQuery({
    queryKey: ['engineerInfo', userId],
    queryFn: async () => {
      if (!userId) return null;
      
      const { data, error } = await supabase
        .from('engineers')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) {
        console.error("Error fetching engineer info:", error);
        return null;
      }
      
      return data;
    },
    enabled: !!userId && userRole === 'engineer'
  });
  
  // Then fetch the projects assigned to this engineer
  const { data: projects, isLoading, error, refetch } = useQuery({
    queryKey: ['engineerProjects', userId],
    queryFn: async () => {
      if (!userId) return [];
      
      const result = await getEngineerProjects(userId);
      
      if (!result.success) {
        throw new Error('Failed to fetch engineer projects');
      }
      
      return result.data || [];
    },
    enabled: !!userId && userRole === 'engineer'
  });
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const statusColors: Record<string, string> = {
    'new': 'bg-blue-500',
    'contacted': 'bg-yellow-500',
    'live': 'bg-purple-500',
    'closed': 'bg-green-500',
    'archived': 'bg-gray-500'
  };

  const handleRefresh = () => {
    refetch();
    toast.success('Projects refreshed');
  };
  
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Assigned Projects</CardTitle>
          <CardDescription>Loading projects...</CardDescription>
        </CardHeader>
      </Card>
    );
  }
  
  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Assigned Projects</CardTitle>
          <CardDescription className="text-red-500">
            Error loading projects. Please try again.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleRefresh} variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" /> Retry
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  if (!projects || projects.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Assigned Projects</CardTitle>
          <CardDescription>
            You don't have any projects assigned yet.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center py-8">
          <p className="text-muted-foreground mb-4">
            Projects will appear here when the admin assigns them to you.
          </p>
          <Button onClick={handleRefresh} variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle>Your Assigned Projects</CardTitle>
          <CardDescription>
            You have {projects.length} active projects assigned
          </CardDescription>
        </div>
        <Button onClick={handleRefresh} variant="outline" size="icon">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="secured">Secured</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id} className={project.secured ? "bg-slate-50" : ""}>
                      <TableCell className="font-medium">
                        {project.project_reference || "-"}
                      </TableCell>
                      <TableCell>
                        {project.first_name} {project.last_name}
                      </TableCell>
                      <TableCell>{project.service_type}</TableCell>
                      <TableCell>{formatDate(project.created_at)}</TableCell>
                      <TableCell>
                        <Badge className={statusColors[project.status] || 'bg-gray-500'}>
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedProject(project)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                          </SheetTrigger>
                          {selectedProject && (
                            <SheetContent>
                              <SheetHeader>
                                <SheetTitle>Project Details</SheetTitle>
                              </SheetHeader>
                              <div className="space-y-6 py-6">
                                {selectedProject.project_reference && (
                                  <div className="bg-slate-50 p-3 rounded-md border">
                                    <h3 className="text-sm font-semibold">Project Reference</h3>
                                    <p className="text-lg font-bold">{selectedProject.project_reference}</p>
                                  </div>
                                )}
                                
                                <div className="space-y-4">
                                  <div>
                                    <h3 className="text-sm font-semibold flex items-center">
                                      <User className="mr-2 h-4 w-4 text-slate-500" /> Client
                                    </h3>
                                    <p className="text-base mt-1">
                                      {selectedProject.first_name} {selectedProject.last_name}
                                    </p>
                                  </div>
                                  
                                  <div>
                                    <h3 className="text-sm font-semibold flex items-center">
                                      <Phone className="mr-2 h-4 w-4 text-slate-500" /> Contact
                                    </h3>
                                    <p className="text-base mt-1">
                                      {selectedProject.phone}
                                    </p>
                                    <p className="text-sm text-slate-500">
                                      {selectedProject.email}
                                    </p>
                                  </div>
                                  
                                  {selectedProject.address && (
                                    <div>
                                      <h3 className="text-sm font-semibold flex items-center">
                                        <MapPin className="mr-2 h-4 w-4 text-slate-500" /> Location
                                      </h3>
                                      <p className="text-base mt-1">
                                        {selectedProject.address}
                                      </p>
                                      {selectedProject.postcode && (
                                        <p className="text-sm text-slate-500">
                                          {selectedProject.postcode}
                                        </p>
                                      )}
                                    </div>
                                  )}
                                  
                                  <div>
                                    <h3 className="text-sm font-semibold flex items-center">
                                      <Clock className="mr-2 h-4 w-4 text-slate-500" /> Date Submitted
                                    </h3>
                                    <p className="text-base mt-1">
                                      {formatDate(selectedProject.created_at)}
                                    </p>
                                  </div>
                                  
                                  <div>
                                    <h3 className="text-sm font-semibold flex items-center">
                                      <FileText className="mr-2 h-4 w-4 text-slate-500" /> Service Type
                                    </h3>
                                    <p className="text-base mt-1">
                                      {selectedProject.service_type}
                                    </p>
                                  </div>
                                  
                                  <div>
                                    <h3 className="text-sm font-semibold flex items-center">
                                      <ClipboardCheck className="mr-2 h-4 w-4 text-slate-500" /> Status
                                    </h3>
                                    <div className="mt-2">
                                      <Badge className={statusColors[selectedProject.status] || 'bg-gray-500'}>
                                        {selectedProject.status}
                                      </Badge>
                                      {selectedProject.secured && (
                                        <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                                          Secured
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                {selectedProject.message && (
                                  <div className="mt-6">
                                    <h3 className="text-sm font-semibold mb-2">Client Message</h3>
                                    <div className="bg-slate-50 p-4 rounded-md border text-sm whitespace-pre-wrap">
                                      {selectedProject.message}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </SheetContent>
                          )}
                        </Sheet>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="live">
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects
                    .filter(project => project.status === 'live')
                    .map((project) => (
                      <TableRow key={project.id} className={project.secured ? "bg-slate-50" : ""}>
                        <TableCell className="font-medium">
                          {project.project_reference || "-"}
                        </TableCell>
                        <TableCell>
                          {project.first_name} {project.last_name}
                        </TableCell>
                        <TableCell>{project.service_type}</TableCell>
                        <TableCell>{formatDate(project.created_at)}</TableCell>
                        <TableCell className="text-right">
                          <Sheet>
                            <SheetTrigger asChild>
                              <Button variant="ghost" size="sm" onClick={() => setSelectedProject(project)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                            </SheetTrigger>
                          </Sheet>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="secured">
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects
                    .filter(project => project.secured)
                    .map((project) => (
                      <TableRow key={project.id} className="bg-slate-50">
                        <TableCell className="font-medium">
                          {project.project_reference}
                        </TableCell>
                        <TableCell>
                          {project.first_name} {project.last_name}
                        </TableCell>
                        <TableCell>{project.service_type}</TableCell>
                        <TableCell>{formatDate(project.created_at)}</TableCell>
                        <TableCell className="text-right">
                          <Sheet>
                            <SheetTrigger asChild>
                              <Button variant="ghost" size="sm" onClick={() => setSelectedProject(project)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                            </SheetTrigger>
                          </Sheet>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EngineerProjects;
