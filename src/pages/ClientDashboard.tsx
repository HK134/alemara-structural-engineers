
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, FileText, MessageSquare, Wrench, HelpCircle, CheckCircle, FileCheck, Package, User } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import ClientDashboardHeader from '@/components/ClientDashboardHeader';
import ProjectStatus, { ProjectStage } from '@/components/ProjectStatus';

const ClientDashboard = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  // Mock data for client projects with stages and lead engineers
  const projects = [
    {
      id: "W-25-001",
      name: "Home Extension Survey",
      status: "In Progress",
      stage: "Site Visit" as ProjectStage,
      due: "2024-08-15",
      lastUpdated: "2024-07-28",
      progress: 33,
      isArchitect: false,
      leadEngineer: "Sarah Johnson"
    },
    {
      id: "W-25-002",
      name: "Structural Assessment",
      status: "Completed",
      stage: "Final Package" as ProjectStage,
      due: "2024-07-10",
      lastUpdated: "2024-07-09",
      progress: 100,
      isArchitect: false,
      leadEngineer: "Michael Chen"
    },
    {
      id: "W-25-003",
      name: "Building Regulations",
      status: "Awaiting Info",
      stage: "Schematic Submission" as ProjectStage,
      due: "2024-09-05",
      lastUpdated: "2024-07-20",
      progress: 66,
      isArchitect: true,
      leadEngineer: "David Smith"
    },
    {
      id: "W-25-004",
      name: "Commercial Development",
      status: "In Progress",
      stage: "Schematic Submission" as ProjectStage,
      due: "2024-10-15",
      lastUpdated: "2024-07-30",
      progress: 66,
      isArchitect: true,
      leadEngineer: "Emily Wilson"
    }
  ];

  // Filter projects where user is an architect
  const architectProjects = projects.filter(project => project.isArchitect);
  // Filter projects where user is a one-off client
  const clientProjects = projects.filter(project => !project.isArchitect);

  // Get stage icon based on project stage
  const getStageIcon = (stage: ProjectStage) => {
    switch(stage) {
      case 'Site Visit':
        return <Calendar className="h-4 w-4 mr-1" />;
      case 'Schematic Submission':
        return <FileCheck className="h-4 w-4 mr-1" />;
      case 'Final Package':
        return <Package className="h-4 w-4 mr-1" />;
      default:
        return <CheckCircle className="h-4 w-4 mr-1" />;
    }
  };

  // Mock data for upcoming appointments
  const appointments = [
    {
      date: "2024-08-10",
      time: "10:00 AM",
      type: "Site Visit",
      address: "123 London Road, SE1 2XY"
    }
  ];

  const handleSupportClick = () => {
    navigate('/#faq');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientDashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Projects</CardTitle>
              <FileText className="h-5 w-5 text-gray-500" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{projects.length}</p>
              <p className="text-sm text-gray-500">Active projects</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Next Appointment</CardTitle>
              <Calendar className="h-5 w-5 text-gray-500" />
            </CardHeader>
            <CardContent>
              {appointments.length > 0 ? (
                <>
                  <p className="text-xl font-bold">{appointments[0].date}</p>
                  <p className="text-sm text-gray-500">{appointments[0].time} - {appointments[0].type}</p>
                </>
              ) : (
                <p className="text-sm text-gray-500">No upcoming appointments</p>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" onClick={() => navigate('/book-appointment')}>
                <Calendar className="mr-2 h-4 w-4" />
                Book New Visit
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Support</CardTitle>
              <MessageSquare className="h-5 w-5 text-gray-500" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">Need assistance with your projects?</p>
              <div className="flex flex-col space-y-2">
                <Button size="sm" variant="outline" onClick={handleSupportClick}>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  FAQ / Help Center
                </Button>
                <Button size="sm" variant="outline" onClick={() => navigate('/#contact')}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Contractor Services</CardTitle>
              <CardDescription>Request professional contractors for your project</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                Our vetted contractors can implement all recommendations from your structural survey.
                We coordinate the entire process for a seamless experience.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => navigate('/request-contractor')}>
                <Wrench className="mr-2 h-4 w-4" />
                Request Contractor Quote
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Book Another Visit</CardTitle>
              <CardDescription>Schedule a follow-up or additional site visit</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                Need another assessment or a follow-up inspection? 
                Our structural engineers are available for additional site visits.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => navigate('/book-appointment')}>
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Site Visit
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Projects</CardTitle>
              <CardDescription>
                Track the progress of your structural engineering projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead>Lead Engineer</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.id}</TableCell>
                      <TableCell>{project.name}</TableCell>
                      <TableCell><ProjectStatus status={project.status} stage={project.stage} /></TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {getStageIcon(project.stage)}
                          <span>{project.stage}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1 text-gray-500" />
                          <span>{project.leadEngineer}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="w-full">
                          <Progress value={project.progress} className="h-2" />
                          <span className="text-xs text-gray-500 mt-1">{project.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{project.due}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => navigate(`/client/projects/${project.id}`)}>
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {architectProjects.length > 0 && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Architect Projects Overview</CardTitle>
                <CardDescription>Projects where you're acting as an architect</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {architectProjects.map(project => (
                    <Card key={project.id} className="overflow-hidden">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <span className="text-xs text-gray-500">{project.id}</span>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="flex justify-between items-center mb-2">
                          <ProjectStatus status={project.status} />
                          <span className="text-xs">{project.due}</span>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium">{project.stage}</span>
                            <span className="text-xs">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                        <div className="mt-3 flex items-center">
                          <User className="h-3 w-3 mr-1 text-gray-500" />
                          <span className="text-xs text-gray-600">Lead: {project.leadEngineer}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(`/client/projects/${project.id}`)}>
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;
