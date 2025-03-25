
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { toast } from 'sonner';
import { Edit, Filter, LockIcon, LogOut, Map, MoreHorizontal, Search, UnlockIcon } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import LeadAnalytics from '@/components/LeadAnalytics';
import { generateOneDriveFolder } from '@/utils/oneDriveIntegration';

// Types for form submissions
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
}

const statusColors: Record<string, string> = {
  'new': 'bg-blue-500',
  'contacted': 'bg-yellow-500',
  'closed': 'bg-green-500',
  'archived': 'bg-gray-500'
};

const Admin = () => {
  const { logout } = useAuth();
  const [currentTab, setCurrentTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [viewMode, setViewMode] = useState<'leads' | 'map'>('leads');
  const itemsPerPage = 10;

  // Fetch form submissions
  const { data: submissions, isLoading, error, refetch } = useQuery({
    queryKey: ['formSubmissions', currentTab, searchQuery, currentPage],
    queryFn: async () => {
      let query = supabase
        .from('form_submissions')
        .select('*');

      // Apply status filter if not "all"
      if (currentTab !== 'all') {
        query = query.eq('status', currentTab);
      }

      // Apply search if provided
      if (searchQuery) {
        query = query.or(`first_name.ilike.%${searchQuery}%,last_name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%`);
      }

      // Apply pagination
      const from = (currentPage - 1) * itemsPerPage;
      const to = from + itemsPerPage - 1;
      query = query.range(from, to).order('created_at', { ascending: false });

      const { data, error } = await query;
      
      if (error) {
        throw new Error(`Error fetching submissions: ${error.message}`);
      }
      
      return data as FormSubmission[];
    }
  });

  // Count total submissions (for pagination)
  const { data: totalCount } = useQuery({
    queryKey: ['formSubmissionsCount', currentTab, searchQuery],
    queryFn: async () => {
      let query = supabase
        .from('form_submissions')
        .select('id', { count: 'exact' });

      // Apply status filter if not "all"
      if (currentTab !== 'all') {
        query = query.eq('status', currentTab);
      }

      // Apply search if provided
      if (searchQuery) {
        query = query.or(`first_name.ilike.%${searchQuery}%,last_name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%`);
      }

      const { count, error } = await query;
      
      if (error) {
        throw new Error(`Error counting submissions: ${error.message}`);
      }
      
      return count || 0;
    }
  });

  const totalPages = totalCount ? Math.ceil(totalCount / itemsPerPage) : 1;

  // Update submission status
  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('form_submissions')
        .update({ status: newStatus })
        .eq('id', id);
        
      if (error) throw error;
      
      toast.success(`Status updated to ${newStatus}`);
      refetch();
      
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission({...selectedSubmission, status: newStatus});
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  // Toggle secured status and generate reference if being secured
  const toggleSecuredStatus = async (id: string, currentStatus: boolean) => {
    try {
      let updateData: { secured: boolean; project_reference?: string | null } = {
        secured: !currentStatus
      };
      
      // If we're securing the project, generate a reference
      if (!currentStatus) {
        // Call the function to generate a reference
        const { data: refData, error: refError } = await supabase
          .rpc('generate_project_reference');
          
        if (refError) throw refError;
        
        updateData.project_reference = refData;
        
        // Create a new folder in OneDrive for this project
        const customerName = selectedSubmission ? 
          `${selectedSubmission.first_name} ${selectedSubmission.last_name}` : 
          'Unknown Customer';
        
        try {
          await generateOneDriveFolder(updateData.project_reference as string, customerName);
          toast.success(`OneDrive folder created for project ${updateData.project_reference}`);
        } catch (folderError) {
          console.error("Failed to create OneDrive folder:", folderError);
          toast.error("Project secured, but OneDrive folder creation failed");
        }
      } else {
        // If unsecuring, remove the reference
        updateData.project_reference = null;
      }
      
      const { error } = await supabase
        .from('form_submissions')
        .update(updateData)
        .eq('id', id);
        
      if (error) throw error;
      
      toast.success(`Project ${!currentStatus ? 'secured' : 'unsecured'} successfully`);
      refetch();
      
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission({
          ...selectedSubmission, 
          secured: !currentStatus,
          project_reference: !currentStatus ? updateData.project_reference : null
        });
      }
    } catch (error) {
      console.error('Error toggling secured status:', error);
      toast.error('Failed to update secured status');
    }
  };

  // Format date for display
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

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Lead Management Dashboard</h1>
        <div className="flex items-center gap-3">
          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'leads' | 'map')} className="mr-4">
            <TabsList>
              <TabsTrigger value="leads" className="flex items-center gap-2">
                <Filter size={16} />
                Leads
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center gap-2">
                <Map size={16} />
                Map
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button 
            variant="outline" 
            onClick={logout}
            className="flex items-center gap-2"
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </div>

      {viewMode === 'leads' ? (
        <>
          <div className="mb-6 flex flex-wrap gap-4 justify-between items-center">
            <div className="flex items-center w-full md:w-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search by name or email"
                className="pl-10 w-full md:w-80"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page on new search
                }}
              />
            </div>
          </div>

          <Tabs defaultValue="all" value={currentTab} onValueChange={setCurrentTab} className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Leads</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="contacted">Contacted</TabsTrigger>
              <TabsTrigger value="closed">Closed</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>

            <TabsContent value={currentTab} className="w-full">
              {isLoading ? (
                <div className="text-center py-8">Loading submissions...</div>
              ) : error ? (
                <div className="text-center py-8 text-red-500">Error loading data. Please try again.</div>
              ) : submissions && submissions.length > 0 ? (
                <>
                  <div className="rounded-md border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead className="hidden md:table-cell">Email</TableHead>
                          <TableHead className="hidden md:table-cell">Phone</TableHead>
                          <TableHead className="hidden md:table-cell">Reference</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {submissions.map((submission) => (
                          <TableRow key={submission.id} className={submission.secured ? "bg-green-50" : ""}>
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
                                          
                                          <div className="flex space-x-2">
                                            <div className="flex-1">
                                              <h3 className="text-sm font-medium text-gray-500">Status</h3>
                                              <div className="mt-2">
                                                <div className="flex flex-wrap gap-2">
                                                  {['new', 'contacted', 'closed', 'archived'].map((status) => (
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
                                          
                                          {selectedSubmission.postcode && (
                                            <div>
                                              <h3 className="text-sm font-medium text-gray-500">Postcode</h3>
                                              <p className="mt-1 text-lg">{selectedSubmission.postcode}</p>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </SheetContent>
                                  )}
                                </Sheet>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  
                  {totalPages > 1 && (
                    <Pagination className="mt-4">
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                          .filter(page => {
                            // Show first page, last page, current page, and pages around current
                            return page === 1 || 
                                   page === totalPages || 
                                   (page >= currentPage - 1 && page <= currentPage + 1);
                          })
                          .map((page, i, array) => {
                            // Show ellipsis if there's a gap
                            if (i > 0 && array[i - 1] !== page - 1) {
                              return (
                                <PaginationItem key={`ellipsis-${page}`}>
                                  <div className="px-4">...</div>
                                </PaginationItem>
                              );
                            }
                            
                            return (
                              <PaginationItem key={page}>
                                <PaginationLink 
                                  isActive={currentPage === page}
                                  onClick={() => setCurrentPage(page)}
                                >
                                  {page}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          })}
                        
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  )}
                </>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No submissions found. Try changing your search or filter criteria.
                </div>
              )}
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <LeadAnalytics />
      )}
    </div>
  );
};

export default Admin;
