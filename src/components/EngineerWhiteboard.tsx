
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SquarePen, Plus, Calendar, FileText, ArrowRight } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';

// This would typically be fetched from the database
const mockProjects = [
  { id: 1, title: "Residential Extension - Islington", client: "Sarah Johnson", lastActivity: "2023-09-15", status: "In Progress" },
  { id: 2, title: "Commercial Renovation - Camden", client: "Blue Sky Properties", lastActivity: "2023-09-10", status: "In Review" },
  { id: 3, title: "Structural Assessment - Kensington", client: "Michael Thompson", lastActivity: "2023-09-05", status: "Completed" },
];

const EngineerWhiteboard = () => {
  const navigate = useNavigate();
  const { userName } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    let filtered = mockProjects;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        project.client.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by status
    if (activeTab !== "all") {
      const statusMap: Record<string, string> = {
        "active": "In Progress",
        "review": "In Review",
        "completed": "Completed"
      };
      
      filtered = filtered.filter(project => project.status === statusMap[activeTab]);
    }
    
    setFilteredProjects(filtered);
  }, [searchTerm, activeTab]);

  const handleCreateNewWhiteboard = () => {
    // This would typically create a new whiteboard in the database
    // and redirect to it
    navigate(`/engineer/whiteboard/new`);
  };

  const goToWhiteboard = (projectId: number) => {
    navigate(`/engineer/whiteboard/${projectId}`);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl">Project Whiteboards</CardTitle>
            <CardDescription>Collaborate with clients on project drawings and notes</CardDescription>
          </div>
          <Button onClick={handleCreateNewWhiteboard} className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="mr-2 h-4 w-4" />
            New Whiteboard
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="active">In Progress</TabsTrigger>
              <TabsTrigger value="review">In Review</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 gap-4">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-6 flex-grow">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium 
                            ${project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                              project.status === 'In Review' ? 'bg-amber-100 text-amber-800' : 
                              'bg-green-100 text-green-800'}`}>
                            {project.status}
                          </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Last activity: {new Date(project.lastActivity).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="p-4 flex items-center justify-end bg-muted/30 border-t md:border-t-0 md:border-l">
                        <Button 
                          variant="outline" 
                          className="mr-2"
                          onClick={() => {}}>
                          <FileText className="h-4 w-4 mr-2" />
                          Details
                        </Button>
                        <Button 
                          className="bg-emerald-600 hover:bg-emerald-700"
                          onClick={() => goToWhiteboard(project.id)}>
                          <SquarePen className="h-4 w-4 mr-2" />
                          Whiteboard
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <SquarePen className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-lg font-semibold">No projects found</h3>
                <p className="text-sm text-muted-foreground">Try adjusting your search or create a new whiteboard.</p>
                <Button onClick={handleCreateNewWhiteboard} className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="mr-2 h-4 w-4" />
                  New Whiteboard
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EngineerWhiteboard;
