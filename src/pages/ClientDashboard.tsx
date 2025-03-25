
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, FileText, MessageSquare, Wrench, HelpCircle } from "lucide-react";
import ClientDashboardHeader from '@/components/ClientDashboardHeader';
import ProjectStatus from '@/components/ProjectStatus';

const ClientDashboard = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  // Mock data for client projects
  const projects = [
    {
      id: "W-25-001",
      name: "Home Extension Survey",
      status: "In Progress",
      due: "2024-08-15",
      lastUpdated: "2024-07-28",
    },
    {
      id: "W-25-002",
      name: "Structural Assessment",
      status: "Completed",
      due: "2024-07-10",
      lastUpdated: "2024-07-09",
    },
    {
      id: "W-25-003",
      name: "Building Regulations",
      status: "Awaiting Info",
      due: "2024-09-05",
      lastUpdated: "2024-07-20",
    }
  ];

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
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.id}</TableCell>
                      <TableCell>{project.name}</TableCell>
                      <TableCell><ProjectStatus status={project.status} /></TableCell>
                      <TableCell>{project.due}</TableCell>
                      <TableCell>{project.lastUpdated}</TableCell>
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
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;
