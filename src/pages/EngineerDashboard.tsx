
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, User, CheckCircle, FileCheck, Package, Calendar, Clock, PieChart, BarChart, DollarSign } from "lucide-react";
import EngineerDashboardHeader from '@/components/EngineerDashboardHeader';
import ProjectStatus, { ProjectStage } from '@/components/ProjectStatus';

const EngineerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("projects");
  
  // Mock data for engineer projects with stages
  const projects = [
    {
      id: "W-25-001",
      name: "Home Extension Survey",
      status: "In Progress",
      stage: "Site Visit" as ProjectStage,
      due: "2024-08-15",
      lastUpdated: "2024-07-28",
      progress: 33,
      client: "James Wilson",
      isArchitect: false,
      notes: "Need to check foundation integrity"
    },
    {
      id: "W-25-002",
      name: "Structural Assessment",
      status: "Completed",
      stage: "Final Package" as ProjectStage,
      due: "2024-07-10",
      lastUpdated: "2024-07-09",
      progress: 100,
      client: "Sarah Johnson",
      isArchitect: false,
      notes: "Completed and delivered reports"
    },
    {
      id: "W-25-003",
      name: "Building Regulations",
      status: "Awaiting Info",
      stage: "Schematic Submission" as ProjectStage,
      due: "2024-09-05",
      lastUpdated: "2024-07-20",
      progress: 66,
      client: "Architect Studio Inc.",
      isArchitect: true,
      notes: "Waiting for additional floor plans"
    },
    {
      id: "W-25-004",
      name: "Commercial Development",
      status: "In Progress",
      stage: "Schematic Submission" as ProjectStage,
      due: "2024-10-15",
      lastUpdated: "2024-07-30",
      progress: 66,
      client: "BuildCo Architects",
      isArchitect: true,
      notes: "Second floor calculations pending"
    }
  ];

  // Mock data for metrics
  const metrics = {
    projectsAssigned: 18,
    projectsCompleted: 14,
    inProgress: 4,
    yearlyIncome: 145000,
    monthlyIncome: 12500,
    clientSatisfaction: 98
  };

  // Mock data for upcoming site visits
  const siteVisits = [
    {
      id: "SV-001",
      date: "2024-08-10",
      time: "10:00 AM",
      address: "123 London Road, SE1 2XY",
      client: "James Wilson",
      projectId: "W-25-001"
    }
  ];

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

  // Function to update project status and stage
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
  const [newStatus, setNewStatus] = useState("");
  const [newStage, setNewStage] = useState<ProjectStage | "">("");
  const [newProgress, setNewProgress] = useState(0);
  const [newNotes, setNewNotes] = useState("");

  const openUpdateDialog = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setNewStatus(project.status);
    setNewStage(project.stage);
    setNewProgress(project.progress);
    setNewNotes(project.notes || "");
  };

  const handleUpdateProject = () => {
    // In a real app, this would update the database
    // For now, we'll just show how it would work
    console.log("Updating project:", {
      id: selectedProject?.id,
      status: newStatus,
      stage: newStage,
      progress: newProgress,
      notes: newNotes
    });
    
    // Close dialog
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <EngineerDashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="projects" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="projects">My Projects</TabsTrigger>
            <TabsTrigger value="metrics">Performance Metrics</TabsTrigger>
            <TabsTrigger value="schedule">Site Visit Schedule</TabsTrigger>
          </TabsList>
          
          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">Active Projects</CardTitle>
                  <FileText className="h-5 w-5 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{projects.filter(p => p.status !== "Completed").length}</p>
                  <p className="text-sm text-gray-500">Currently in progress</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">Upcoming Visits</CardTitle>
                  <Calendar className="h-5 w-5 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{siteVisits.length}</p>
                  <p className="text-sm text-gray-500">Scheduled site visits</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">Income</CardTitle>
                  <DollarSign className="h-5 w-5 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">£{metrics.monthlyIncome.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">This month</p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Manage Projects</CardTitle>
                <CardDescription>
                  Update project status and progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reference</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Stage</TableHead>
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
                        <TableCell>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1 text-gray-500" />
                            {project.client}
                          </div>
                        </TableCell>
                        <TableCell><ProjectStatus status={project.status} stage={project.stage} /></TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {getStageIcon(project.stage)}
                            <span>{project.stage}</span>
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
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => openUpdateDialog(project)}>
                                Update
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Update Project Status</DialogTitle>
                                <DialogDescription>
                                  Project: {selectedProject?.name} ({selectedProject?.id})
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <label className="text-right text-sm">Status</label>
                                  <Select value={newStatus} onValueChange={setNewStatus} className="col-span-3">
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="In Progress">In Progress</SelectItem>
                                      <SelectItem value="Awaiting Info">Awaiting Info</SelectItem>
                                      <SelectItem value="Completed">Completed</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <label className="text-right text-sm">Stage</label>
                                  <Select value={newStage} onValueChange={(value) => setNewStage(value as ProjectStage)} className="col-span-3">
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select stage" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Site Visit">Site Visit</SelectItem>
                                      <SelectItem value="Schematic Submission">Schematic Submission</SelectItem>
                                      <SelectItem value="Final Package">Final Package</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <label className="text-right text-sm">Progress (%)</label>
                                  <Input 
                                    type="number" 
                                    min="0"
                                    max="100"
                                    value={newProgress}
                                    onChange={(e) => setNewProgress(Number(e.target.value))}
                                    className="col-span-3"
                                  />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <label className="text-right text-sm">Notes</label>
                                  <Textarea
                                    value={newNotes}
                                    onChange={(e) => setNewNotes(e.target.value)}
                                    className="col-span-3"
                                    rows={3}
                                  />
                                </div>
                              </div>
                              <DialogFooter>
                                <Button type="submit" onClick={handleUpdateProject}>Update Project</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Metrics Tab */}
          <TabsContent value="metrics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">Total Projects</CardTitle>
                  <FileText className="h-5 w-5 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{metrics.projectsAssigned}</p>
                  <p className="text-sm text-gray-500">Projects assigned to date</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">Completed</CardTitle>
                  <CheckCircle className="h-5 w-5 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{metrics.projectsCompleted}</p>
                  <p className="text-sm text-gray-500">Successfully delivered</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">Client Satisfaction</CardTitle>
                  <User className="h-5 w-5 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{metrics.clientSatisfaction}%</p>
                  <p className="text-sm text-gray-500">Average rating</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2" />
                    Project Completion Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-gray-500">Monthly completion metrics would display here</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Income Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Yearly Income</span>
                        <span className="text-sm font-medium">£{metrics.yearlyIncome.toLocaleString()}</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Monthly Average</span>
                        <span className="text-sm font-medium">£{metrics.monthlyIncome.toLocaleString()}</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Per Project Average</span>
                        <span className="text-sm font-medium">£{Math.round(metrics.yearlyIncome / metrics.projectsCompleted).toLocaleString()}</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Site Visits</CardTitle>
                <CardDescription>
                  Your scheduled appointments with clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                {siteVisits.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Reference</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Project</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {siteVisits.map((visit) => (
                        <TableRow key={visit.id}>
                          <TableCell className="font-medium">{visit.id}</TableCell>
                          <TableCell>{visit.date}</TableCell>
                          <TableCell>{visit.time}</TableCell>
                          <TableCell>{visit.address}</TableCell>
                          <TableCell>{visit.client}</TableCell>
                          <TableCell>{visit.projectId}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" onClick={() => navigate(`/engineer/visits/${visit.id}`)}>
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No upcoming site visits scheduled</p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={() => navigate('/engineer/schedule')}>
                  View Full Schedule
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Completed Site Reports</CardTitle>
                <CardDescription>
                  Site reports waiting for your review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No reports pending review</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default EngineerDashboard;
