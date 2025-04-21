
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Clock, FileText, Trash2, Plus, CalendarIcon, Calendar as CalendarIcon2 } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Database } from '@/integrations/supabase/types';

type Timesheet = {
  id: string;
  engineer_id: string;
  project_id: string;
  date: string;
  hours: number;
  description: string;
  created_at: string;
  project_reference?: string;
}

// Custom type for project data
type Project = {
  id: string;
  project_reference: string;
  status: string;
}

const EngineerTimesheet = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [hours, setHours] = useState<number>(1);
  const [description, setDescription] = useState<string>("");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [timesheetToDelete, setTimesheetToDelete] = useState<string | null>(null);
  
  // Query to fetch engineer's projects
  const { data: projects = [] } = useQuery({
    queryKey: ['engineerProjects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('form_submissions')
        .select('id, project_reference, status')
        .eq('status', 'In Progress')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
  });
  
  // Query to fetch engineer's timesheets
  const { data: timesheets = [], isLoading } = useQuery({
    queryKey: ['engineerTimesheets'],
    queryFn: async () => {
      // First, create a custom join query
      const { data, error } = await supabase
        .from('engineer_timesheets')
        .select(`
          id, 
          engineer_id, 
          project_id, 
          date, 
          hours, 
          description, 
          created_at,
          form_submissions (project_reference)
        `)
        .order('date', { ascending: false });
      
      if (error) throw error;
      
      // Transform the data to include project_reference
      return (data || []).map((timesheet: any) => ({
        ...timesheet,
        project_reference: timesheet.form_submissions?.project_reference || 'Unknown'
      }));
    },
  });
  
  // Mutation to add a new timesheet entry
  const addTimesheetMutation = useMutation({
    mutationFn: async (newTimesheet: { 
      engineer_id: string; 
      project_id: string; 
      date: string; 
      hours: number; 
      description: string;
    }) => {
      const { data, error } = await supabase
        .from('engineer_timesheets')
        .insert([newTimesheet])
        .select();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['engineerTimesheets'] });
      toast({
        title: "Timesheet Entry Added",
        description: "Your timesheet entry has been successfully recorded.",
      });
      // Reset form
      setDescription("");
      setHours(1);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to add timesheet entry: ${error.message}`,
        variant: "destructive",
      });
    }
  });
  
  // Mutation to delete a timesheet entry
  const deleteTimesheetMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('engineer_timesheets')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['engineerTimesheets'] });
      toast({
        title: "Timesheet Entry Deleted",
        description: "The timesheet entry has been removed.",
      });
      setIsDeleteDialogOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete timesheet entry: ${error.message}`,
        variant: "destructive",
      });
    }
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedProject || hours <= 0 || !description) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields with valid values.",
        variant: "destructive",
      });
      return;
    }
    
    const newTimesheet = {
      engineer_id: "placeholder-engineer-id", // This would come from auth context in a real app
      project_id: selectedProject,
      date: format(date, "yyyy-MM-dd"),
      hours,
      description,
    };
    
    addTimesheetMutation.mutate(newTimesheet);
  };
  
  const confirmDelete = (id: string) => {
    setTimesheetToDelete(id);
    setIsDeleteDialogOpen(true);
  };
  
  const handleDelete = () => {
    if (timesheetToDelete) {
      deleteTimesheetMutation.mutate(timesheetToDelete);
    }
  };
  
  // Calculate total hours for the current week
  const currentWeekTotal = timesheets
    .filter((entry: Timesheet) => {
      const entryDate = new Date(entry.date);
      const now = new Date();
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
      startOfWeek.setHours(0, 0, 0, 0);
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(endOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999);
      
      return entryDate >= startOfWeek && entryDate <= endOfWeek;
    })
    .reduce((sum: number, entry: Timesheet) => sum + Number(entry.hours), 0);
  
  // Calculate total hours for the current month
  const currentMonthTotal = timesheets
    .filter((entry: Timesheet) => {
      const entryDate = new Date(entry.date);
      const now = new Date();
      return entryDate.getMonth() === now.getMonth() && 
             entryDate.getFullYear() === now.getFullYear();
    })
    .reduce((sum: number, entry: Timesheet) => sum + Number(entry.hours), 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">This Week</CardTitle>
            <Clock className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{currentWeekTotal} hours</p>
            <p className="text-sm text-gray-500">Total hours this week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">This Month</CardTitle>
            <CalendarIcon2 className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{currentMonthTotal} hours</p>
            <p className="text-sm text-gray-500">Total hours this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Latest Entry</CardTitle>
            <FileText className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            {timesheets.length > 0 ? (
              <>
                <p className="text-lg font-semibold">{timesheets[0].project_reference}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(timesheets[0].date), "dd MMM yyyy")} • {timesheets[0].hours} hours
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-500">No timesheet entries yet</p>
            )}
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Log Time</CardTitle>
            <CardDescription>Record your working hours</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Project</label>
                <Select value={selectedProject} onValueChange={setSelectedProject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    {projects.map((project: Project) => (
                      <SelectItem key={project.id} value={project.id}>
                        {project.project_reference}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Hours</label>
                <Input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={hours}
                  onChange={(e) => setHours(parseFloat(e.target.value))}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What did you work on?"
                  rows={3}
                />
              </div>
              
              <Button type="submit" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Log Time
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Timesheet Log</CardTitle>
            <CardDescription>Your recent time entries</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-4">Loading timesheet data...</div>
            ) : timesheets.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No timesheet entries found</p>
                <p className="text-sm text-gray-400 mt-1">Log your first time entry to get started</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Hours</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timesheets.map((entry: Timesheet) => (
                    <TableRow key={entry.id}>
                      <TableCell>{format(new Date(entry.date), "dd MMM yyyy")}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-mono">
                          {entry.project_reference}
                        </Badge>
                      </TableCell>
                      <TableCell>{entry.hours}</TableCell>
                      <TableCell className="max-w-[200px] truncate">
                        {entry.description}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => confirmDelete(entry.id)}
                        >
                          <Trash2 className="h-4 w-4 text-gray-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this timesheet entry? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EngineerTimesheet;
