
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
import { Edit, Filter, MoreHorizontal, Search } from 'lucide-react';

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
}

const statusColors: Record<string, string> = {
  'new': 'bg-blue-500',
  'contacted': 'bg-yellow-500',
  'closed': 'bg-green-500',
  'archived': 'bg-gray-500'
};

const Admin = () => {
  const [currentTab, setCurrentTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
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
      <h1 className="text-3xl font-bold mb-8">Lead Management Dashboard</h1>

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
                      <TableHead className="hidden md:table-cell">Service</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id}>
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
                        <TableCell className="hidden md:table-cell">
                          {submission.service_type}
                        </TableCell>
                        <TableCell>
                          <Badge className={`${statusColors[submission.status] || 'bg-gray-500'}`}>
                            {submission.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end">
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
                                      <div>
                                        <h3 className="text-sm font-medium text-gray-500">Status</h3>
                                        <div className="mt-2">
                                          <div className="grid grid-cols-2 gap-2">
                                            <Button 
                                              className={`${selectedSubmission.status === 'new' ? 'border-2 border-primary' : ''}`}
                                              variant={selectedSubmission.status === 'new' ? 'default' : 'outline'}
                                              onClick={() => updateStatus(selectedSubmission.id, 'new')}
                                            >
                                              New
                                            </Button>
                                            <Button 
                                              className={`${selectedSubmission.status === 'contacted' ? 'border-2 border-primary' : ''}`}
                                              variant={selectedSubmission.status === 'contacted' ? 'default' : 'outline'}
                                              onClick={() => updateStatus(selectedSubmission.id, 'contacted')}
                                            >
                                              Contacted
                                            </Button>
                                            <Button 
                                              className={`${selectedSubmission.status === 'closed' ? 'border-2 border-primary' : ''}`}
                                              variant={selectedSubmission.status === 'closed' ? 'default' : 'outline'}
                                              onClick={() => updateStatus(selectedSubmission.id, 'closed')}
                                            >
                                              Closed
                                            </Button>
                                            <Button 
                                              className={`${selectedSubmission.status === 'archived' ? 'border-2 border-primary' : ''}`}
                                              variant={selectedSubmission.status === 'archived' ? 'default' : 'outline'}
                                              onClick={() => updateStatus(selectedSubmission.id, 'archived')}
                                            >
                                              Archived
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </SheetContent>
                              )}
                            </Sheet>

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal size={16} />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => updateStatus(submission.id, 'new')}>
                                  Mark as New
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => updateStatus(submission.id, 'contacted')}>
                                  Mark as Contacted
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => updateStatus(submission.id, 'closed')}>
                                  Mark as Closed
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => updateStatus(submission.id, 'archived')}>
                                  Archive
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-6">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        aria-disabled={currentPage === 1}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(page => {
                        // Show current page, first, last, and pages adjacent to current
                        return page === 1 || 
                               page === totalPages || 
                               Math.abs(page - currentPage) <= 1;
                      })
                      .map((page, index, array) => (
                        <React.Fragment key={page}>
                          {index > 0 && array[index - 1] !== page - 1 && (
                            <PaginationItem>
                              <span className="px-2">...</span>
                            </PaginationItem>
                          )}
                          <PaginationItem>
                            <PaginationLink
                              isActive={page === currentPage}
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        </React.Fragment>
                      ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        aria-disabled={currentPage === totalPages}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <p className="text-xl text-gray-500">No submissions found</p>
              <p className="text-sm text-gray-400 mt-2">Try changing your search or filter criteria</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
