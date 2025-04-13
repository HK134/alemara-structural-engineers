import React, { useState } from 'react';
import { toast } from 'sonner';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ChevronDown, ChevronUp, Edit, LockIcon, UnlockIcon, UserCheck, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { assignEngineerToProject, unassignEngineerFromProject, deleteSubmission, createClientAccount } from '@/utils/formSubmissionDB';

type Engineer = {
  id: string;
  name: string;
  email: string;
  active: boolean;
  created_at: string;
}

type FormSubmission = {
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
  engineer_id: string | null;
  address: string | null;
  completion_date: string | null;
  archived_date: string | null;
}

interface FormSubmissionsTableProps {
  submissions: FormSubmission[];
  engineers?: Engineer[];
  onRefetch: () => void;
}

const statusColors: Record<string, string> = {
  'new': 'bg-blue-500',
  'contacted': 'bg-yellow-500',
  'live': 'bg-purple-500',
  'closed': 'bg-green-500',
  'archived': 'bg-gray-500'
};

const FormSubmissionsTable: React.FC<FormSubmissionsTableProps> = ({ 
  submissions,
  engineers,
  onRefetch
}) => {
  const [expandedRows, setExpandedRows] = useState<{[key: string]: boolean}>({});
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const toggleRowExpanded = (id: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleSecuredStatus = async (id: string, currentStatus: boolean) => {
    try {
      let updateData: any = { secured: !currentStatus };
      
      if (!currentStatus) {
        const { data: projectRef } = await supabase.rpc('generate_project_reference');
        if (projectRef) {
          updateData.project_reference = projectRef;
        }
        
        const submission = submissions.find(s => s.id === id);
        if (submission) {
          const result = await createClientAccount(submission);
          if (result.success) {
            toast.success(`Client portal access created for ${submission.email}`);
          } else {
            toast.error(`Failed to create client access: ${result.message}`);
          }
        }
      }
      
      const { error } = await supabase
        .from('form_submissions')
        .update(updateData)
        .eq('id', id);
        
      if (error) throw error;
      
      toast.success(currentStatus ? 'Project unlocked' : 'Project secured');
      onRefetch();
      
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission({
          ...selectedSubmission, 
          secured: !currentStatus,
          project_reference: !currentStatus && updateData.project_reference ? 
            updateData.project_reference : selectedSubmission.project_reference
        });
      }
    } catch (error) {
      console.error('Error toggling secured status:', error);
      toast.error('Failed to update project status');
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('form_submissions')
        .update({ status: newStatus })
        .eq('id', id);
        
      if (error) throw error;
      
      toast.success(`Status updated to ${newStatus}`);
      onRefetch();
      
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission({...selectedSubmission, status: newStatus});
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const assignEngineer = async (projectId: string, engineerId: string | null) => {
    try {
      if (engineerId) {
        const result = await assignEngineerToProject(projectId, engineerId);
        if (result.error) throw result.error;
        toast.success('Engineer assigned to project. Status set to LIVE');
      } else {
        const result = await unassignEngineerFromProject(projectId);
        if (result.error) throw result.error;
        toast.success('Engineer unassigned from project. Status set to CONTACTED');
      }
      
      onRefetch();
      
      if (selectedSubmission && selectedSubmission.id === projectId) {
        setSelectedSubmission({
          ...selectedSubmission, 
          engineer_id: engineerId,
          status: engineerId ? 'live' : 'contacted'
        });
      }
    } catch (error) {
      console.error('Error managing engineer assignment:', error);
      toast.error('Failed to update engineer assignment');
    }
  };

  const handleDeleteSubmission = async (id: string) => {
    try {
      const result = await deleteSubmission(id);
      
      if (!result.success) {
        throw new Error(result.message);
      }
      
      toast.success('Lead deleted successfully');
      onRefetch();
    } catch (error) {
      console.error('Error deleting submission:', error);
      toast.error('Failed to delete lead');
    }
  };

  const getEngineerName = (engineerId: string | null) => {
    if (!engineerId) return 'Not assigned';
    const engineer = engineers?.find(e => e.id === engineerId);
    return engineer ? engineer.name : 'Unknown engineer';
  };

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[30px]"></TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Email</TableHead>
            <TableHead className="hidden md:table-cell">Phone</TableHead>
            <TableHead className="hidden md:table-cell">Reference</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Engineer</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => (
            <React.Fragment key={submission.id}>
              <TableRow className={submission.secured ? "bg-green-50" : ""}>
                <TableCell>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0" 
                    onClick={() => toggleRowExpanded(submission.id)}
                  >
                    {expandedRows[submission.id] ? 
                      <ChevronUp className="h-4 w-4" /> : 
                      <ChevronDown className="h-4 w-4" />
                    }
                  </Button>
                </TableCell>
                <TableCell className="font-medium">
                  {formatDate(submission.created_at)}
                </TableCell>
                <TableCell>
                  {submission.first_name} {submission.last_name}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {submission.email}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {submission.phone}
                </TableCell>
                <TableCell className="hidden md:table-cell font-medium">
                  {submission.project_reference || "-"}
                </TableCell>
                <TableCell>
                  <Badge className={`${statusColors[submission.status] || 'bg-gray-500'}`}>
                    {submission.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {submission.engineer_id ? (
                    <Badge variant="outline" className="bg-slate-100">
                      {getEngineerName(submission.engineer_id)}
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-gray-500">
                      Unassigned
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end">
                    <Button
                      variant="ghost" 
                      size="icon"
                      onClick={() => toggleSecuredStatus(submission.id, submission.secured)}
                      title={submission.secured ? "Unsecure project" : "Secure project"}
                      className="mr-1"
                    >
                      {submission.secured ? 
                        <UnlockIcon size={16} className="text-orange-500" /> : 
                        <LockIcon size={16} className="text-green-500" />
                      }
                    </Button>
                    
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button
                          variant="ghost" 
                          size="icon"
                          onClick={() => setSelectedSubmission(submission)}
                          className="mr-1"
                        >
                          <Edit size={16} />
                        </Button>
                      </SheetTrigger>
                      {selectedSubmission && (
                        <SheetContent className="w-full sm:max-w-md">
                          <SheetHeader>
                            <SheetTitle>Lead Details</SheetTitle>
                          </SheetHeader>
                          <div className="py-6">
                            <div className="space-y-6">
                              {selectedSubmission.secured && selectedSubmission.project_reference && (
                                <div className="bg-green-50 p-3 rounded-md border border-green-100">
                                  <h3 className="text-sm font-bold text-green-700">Project Reference</h3>
                                  <p className="mt-1 text-lg font-bold">{selectedSubmission.project_reference}</p>
                                </div>
                              )}
                              
                              <div>
                                <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                                <p className="mt-1 text-lg">{selectedSubmission.first_name} {selectedSubmission.last_name}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                                <p className="mt-1 text-lg">{selectedSubmission.email}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                                <p className="mt-1 text-lg">{selectedSubmission.phone}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-gray-500">Service Type</h3>
                                <p className="mt-1 text-lg">{selectedSubmission.service_type}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-gray-500">Message</h3>
                                <p className="mt-1 text-lg whitespace-pre-wrap">{selectedSubmission.message || 'No message provided'}</p>
                              </div>
                              
                              <div className="space-y-4">
                                <div className="flex flex-col">
                                  <h3 className="text-sm font-medium text-gray-500 mb-2">Assigned Engineer</h3>
                                  <Select
                                    value={selectedSubmission.engineer_id || "unassigned"}
                                    onValueChange={(value) => assignEngineer(selectedSubmission.id, value === "unassigned" ? null : value)}
                                  >
                                    <SelectTrigger className="w-full">
                                      <SelectValue placeholder="Select an engineer" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="unassigned">Not Assigned</SelectItem>
                                      {engineers?.map((engineer) => (
                                        <SelectItem key={engineer.id} value={engineer.id}>
                                          {engineer.name}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                
                                <div className="flex space-x-2">
                                  <div className="flex-1">
                                    <h3 className="text-sm font-medium text-gray-500">Status</h3>
                                    <div className="mt-2">
                                      <div className="flex flex-wrap gap-2">
                                        {['new', 'contacted', 'live', 'closed', 'archived'].map((status) => (
                                          <Button
                                            key={status}
                                            variant={selectedSubmission.status === status ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => updateStatus(selectedSubmission.id, status)}
                                            className="capitalize"
                                          >
                                            {status}
                                          </Button>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="flex-1">
                                    <h3 className="text-sm font-medium text-gray-500">Project Status</h3>
                                    <div className="mt-2">
                                      <Button
                                        variant={selectedSubmission.secured ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => toggleSecuredStatus(selectedSubmission.id, selectedSubmission.secured)}
                                        className={selectedSubmission.secured ? "bg-green-600 hover:bg-green-700" : ""}
                                      >
                                        {selectedSubmission.secured ? (
                                          <div className="flex items-center">
                                            <LockIcon size={14} className="mr-1" />
                                            Secured
                                          </div>
                                        ) : (
                                          <div className="flex items-center">
                                            <UnlockIcon size={14} className="mr-1" />
                                            Not Secured
                                          </div>
                                        )}
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {selectedSubmission.postcode && (
                                <div>
                                  <h3 className="text-sm font-medium text-gray-500">Postcode</h3>
                                  <p className="mt-1 text-lg">{selectedSubmission.postcode || 'Not provided'}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </SheetContent>
                      )}
                    </Sheet>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost" 
                          size="icon"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          title="Delete lead"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Lead</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this lead? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={() => handleDeleteSubmission(submission.id)}
                            className="bg-red-500 text-white hover:bg-red-600"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
              
              {expandedRows[submission.id] && (
                <TableRow className={submission.secured ? "bg-green-50 border-b" : "border-b"}>
                  <TableCell colSpan={9} className="p-0">
                    <div className="p-4 bg-slate-50 border-t">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-1">Postcode</h4>
                          <p className="text-sm">{submission.postcode || 'Not provided'}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-1">Address</h4>
                          <p className="text-sm">{submission.address || 'Not provided'}</p>
                        </div>
                        
                        <div className="md:col-span-2">
                          <h4 className="text-sm font-semibold mb-1">Service Type</h4>
                          <p className="text-sm">{submission.service_type}</p>
                        </div>
                        
                        <div className="md:col-span-2">
                          <h4 className="text-sm font-semibold mb-1">Client Message</h4>
                          <div className="bg-white p-3 rounded border text-sm max-h-48 overflow-y-auto">
                            {submission.message ? 
                              <p className="whitespace-pre-wrap">{submission.message}</p> : 
                              <p className="text-gray-500 italic">No message provided</p>
                            }
                          </div>
                        </div>
                        
                        {submission.secured && (
                          <div className="md:col-span-2 flex items-center space-x-2 bg-green-100 p-3 rounded">
                            <UserCheck className="text-green-600" size={18} />
                            <span className="text-green-700 text-sm">
                              Client portal access enabled with their email as login
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FormSubmissionsTable;
