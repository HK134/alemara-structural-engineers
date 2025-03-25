
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, FileText, MessageSquare } from "lucide-react";
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
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Support</CardTitle>
              <MessageSquare className="h-5 w-5 text-gray-500" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">Need assistance with your projects?</p>
              <Button size="sm" variant="outline">Contact Us</Button>
            </CardContent>
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
