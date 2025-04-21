
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminSearchBar from './AdminSearchBar';
import FormSubmissionsTable from './FormSubmissionsTable';
import AdminPagination from './AdminPagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Link2 } from 'lucide-react';

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

interface LeadsTabContentProps {
  submissions: FormSubmission[] | undefined;
  engineers: Engineer[] | undefined;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  currentTab: string;
  onTabChange: (tab: string) => void;
  isLoading: boolean;
  error: Error | null;
  onRefetch: () => void;
  selectedEngineerId?: string | null;
  onEngineerChange?: (engineerId: string | null) => void;
}

const ClientOnboardingButton = () => {
  const onboardingLink = `${window.location.origin}/client-onboarding`;
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(onboardingLink)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      });
  };

  return (
    <button
      className="inline-flex px-3 py-1 items-center border rounded shadow-sm text-sm bg-white hover:bg-gray-50 transition mr-2"
      onClick={handleCopy}
      title="Copy client onboarding link"
    >
      <Link2 className="mr-2 h-4 w-4 text-primary" />
      Client Onboarding Link
      <span className="ml-2 px-2 py-0.5 rounded bg-muted text-xs">{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
};

const LeadsTabContent: React.FC<LeadsTabContentProps> = ({
  submissions,
  engineers,
  searchQuery,
  onSearchChange,
  currentPage,
  totalPages,
  onPageChange,
  currentTab,
  onTabChange,
  isLoading,
  error,
  onRefetch,
  selectedEngineerId,
  onEngineerChange
}) => {
  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <ClientOnboardingButton />
      </div>
    
      <div className="mb-6 flex flex-wrap gap-4 justify-between items-center">
        <AdminSearchBar 
          searchQuery={searchQuery} 
          onSearchChange={onSearchChange} 
        />
        
        {engineers && engineers.length > 0 && onEngineerChange && (
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-500" />
            <Select
              value={selectedEngineerId || "all"}
              onValueChange={(value) => onEngineerChange(value === "all" ? null : value)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by engineer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Engineers</SelectItem>
                {engineers.map((engineer) => (
                  <SelectItem key={engineer.id} value={engineer.id}>
                    {engineer.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <Tabs defaultValue="all" value={currentTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Leads</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="contacted">Contacted</TabsTrigger>
          <TabsTrigger value="live">Live</TabsTrigger>
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
              <FormSubmissionsTable 
                submissions={submissions} 
                engineers={engineers}
                onRefetch={onRefetch}
              />
              
              <AdminPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            </>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No submissions found. Try changing your search or filter criteria.
            </div>
          )}
        </TabsContent>
      </Tabs>
    </>
  );
};

export default LeadsTabContent;
